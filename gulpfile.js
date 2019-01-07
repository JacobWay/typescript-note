var gulp = require("gulp");
var {series, src, dest, parallel, watch} = require("gulp")
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var ts = require('gulp-typescript')
var paths = {
    pages: ['src/*.html']
};

var tsProject = ts.createProject('tsconfig.json')

function copyHtmlTask () {
    return src(paths.pages)
        .pipe(dest("dist"));
};

function browerifyTask() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
}

function tsCompile() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(dest("dist"))
}

watch(['src/**/*.ts'], tsCompile)
exports.default = tsCompile