const gulp = require('gulp');
const less = require('gulp-less');
// 获取 minify-css 模块（用于压缩 CSS）
const minifyCSS = require('gulp-minify-css')
const concat = require('gulp-concat');
const path = require('path');

const resolve = dir => path.resolve(__dirname, '..', dir);

gulp.task('build', () => {
    const global = gulp.src(resolve('less/global.less'));

    return gulp.src([
        // resolve('less/index.less'),
        resolve('less/reset.less'),
        resolve('less/themes*/**'),
        resolve('less/common/*.less')
    ])
        // .pipe(concat(resolve('less/global.less')))
        .pipe(less())
        // 压缩文件
        // .pipe(minifyCSS())
        .pipe(gulp.dest(resolve('css')));
});
