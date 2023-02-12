const { watch, series } = require("gulp");

const { pug } = require("./pug");
const { scss } = require("./sass/sass");
const { scss404 } = require("./sass/sass--404");
const { scssBlog } = require("./sass/sass--blog");
const { scssContacts } = require("./sass/sass--contacts");
const { scssBlogOncePage } = require("./sass/sass--blog-once-page");
const { scssBrief } = require("./sass/sass--brief");
const { scssProjects } = require("./sass/sass--projects");

const { clear } = require("./del");
const { server } = require("./browsersync");
const { img } = require("./images");
const { scripts404 } = require("./scripts/scripts404");
const { scriptsBlog } = require("./scripts/scripts--blog");
const { scriptsContacts } = require("./scripts/scripts--contacts");
const { scriptsBlogOncePage } = require("./scripts/scripts--blog-once-page");
const { scriptBrief } = require("./scripts/scripts--brief");
const { scriptsProjects } = require("./scripts/scripts--projects");
const { script } = require("./scripts/scripts");
const { fonts } = require("./fonts");

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
  fonts,
  scss,
  scss404,
  scssBlog,
  scssBlogOncePage,
  scssContacts,
  scssBrief,
  scssProjects,
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
  fonts,
  scss,
  scss404,
  scssBlog,
  scssBlogOncePage,
  scssContacts,
  scssBrief,
  scssProjects,
  img,
  server
);
