var gulp = require('gulp');
var browserSync = require('browser-sync');
var babel = require("gulp-babel");

var projects = require("./projects");
var pro = projects.multiselect;

gulp.task("babel", function () {
    return gulp.src(pro.jsSrc)
        .pipe(babel())
        .pipe(gulp.dest(pro.jsDest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('html-source', function () {
    gulp.src(pro.htmls)
        .pipe(gulp.dest(pro.htmlDir))
        .pipe(browserSync.reload({
            stream: true
        }));
});
//自动刷新的工具
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: pro.htmlDir
        },
        port:9999
    });
});


gulp.task('watch', ['browserSync', 'babel', 'html-source'], function () {
    gulp.watch(pro.jsSrc, ['babel']);
    gulp.watch(pro.htmls, ['html-source']);
});
