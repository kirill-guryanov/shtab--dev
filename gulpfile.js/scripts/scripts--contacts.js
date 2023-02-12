const { src, dest } = require('gulp');

const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

exports.scriptsContacts = () => {
	return src('./source/js/contacts/index--contacts.js', {sourcemaps: true})
		.pipe(map.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(webpackStream())
		.pipe(uglify())
		.pipe(concat('index--contacts.min.js'))
		.pipe(map.write())
		.pipe(dest('./dist/assets/js'))
}