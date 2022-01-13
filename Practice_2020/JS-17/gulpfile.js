let fileswatch   = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

import pkg from 'gulp'
const { gulp, src, dest, parallel, series, watch } = pkg

import browserSync   from 'browser-sync'
import gulpSass      from 'gulp-sass'
import dartSass      from 'sass'
const  sass          = gulpSass(dartSass)
import postCss       from 'gulp-postcss'
import cssnano       from 'cssnano'
import autoprefixer  from 'autoprefixer'
import concat        from 'gulp-concat'
import imagemin      from 'gulp-imagemin'
import changed       from 'gulp-changed'
import del           from 'del'
import uglify        from 'gulp-uglify'
import ssi           from 'ssi'


function styles () {
    return src( ['app/css/src/*.css'] )
        .pipe(sass())
        .pipe(concat('style.main.css'))
        .pipe(postCss([
            autoprefixer({overrideBrowserslist: ['last 10 versions']}),
            cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
        ]))
        .pipe(dest('app/css/dist'))
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
    return src( ['app/js/src/*.js'] )
        .pipe(concat('script.main.js'))
        .pipe(uglify())
        .pipe(dest('app/js/dist/'))
        .pipe(browserSync.stream())
}

function images() {
    return src(['app/img/src/**/*'])
        .pipe(changed('app/img/dist/'))
        .pipe(imagemin())
        .pipe(dest('app/img/dist/'));
}

function startwatch() {
    watch(`app/css/src/**/*`, { usePolling: true }, styles)
    watch(['app/js/src/*.js', '!app/js/**/*.main.js'], { usePolling: true }, scripts)
    watch('app/images/src/**/*', { usePolling: true }, images)
    watch(`app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}


function buildcopy() {
    return src( [
        'app/css/dist/**/*.main.css',
        'app/js/dist/**/*.main.js',
        'app/img/dist/**/*',
        'app/fonts/**/*',
        ], {base: 'app'} )
        .pipe(dest('dist'));
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
