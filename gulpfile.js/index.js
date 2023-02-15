const { watch, series } = require("gulp");

const { pug } = require("./pug");
const { scss } = require("./sass/sass");
const { scss404 } = require("./sass/sass--404");
const { scssBlog } = require("./sass/sass--blog");
const { scssContacts } = require("./sass/sass--contacts");
const { scssBlogOncePage } = require("./sass/sass--blog-once-page");
const { scssBrief } = require("./sass/sass--brief");
const { scssProjects } = require("./sass/sass--projects");
const { scssServices } = require("./sass/sass--services");
const { scssProductsOncePage } = require("./sass/sass--productsOncePage");

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
  scss404,
  scssBlog,
  scssBlogOncePage,
  scssContacts,
  scssBrief,
  scssProjects,
  scssServices,
  scssProductsOncePage,
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
  fonts,
  scss,
  scss404,
  scssBlog,
  scssBlogOncePage,
  scssContacts,
  scssBrief,
  scssProjects,
  scssServices,
  scssProductsOncePage,
  img,
  server
);
