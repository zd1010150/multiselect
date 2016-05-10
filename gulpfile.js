var gulp = require('gulp');
var browserSync = require('browser-sync');

var projects = require("./projects");
var pro = projects.multiselect;


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


gulp.task('watch', ['browserSync',  'html-source'], function () {
    gulp.watch(pro.htmls, ['html-source']);
});
