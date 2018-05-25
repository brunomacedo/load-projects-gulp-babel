const gulp = require('gulp');
const promptProjects = require('./prompt');

gulp.task('open', () => {
	// console.log(good('Arg name: ', args.name));
	// console.log(warning('trainlingSlash: '), error(getCurrent.trainlingSlash()));
	promptProjects();
});

gulp.task('close', ['open'], () => { });
