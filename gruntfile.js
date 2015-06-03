/// <vs SolutionOpened='watch' />
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            scripts: {
                files: [
                    'js/**/*.*',
                ],
                tasks: ['default']
            },
        },
    });
    grunt.registerTask('default', ['karma:unit']);
};