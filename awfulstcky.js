//<![CDATA[
$(function() {
  if ($('#right-side').length) { // Ganti "#sticky-sidebar" dengan ID tertentu
    var el = $('#right-side');
    var stickyTop = $('#right-side').offset().top;
    var stickyHeight = $('#right-side').height();
    $(window).scroll(function() {
      var limit = $('#comments').offset().top - stickyHeight - 20; // Jarak berhenti di "#comments"
      var windowTop = $(window).scrollTop();
      if (stickyTop < windowTop) {
        el.css({
          position: 'fixed',
          top: 0 // Jarak atau margin sticky dari atas
        });
      } else {
        el.css('position', 'static');
      }
      if (limit < windowTop) {
        var diff = limit - windowTop;
        el.css({
          top: diff
        });
      }
    });
  }
});
//]]>
