module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
    server: {
      options: {
        port: 9000,
        base: '',
        keepalive: true,
		livereload: true,
		open: {
          target: 'http://localhost:9000'
        }	
      }
    }
  },

// Watching files - dosen't work

 watch: {
    options: {
      livereload: 9000,
    },
    html: {
      files: ['/*.html'],
    },
	task: ['connect:server']
  },

	});
//	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', 'connect:server');

};
