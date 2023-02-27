const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const { pug } = require("./pug");
const { scss } = require("./sass/sass");

const { img } = require("./images");
const { script } = require("./scripts/index");
const { scripts404 } = require("./scripts/scripts404");
const { scriptsBlog } = require("./scripts/blog");
const { scriptsContacts } = require("./scripts/contacts");
const { scriptsBlogOncePage } = require("./scripts/blog-once-page");
const { scriptBrief } = require("./scripts/brief");
const { scriptsProjects } = require("./scripts/projects");
const { scriptsServices } = require("./scripts/services");
const { scriptsServiceDetail } = require("./scripts/scriptsServiceDetail");
const { scriptsProductsOncePage } = require("./scripts/productsOncePage");
const { scriptsAttraction } = require("./scripts/attraction");
const { sitesDevelopment } = require("./scripts/sitesDevelopment");

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
      scriptsServiceDetail,
      scriptsAttraction,
      sitesDevelopment
    )
  ).on("change", browserSync.reload);
};
