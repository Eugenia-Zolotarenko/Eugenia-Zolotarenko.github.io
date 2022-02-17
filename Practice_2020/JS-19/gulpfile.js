let    preprocessor = 'sass', // Preprocessor (sass, less, styl);
       fileswatch   = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

import pkg from 'gulp'
const { gulp, src, dest, parallel, series, watch } = pkg

import browserSync   from 'browser-sync'
import gulpSass      from 'gulp-sass'
import dartSass      from 'sass'
import sassglob      from 'gulp-sass-glob'
const  sass          = gulpSass(dartSass)
import postCss       from 'gulp-postcss'
import cssnano       from 'cssnano'
import rigger        from 'gulp-rigger'
import autoprefixer  from 'autoprefixer'
import concat        from 'gulp-concat'
import imagemin      from 'gulp-imagemin'
import changed       from 'gulp-changed'
import del           from 'del'
import uglify        from 'gulp-uglify'
import ssi           from 'ssi'


function styles() {
    return src([`app/styles/${preprocessor}/reset.*`, `app/styles/${preprocessor}/*.*`, `!app/styles/${preprocessor}/_*.*`])
        .pipe(eval(`${preprocessor}glob`)())
        .pipe(eval(preprocessor)({ 'include css': true }))
        .pipe(postCss([
            autoprefixer({ grid: 'autoplace' }),
            cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
        ]))
        .pipe(rigger())
        .pipe(concat('app.min.css'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

function scripts () {
    return src( [ 'app/js/plugins/*.js', 'app/js/*.js', '!app/js/*.min.js'] )
        .pipe(rigger())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src(['app/img/src/**/*'])
        .pipe(changed('app/img/dist/'))
        .pipe(imagemin())
        .pipe(dest('app/img/dist/'));
}

function startwatch() {
    watch(`app/styles/**/*`, { usePolling: true }, styles)
    watch(['app/js/*.js', '!app/js/*.min.js'], { usePolling: true }, scripts)
    watch('app/img/src/**/*', { usePolling: true }, images)
    watch(`app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

function buildcopy() {
    return src([
        '{app/js,app/css}/*.min.*',
        'app/img/**/*.*',
        '!app/images/src/**/*',
        'app/fonts/**/*'
    ], { base: 'app/' })
        .pipe(dest('dist'))
}

async function buildhtml() {
    let includes = new ssi('app/', 'dist/', '/**/*.html')
    includes.compile()
    del('dist/parts', { force: true })
}

async function cleandist() {
    del('dist/**/*', { force: true })
}

export { scripts, styles, images}
export let build = series(cleandist, images, scripts, styles, buildcopy, buildhtml)
export default series(scripts, styles, images, parallel(browsersync, startwatch))
