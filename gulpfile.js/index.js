const { watch, series } = require("gulp");

const { pug } = require("./pug");
const { scss } = require("./sass/sass");

const { clear } = require("./del");
const { server } = require("./browsersync");
const { img } = require("./images");
const { fonts } = require("./fonts");

const { scripts404 } = require("./scripts/scripts404");
const { scriptsBlog } = require("./scripts/blog");
const { scriptsContacts } = require("./scripts/contacts");
const { scriptsBlogOncePage } = require("./scripts/blog-once-page");
const { scriptBrief } = require("./scripts/brief");
const { scriptsProjects } = require("./scripts/projects");
const { scriptsServices } = require("./scripts/services");
const { scriptsServiceDetail } = require("./scripts/scriptsServiceDetail");
const { scriptsAttraction } = require("./scripts/attraction");
const { scriptsProductsOncePage } = require("./scripts/productsOncePage");
const { sitesDevelopment } = require("./scripts/sitesDevelopment");
const { script } = require("./scripts/index");

exports.clear = clear;
exports.build = series(
  clear,
  pug,
  script,
  scripts404,
  scriptsBlog,
  scriptsBlogOncePage,
  scriptsContacts,
  scriptBrief,
  scriptsProjects,
  scriptsServices,
  scriptsProductsOncePage,
  scriptsServiceDetail,
  scriptsAttraction,
  sitesDevelopment,
  fonts,
  scss,
  img,
  server
);
exports.serve = series(
  clear,
  pug,
  script,
  scripts404,
  scriptsBlog,
  scriptsBlogOncePage,
  scriptsContacts,
  scriptBrief,
  scriptsProjects,
  scriptsServices,
  scriptsProductsOncePage,
  scriptsServiceDetail,
  scriptsAttraction,
  sitesDevelopment,
  fonts,
  scss,
  img,
  server
);
