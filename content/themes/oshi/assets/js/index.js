/**
 * Main JS file for Casper behaviours
 */

// For disqus use
 var disqus_url = window.location.protocol + "//" + window.location.host + window.location.pathname;

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


(function($) {

  var $modal = $('.modal-subscription');

  if($.cookie('mail_subscription') != 'true') {
    setTimeout(function() {
      $modal.fadeIn(1800);
      $.cookie('mail_subscription', 'true', { expires: 1, path: '/' });
    }, 10000);
  }

  $modal.find('form a img.close').click(function() {
    $modal.fadeOut(1500);
  });

})(jQuery);

hljs.initHighlightingOnLoad();
