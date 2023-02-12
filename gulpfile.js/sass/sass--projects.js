const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const clean = require("gulp-clean-css");

exports.scssProjects = function () {
  return (
    src("./source/sass/**/projects.sass")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 8 versions"],
          browsers: [
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 11",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6",
          ],
        })
      )
      .pipe(
        clean({
          level: 2,
        })
      )
      // .pipe(concat("style.css"))
      .pipe(sourcemaps.write())
      .pipe(dest("./dist/assets/css"))
  );
};
