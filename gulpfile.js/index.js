const { watch, series } = require("gulp")

const { pug } = require("./pug")
const { scss } = require("./sass")
const { clear } = require("./del")
const { server } = require("./browsersync")
const { img } = require("./images")
const { script } = require("./scripts")
const { fonts } = require("./fonts")


exports.clear = clear
exports.build = series(clear, pug, script, fonts,  scss, img, server)
exports.serve = series(clear, pug, script, fonts,  scss, img, server)