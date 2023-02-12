const { src, dest } = require("gulp");
const map = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const webpackStream = require("webpack-stream");
const { default: uglify } = require("gulp-uglify-es");
const concat = require("gulp-concat");

exports.scriptsProjects = () => {
  return src("./source/js/projects/projectsIndex.js", { sourcemaps: true })
    .pipe(map.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(webpackStream())
    .pipe(uglify())
    .pipe(concat("projectsIndex.min.js"))
    .pipe(map.write())
    .pipe(dest("./dist/assets/js"));
};
