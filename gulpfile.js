const { src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.sass")
    .pipe(sass())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ['last 10 version']
    }))
    .pipe(dest("./css/"))
    .pipe(browserSync.stream());
};

function buildCSS(done) {
  src(['css/**/**.css', '!css/**/**.min.css'])
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(dest('dist/css/'));
    done();
  }
  
function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext: {
        min: '.js'
      }
    }))
    .pipe(dest('dist/js/'));
  src('js/**.min.js')
    .pipe(dest('dist/js/'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts/'));
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, fonts);