import gulp from 'gulp';
import { promptProjects, newObj } from './prompt';
import { error, warning, good } from './logs';

promptProjects();
gulp.task('open', () => {
	console.log(warning('Project: ', error(newObj.name)));
	console.log(warning('URL: ', error(newObj.html)));
	console.log(warning('Assets: ', error(newObj.assets)));
});

gulp.task('close', () => {
	console.log(warning('Assets: ', error(newObj.assets)));
});
