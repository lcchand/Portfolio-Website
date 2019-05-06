/* ----------------------------------------------------
   Any (html, scss & js) file changes:
   Compiles 'scss' files to 'css' 
   and automatically reloads all connected web browsers
   ----------------------------------------------------
*/

// Set Dependecies
// Load required Node programs: installed in the 'node_mdules' folder
// package.json: devDependencies
const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
//const UglifyJS = require('uglify-es');
const browserSync = require('browser-sync').create();


// Options
const minify = true;


// Configure paths for Project Directory Structure
const src = 'src';
const dist = 'dist';
const htmlSrc = `${src}`;
const htmlDist = `${dist}`;
const assetSrc = `${src}/assets`;
const assetDist = `${dist}/assets`;
const sassSrc = `${src}/scss`;
const sassDist = `${dist}/css`;
const jsSrc = `${src}/js`;
const jsDist = `${dist}/js`;






// Functions


// compile scss into css (minify, autoprefixer, sourcemaps)
function style(done) {
    console.log('minify = ' + minify);
    console.log('Compiling Sass ');
    // 1. where is my scss
    return gulp.src(`${sassSrc}/*.scss`)
    // 2. Initialize sourcemaps
	.pipe(sourcemaps.init())
    // 3. pass that file through sass compiler, any errors will show in terminal running Gulp
    //( minify = true) then minify & rename file else (minify = false) sass expanded and no suffix rename
	.pipe(gulpif(minify, sass({
	    outputStyle: 'compressed'}), sass({outputStyle: 'expanded'})))
	.pipe(gulpif(minify, rename({ suffix: '.min' })))
	.on('error', sass.logError)
	.pipe(autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false }))
    // 4. Write Sourcemaps
	.pipe(sourcemaps.write('./'))
    // 5. where do I save the compiled CSS?
	.pipe(gulp.dest(sassDist))
    // 6. stream changes to all browsers
	.pipe(browserSync.stream());
    done();
}



// Copy All HTML files from src to dist
function copyHtml(done) {
    gulp.src(`${htmlSrc}/*.html`)
	.pipe(gulp.dest(htmlDist));
	done();
}



// Optimize Images
function images(done) {
    gulp.src(`${assetSrc}/*`)
	.pipe(imagemin())
	.pipe(gulp.dest(assetDist));
    done();
    
}


// Copy JS
function copyJS(done) {
    gulp.src(`${jsSrc}/*.js`)
	.pipe(gulp.dest(jsDist));
    done();
}


// This function watches the Project 'root' directory (./src)
// fires up browserSync & monitors for changes
function watch() {
   browserSync.init({
	server: {
	    baseDir: `${dist}`
	}
    });
    // Run - 'style' function if any scss files change:
    gulp.watch(`${sassSrc}/**/*.scss`, style);
    // Run - browser reload if any HTML files change
    gulp.watch(`${htmlSrc}/*.html`).on('change', browserSync.reload);
    // Run - browser reload if any Javascript files change
    gulp.watch(`${jsSrc}/**/*.js`).on('change', browserSync.reload);
}




gulp.task('default', gulp.series(style, copyHtml, copyJS, watch));




exports.copyHtml = copyHtml;
exports.images = images;
exports.copyJS = copyJS;
exports.style = style;
exports.watch = watch;
