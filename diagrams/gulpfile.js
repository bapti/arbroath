var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var Handlebars = require('handlebars');
var path = require('path');
var fs = require('fs');
var globby = require('globby');
var plantuml = require('node-plantuml');
var async = require('async');
var del = require('del');
var _ = require('lodash')

var exportPng = function(filePath, done){
	console.log("exporting ", filePath);
  var gen = plantuml.generate(filePath, { format: 'png' })
  var chunks = []

  gen.out.on('data', function (chunk) { chunks.push(chunk) })
  gen.out.on('end', function () {
		var fileName = path.basename(filePath, '.puml')
    var buffer = Buffer.concat(chunks)
		fs.writeFile("./img/" + fileName + ".png",  buffer, done);
  })
}

gulp.task('diagrams',
	gulpSequence(
		'clean-images',
		'export-diagrams-png',
		'compile-diagrams-markdown'
	)
)

gulp.task('clean-images', function(){
  return del(['./img/*.png'])
})

gulp.task('export-diagrams-png', function (done) {
	globby(['./puml/**/*.puml']).then(function(paths) {
		console.log(paths);
		async.each(paths, exportPng, done);
	});
});

gulp.task('compile-diagrams-markdown', function (done) {
  globby(['./img/**/*.png']).then(function(paths) {
  	var images = paths.map(function(filePath) {
			var fileName = path.basename(filePath)
      return {
				'image_readable_name': _.startCase(path.basename(filePath, '.png')),
				'image_link': _.kebabCase( path.basename(filePath, '.png') ),
				'image_file_name': path.basename(filePath)
			};
    });

		console.log("Writing images to markdown", images);

    var source = fs.readFileSync('./README.hbs', 'utf8');
  	var template = Handlebars.compile(source);
		var markdown = template({images: images});

		fs.writeFileSync('./README.md', markdown, 'utf8');

    done();
  });
});

process.on('uncaughtException', function (err) {
  console.log(err);
})
