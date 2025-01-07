const uglify = require("grunt-contrib-uglify")

module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        less : {
            development : {
                files : {
                    'assets/dev/css/main.css' : 'assets/src/less/main.less'
                }
            },
            production : {
                options : {
                    compress : true
                },
                files : {
                        'assets/dist/css/main.min.css' : 'assets/src/less/main.less'
                }
            }
        },
        watch : {
            less : {
                files : ['assets/src/less/**/*.less'],
                tasks : ['less:development', 'less:production']
            }
        },
        uglify : {
            target : {
                files : {
                    'assets/dist/js/main.min.js' : 'assets/src/js/main.js'
                }
            }
        } 
        
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    
    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'uglify'])
}