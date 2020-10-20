const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/page-2.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/portfolio.js"))),
  "component---src-pages-service-js": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/service.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/seyha/Documents/devzep.github.io/src/pages/using-typescript.tsx")))
}

