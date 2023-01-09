const { src, dest } = require('gulp')
const pug = require('gulp-pug')

exports.pug = () => {
	return src('./source/pug/layouts/index.pug')
		.pipe(
			pug({
				pretty: true
			})
		)
		.pipe(dest('./dist'));
};