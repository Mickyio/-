const gulp = require("gulp");//加载gulp模块
const connect = require("gulp-connect");//加载connect插件
const babel = require("gulp-babel");//加载gulp-babel插件
const sass = require("gulp-sass-china");//加载sass
// const concat = require("gulp-concat");//合并所有js文件
// const uglify = require("gulp-uglify");//代码压缩


gulp.task("watch",()=>{
	// gulp.watch(["**/*.html","**/*.js","!module/**/*"],["script","html"])
	// 而且只加载编译的文件的文件夹
	gulp.watch(["**/*.html","!module/**/*"],["html"]);//前面的文件发生变化，只有html文件改动
	gulp.watch(["*/*.js","!module/**/*","!es6/*"],["script"]);//只有script改动
	gulp.watch(["es6/*.js","!module/**/*"],["es6"]);
	gulp.watch(["scss/*.scss"],["sass"]);
	gulp.watch(["images/**",],["image"]);
	gulp.watch(["data/*.json",],["json"]);


})

// gulp.task("watch",()=>{
// 	gulp.watch(["scss/*.scss","*html/*.html","images/*","src/*"],["sass","html","images","src"]);
// })

// 给gulp添加一个指令；sayhello=>
gulp.task("sayhello",()=>{
	console.log("hello world my gulp run")
})

//gulp表示找到文件根源;
//pipe() =>所有特殊指令；
gulp.task("html",()=>{
	return gulp
				// .src(["html/index.html",])使用正则
				// .src(["html/*"])
				// .src(["html/**/*"])所有
				// .src(["html/**/*","html/**/*.html"])实现平铺
				.src(["html/*.html","html/page/*.html"])
				.pipe(gulp.dest("dist"))//建立dist文件
				.pipe(connect.reload());//自动刷新
})

gulp.task("json",()=>{
	return gulp
				// .src(["html/index.html",])使用正则
				// .src(["html/*"])
				// .src(["html/**/*"])所有
				// .src(["html/**/*","html/**/*.html"])实现平铺
				.src(["data/*.json"])
				.pipe(gulp.dest("dist/scripts"))//建立dist文件
				//.pipe(connect.reload());//自动刷新
})


gulp.task('image',()=>{
	return gulp
				.src(["images/**"])
				//建立dist文件
				.pipe(gulp.dest("dist/images"));//自动刷新
})


gulp.task("script",()=>{
	return gulp
				// "!src/secret.js" =>不想暴露的文件
				// .src(["libs/jquery.js"])
				.src(["libs/*.js","model/*.js","src/*.js","!screct.js"])
				// .pipe(concat("vendor.js"))//整合所有js文件
				// .pipe(uglify())//压缩js文件，但面向对象模块化时不建议使用
				.pipe(gulp.dest("dist/scripts"))
})



// gulp.task("publish",["html","script"]);
// 可以省略gulp publish =>gulp
// gulp.task("default",["html","script"]);

// 自动检测并执行
// gulp.watch()
// gulp.task("default",()=>{
	// 把所有 html 和 js  => watch ; 

// gulp.task("watch",()=>{
// 	gulp.watch(["scss/*.scss","*html/*.html","images/*","src/*"],["sass","html","images","src"]);
// })

gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:82, //端口号
		livereload:true//随时更新
	}) 
})

// gulp.task("server",()=>{
// 	connect.server({
// 		root:"dist",
// 		port:83,
// 		livereload:true
// 	})

// })


gulp.task('es6',()=>{
	return gulp
				.src('es6/*.js')
				.pipe(babel({
					presets:['env']
				}))
				.pipe(gulp.dest('dist/scripts/'))
})


gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"]);

//使得调用gulp时，整个文件都进行加载