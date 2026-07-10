module.exports = function (eleventyConfig) {
  // admin/（Decap CMS管理画面、05-cms.jsが生成）はビルド出力にそのままコピーする
  eleventyConfig.addPassthroughCopy('admin');
  // raw/assets からコピーしたCSS/JS/フォント/画像
  eleventyConfig.addPassthroughCopy('assets');
  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      output: '_site',
    },
  };
};
