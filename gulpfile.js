var gulp = require('gulp');             // 基础库
var sass = require('gulp-ruby-sass');	
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'), // 图片压缩
  	pngquant = require('imagemin-pngquant'); // 深度压缩
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
    gulp.src( 'dist' ) // 服务器目录（./代表根目录）
    .pipe(webserver({ // 运行gulp-webserver
        livereload: true, // 启用LiveReload
        open: true // 服务器启动时自动打开网页
    }));
});
gulp.task('html', function() {
  return gulp.src('public/**/*.html') // 指明源文件路径、并进行文件匹配
    .pipe(gulp.dest('dist')); // 输出路径
});
gulp.task('sass', function () {
     return sass('public/scss/**/*.scss', { style: 'compact' }) // 指明源文件路径、并进行文件匹配（style: 'compressed' 表示输出格式）
          .on('error', function (err) {
               console.error('Error!', err.message); // 显示错误信息
          })
          .pipe(gulp.dest('dist/css')); // 输出路径
});
gulp.task('script', function() {
  return gulp.src('public/js/*.js') // 指明源文件路径、并进行文件匹配
    .pipe(uglify({ preserveComments:'some' })) // 使用uglify进行压缩，并保留部分注释
    .pipe(gulp.dest('dist/js')); // 输出路径
});
gulp.task('image', function(){
  return gulp.src('public/**/*.{png,jpg,gif,svg}') // 指明源文件路径、并进行文件匹配
    .pipe(imagemin({
      progressive: true, // 无损压缩JPG图片
      svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
      use: [pngquant()] // 使用pngquant插件进行深度压缩
    }))
    .pipe(gulp.dest('dist/')); // 输出路径
});

// 监听任务
  gulp.task('watch',function(){
  gulp.watch("public/**/*.scss",["scss"]);
	gulp.watch("public/**/*.html",["html"]);
	gulp.watch("public/**/*.js",["script"]);
	
});

// 默认任务
gulp.task("default",["webserver","watch","html","sass","script","image"]);