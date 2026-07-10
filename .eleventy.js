module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      output: '_site',
    },
  };
};
