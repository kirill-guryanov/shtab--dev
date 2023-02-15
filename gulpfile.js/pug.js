const { src, dest } = require("gulp");
const pug = require("gulp-pug");

exports.pug = () => {
  return src([
    "./source/pug/layouts/index/index.pug",
    "./source/pug/layouts/404/404.pug",
    "./source/pug/layouts/blog/blog.pug",
    "./source/pug/layouts/contacts/contacts.pug",
    "./source/pug/layouts/blog-once-page/blog-once-page.pug",
    "./source/pug/layouts/brief/brief.pug",
    "./source/pug/layouts/projects/projects.pug",
    "./source/pug/layouts/services/services.pug",
    "./source/pug/layouts/productsOncePage/productsOncePage.pug",
  ])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./dist"));
};
