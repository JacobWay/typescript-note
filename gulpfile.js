var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')


function tsCompile() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
}

const watchedTsCompile = watchify(tsCompile)

gulp.task('default', tsCompile)
