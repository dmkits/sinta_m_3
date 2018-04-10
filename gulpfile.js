var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var spawn = require('child_process').spawn;
var runSequence = require('run-sequence');
const zip = require('gulp-zip');

//----------dojo
gulp.task('cleanDojoDir', function () {
    return gulp.src('tempDojo', { read: false })
        .pipe(clean());
});
gulp.task('generateDojoDir', ['cleanDojoDir'], function (cb) {
    var cmd = spawn('public/jslib/util/buildscripts/build.sh', ['--profile', 'sinta.profile.js'], { stdio: 'inherit' });
    cmd.on('close', function (code) {
        console.log('Dojo build completed ' + (code === 0 ? 'successfully!' : 'with issues.'));
        cb(code);
    });
});

//------public
gulp.task('css',function(){
    return gulp.src('public/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('release/public/css'));
});
gulp.task('icons',function(){
    return gulp.src('public/icons/**/*')
        .pipe(gulp.dest('release/public/icons'));
});
gulp.task('public',['jslib','css','icons']);

gulp.task('dojoFile',function(){
    return gulp.src('tempDojo/jslib/dojo/dojo.js.uncompressed.js')
        .pipe(rename('dojo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('release/public/jslib/dojo'));
});
gulp.task('dojoNls',function(){
    return gulp.src('tempDojo/jslib/dojo/nls/**/*')
        .pipe(gulp.dest('release/public/jslib/dojo/nls'));
});

gulp.task('moment',function(){
    return gulp.src('public/jslib/moment/**/*')
        .pipe(gulp.dest('release/public/jslib/moment'));
});

gulp.task('numeral',function(){
    return gulp.src('public/jslib/numeral/**/*')
        .pipe(gulp.dest('release/public/jslib/numeral'));
});

//----------------------dojoCSS
gulp.task('dijitThemes',function(){
    return gulp.src('public/jslib/dijit/themes/**/*')
        .pipe(gulp.dest('release/public/jslib/dijit/themes'));
});
gulp.task('dijitIcons',function(){
    return gulp.src('public/jslib/dijit/icons/**/*')
        .pipe(gulp.dest('release/public/jslib/dijit/icons'));
});
gulp.task('dojoResources',function(){
    return gulp.src('public/jslib/dojo/resources/**/*')
        .pipe(gulp.dest('release/public/jslib/dojo/resources'));
});
gulp.task('dojoLoadingGiv',function(){
    return gulp.src('public/jslib/dojox/widget/Standby/images/*.gif')
        .pipe(gulp.dest('release/public/jslib/dojox/widget/Standby/images'));
});
//--
gulp.task('mobileThemes',function(){
    return gulp.src('public/jslib/dojox/mobile/themes/**/*')
        .pipe(gulp.dest('release/public/jslib/dojox/mobile/themes'));
});
gulp.task('calendarCss',function(){
    return gulp.src('public/jslib/dojox/widget/Calendar/Calendar.css')
        .pipe(gulp.dest('release/public/jslib/dojox/widget/Calendar'));
});
gulp.task('calendarThemes',function(){
    return gulp.src('public/jslib/dojox/calendar/themes/**/*')
        .pipe(gulp.dest('release/public/jslib/dojox/calendar/themes'));
});


gulp.task('jslib',['dojoFile','dijitThemes','dijitIcons','dojoResources','dojoLoadingGiv','mobileThemes',
    'calendarCss','calendarThemes','dojoNls','moment','numeral']);
//-----------------root
gulp.task('rootFiles',function(){
    return gulp.src(['app.js','dataBase.js','package.json','production.cfg','debug.sh','start_test.cmd','test.cfg','start_test.sh'])
        .pipe(gulp.dest('release'));
});
gulp.task('node_modules',function(){
    return gulp.src('node_modules/**/*')
        .pipe(gulp.dest('release/node_modules'));
});
gulp.task('scripts',function(){
    return gulp.src('scripts/**/*')
        .pipe(gulp.dest('release/scripts'));
});

gulp.task('views',function(){
    return gulp.src('views/**/*')
        .pipe(gulp.dest('release/views'));
});

gulp.task('cleanGulpDir', function () {
    return gulp.src('release/', { read: false })
        .pipe(clean());
});

gulp.task('zipRelease', function () {
    return gulp.src('./release/**/*')
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('./'))
});

gulp.task('build',["rootFiles",'node_modules','views','public','scripts']);


gulp.task('default', function(done) {
    runSequence('cleanGulpDir','generateDojoDir', 'build','cleanDojoDir','zipRelease', function() {
        console.log('callback all done');
        done();
    });
});

