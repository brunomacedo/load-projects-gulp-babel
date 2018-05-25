import gulp from 'gulp';
import promptProjects from './prompt';

gulp.task('open', () => {
	promptProjects();
});

gulp.task('close', ['open'], () => { });
