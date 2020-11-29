<script type='text/javascript'>
//<![CDATA[
$(function() {
if ($('#sidebar-kanan
').length)
var el = $('#sidebar-kanan');
var stickyTop = $('#sidebar-kanan').offset().top;
var stickyHeight = $('#sidebar-kanan').height();
$(window).scroll(function() {
var limit = $('#comments').offset().top - stickyHeight - 20;
var windowTop = $(window).scrollTop();
if (stickyTop < windowTop) {el.css({position: 'fixed',
top: 20})else {el.css('position', 'static');}
if (limit < windowTop) {var diff = limit - windowTop;el.css({top: diff
});}});}});
//]]>
</script>
