$(function() {
  $(window).on('scroll', colorProminentPost);
});

function posts() {
  posts_query_string = '#pagelet_group_mall div[id^="mall_post"';
  return $(posts_query_string);
}

function colorProminentPost() {

  // Find the element that is most prominent on this page.
  var candidate = null;
  var candidatePercent = 0;
  posts().each(function(index) {
    var percent = getPercentVisible(this);
    $(this).css('background-color', 'white');
    console.log($(this).attr('id') + ': ' + percent);
    if (percent > candidatePercent) {
      candidate = $(this);
      candidatePercent = percent;
    }
  });

  // color the element with the given id a nice golden color
  if (candidate) {
    candidate.css('background-color', '#FEFCD7');
  }
}

function getPercentVisible(obj) {
  var postTop = $(obj).offset().top;
  var postBottom = postTop + $(obj).height();

  if (postBottom < $(window).scrollTop()) {
    return 0;
  } else if (postTop > $(window).scrollTop() + $(window).height()) {
    return 0;
  } else {
    var postHeight = postBottom - postTop;

    // subtract the parts that aren't visible
    postHeight -= Math.max(0, $(window).scrollTop() - postTop);
    postHeight -= Math.max(0, postBottom - ($(window).scrollTop() + $(window).height()));

    return postHeight / $(window).height();
  }
}




