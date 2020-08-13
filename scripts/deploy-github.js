const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/hanszhang00/blm-resources",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
