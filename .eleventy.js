module.exports = function (eleventyConfig) {
  // Copy the existing assets (css/js/images) straight through, unchanged,
  // preserving the /assets/... paths the markup and stylesheet expect.
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    // Author pages as Nunjucks so includes/loops work in .njk and .html files;
    // Markdown bodies (service .md) are still processed as Markdown for content.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"]
  };
};
