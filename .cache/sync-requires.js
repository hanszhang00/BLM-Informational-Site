const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/about.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/articles.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/index.js"))),
  "component---src-pages-orgs-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/orgs.js"))),
  "component---src-pages-videos-js": hot(preferDefault(require("/Users/hans/Desktop/BLM-info-in-progress/src/pages/videos.js")))
}

