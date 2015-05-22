
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				jshintrc: true
			},
			all: ['Gruntfile.js', 'Brocfile.js', 'src/js/(config|app)/*.js']
		},

		clean: {
			dist: ['dist']
		},

		copy: {
			html: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.html'],
					dest: 'dist/'
				}]
			}
		},

		broccoli: {
			dev: {
				dest: 'dist',
				env: 'development'
			},
			prod: {
				dest: 'dist',
				env: 'production'
			}
		},

		watch: {
			all: {
				files: ['Gruntfile.js', 'src/**/*.*'],
				tasks: ['dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-broccoli');

	grunt.registerTask('default', ['jshint', 'clean', 'broccoli:dev:build']);
	grunt.registerTask('dev', ['default']);
	grunt.registerTask('prod', ['jshint', 'clean', 'broccoli:prod:build']);
};