module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_doc');
  acetate.layout('page-layouts/*.html', 'layouts/_blank:content');
  acetate.data('table_of_contents', 'table_of_contents.yml');
  acetate.data('icons', 'icon-social.js');
  acetate.data('font', 'icon-font.js');
};
