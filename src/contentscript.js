$(function() {
  // we use this (probably very inefficient) method of removing this item,
  // because FB often will inject new elements dynamically without reloading
  // the page.
  $('body').bind('DOMSubtreeModified', function() {
    $('#pagelet_group_mall').remove();
  });
});
