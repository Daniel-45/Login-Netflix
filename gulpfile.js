const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

function css() {
    return src('scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('css'))
}

function watchSass() {
    watch('scss/*.scss', css);
}

exports.css = css;
exports.watchSass = watchSass;
exports.default = parallel(css, watchSass); 