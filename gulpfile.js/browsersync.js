const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const { pug } = require("./pug");
const { scss } = require("./sass/sass");
const { scss404 } = require("./sass/sass--404");
const { scssBlog } = require("./sass/sass--blog");
const { scssContacts } = require("./sass/sass--contacts");
const { scssBlogOncePage } = require("./sass/sass--blog-once-page");
const { scssBrief } = require("./sass/sass--brief");
const { scssProjects } = require("./sass/sass--projects");
const { img } = require("./images");
const { script } = require("./scripts/scripts");
const { scripts404 } = require("./scripts/scripts404");
const { scriptsBlog } = require("./scripts/scripts--blog");
const { scriptsContacts } = require("./scripts/scripts--contacts");
const { scriptsBlogOncePage } = require("./scripts/scripts--blog-once-page");
const { scriptBrief } = require("./scripts/scripts--brief");
const { scriptsProjects } = require("./scripts/scripts--projects");

exports.server = () => {
  browserSync.init({
    server: "./dist",
  });

  watch("./source/**/*.pug", series(pug)).on("change", browserSync.reload);
  watch(
    "./source/sass/**/*.sass",
    series(
      scss,
      scss404,
      scssBlog,
      scssContacts,
      scssBlogOncePage,
      scssBrief,
      scssProjects
    )
  ).on("change", browserSync.reload);
  watch("./source/images/**/*.{jpg,png,webp,svg}", parallel(img)).on(
    "change",
    browserSync.reload
  );
  watch(
    "./source/js/**/*.js",
    parallel(
      script,
      scripts404,
      scriptsBlog,
      scriptsContacts,
      scriptsBlogOncePage,
      scriptBrief,
      scriptsProjects
    )
  ).on("change", browserSync.reload);
};
