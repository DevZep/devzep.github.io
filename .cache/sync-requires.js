// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/seyha/Documents/devzep.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/page-2.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/portfolio.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/services.js"))
}

exports.json = {
  "layout-index.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/layout-index.json"),
  "post-one.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/post-one.json"),
  "post-two.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/post-two.json"),
  "post-three.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/post-three.json"),
  "dev-404-page.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/404.json"),
  "contact.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/contact.json"),
  "index.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/index.json"),
  "page-2.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/page-2.json"),
  "portfolio.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/portfolio.json"),
  "services.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/services.json"),
  "404-html.json": require("/Users/seyha/Documents/devzep.github.io/.cache/json/404-html.json")
}