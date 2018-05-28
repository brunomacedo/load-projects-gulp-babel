import gulp from 'gulp';
import sass from 'gulp-sass';
import compass from 'gulp-compass';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';

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


// START

gulp.task('sass', () => {
	gulp.src('assets/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 40 versions', '> 5%', 'Firefox ESR']}))
		.pipe(gulp.dest((element) => {
			console.log('DIRNAME PATH GULP >>>>>>>>>> ', element.dirname);
		}));
});

gulp.task('compass', () => {
	gulp.src('assets/**/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'assets',
			sass: 'assets'
		}))
		.pipe(autoprefixer({browsers: ['last 40 versions', '> 5%', 'Firefox ESR']}))
		.pipe(gulp.dest('./assets/'));
});

gulp.task('default', () => {
	gulp.watch('assets/**/*.scss', ['sass']);
});
