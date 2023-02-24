const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const { pug } = require("./pug");
const { scss } = require("./sass/sass");

const { img } = require("./images");
const { script } = require("./scripts/scripts");
const { scripts404 } = require("./scripts/scripts404");
const { scriptsBlog } = require("./scripts/scripts--blog");
const { scriptsContacts } = require("./scripts/scripts--contacts");
const { scriptsBlogOncePage } = require("./scripts/scripts--blog-once-page");
const { scriptBrief } = require("./scripts/scripts--brief");
const { scriptsProjects } = require("./scripts/scripts--projects");
const { scriptsServices } = require("./scripts/scripts--services");
const {
  scriptsServiceDetailIndex,
} = require("./scripts/scriptsServiceDetailIndex");
const {
  scriptsProductsOncePage,
} = require("./scripts/scripts--productsOncePage");

exports.server = () => {
  browserSync.init({
    server: "./dist",
  });

  watch("./source/**/*.pug", series(pug)).on("change", browserSync.reload);
  watch("./source/sass/**/*.sass", series(scss)).on(
    "change",
    browserSync.reload
  );
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
      scriptsProjects,
      scriptsServices,
      scriptsProductsOncePage,
      scriptsServiceDetailIndex
    )
  ).on("change", browserSync.reload);
};
