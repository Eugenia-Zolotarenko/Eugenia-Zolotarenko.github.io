module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    // define a string to put between each file in the concatenated output
                    separator: ';'
                },
                // the files to concatenate
                src: ['js/src/*.js'],
                // the location of the resulting JS file
                dest: 'js/dist/script.main.js'

            },

            css: {
                options: {
                    separator: '\n\n'
                },
                src: ['css/src/*.css'],
                dest: 'css/dist/style.main.css'

            },
        },

        uglify: {
           dist: {
                files: {
                    'js/dist/script.main.js': ['js/dist/script.main.js']
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'css/dist/style.main.css': ['css/dist/style.main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};