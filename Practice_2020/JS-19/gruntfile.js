module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            scripts: {
                options: {
                    // define a string to put between each file in the concatenated output
                    separator: ';'
                },
                // the files to concatenate
                src: ['app/js/src/*.js'],
                // the location of the resulting JS file
                dest: 'app/js/dist/script.main.js'
            },

            css: {
                options: {
                    separator: '\n\n'
                },
                src: ['app/css/src/*.css'],
                dest: 'app/css/dist/style.main.css'
            },

            scss: {
                options: {
                    separator: '\n\n'
                },
                src: ['app/styles/style.scss', 'app/styles/style2s.scss'],
                dest: 'app/styles/main.scss'
            }
        },

        uglify: {
           dist: {
                files: {
                    'app/js/dist/script.main.js': ['app/js/dist/script.main.js']
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'app/css/dist/style.main.css': ['app/css/dist/style.main.css']
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/styles',
                    src: ['main.scss'],
                    dest: 'app/styles',
                    ext: '.css'
                }]
            }
        },



        watch: {
            source: {
                files: ['js/src/*.js', 'css/src/*.css'],
                tasks: ['concat', 'uglify', 'cssmin'],
                options: {
                    spawn: false,
                    reload: true
                },
            },

            sass: {
                files: ['app/styles/*.scss'],
                tasks: ['concat','sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};


//  "type": "module",