const { watch, series, parallel } = require("gulp")

const browserSync = require('browser-sync').create();

const { pug } = require("./pug")
const { scss } = require("./sass")
const { img } = require("./images")
const { script } = require("./scripts")

exports.server = () => {
	browserSync.init({
		server: "./dist"
	})

	watch("./source/**/*.pug", series(pug)).on("change", browserSync.reload)
	watch("./source/sass/**/*.sass", series(scss)).on("change", browserSync.reload)
	watch("./source/images/**/*.{jpg,png,webp,svg}", parallel(img)).on("change", browserSync.reload)
	watch("./source/js/**/*.js", parallel(script)).on("change", browserSync.reload)
}