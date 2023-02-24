const { watch, series } = require("gulp");

const { pug } = require("./pug");
const { scss } = require("./sass/sass");

const { clear } = require("./del");
const { server } = require("./browsersync");
const { img } = require("./images");
const { fonts } = require("./fonts");

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
const { script } = require("./scripts/scripts");

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
  scriptsServiceDetailIndex,
  fonts,
  scss,
  img,
  server
);
