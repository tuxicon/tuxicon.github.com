if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}

// Turn grid on and off
$('#grid-on').click(function() {
    $('html').addClass('grid');
    $('.column-width, .aside-width').show();
    $('#grid-off').removeClass('selected');
    $('#grid-on').addClass('selected');
    return false;
});

$('#grid-off').click(function() {
    $('html').removeClass('grid');
    $('.column-width, .aside-width').hide();
    $('#grid-on').removeClass('selected');
    $('#grid-off').addClass('selected');
    return false;
});

// Set the initial width
$('.column-width').text($('.column-width').width()/16+'em');
$('.aside-width').text($('.aside-width').width()/16+'em');

// Find the width on resize
$(window).resize(function() {
    $('.column-width').text($('.column-width').width()/16+'em');
    $('.aside-width').text($('.aside-width').width()/16+'em');
});

$('.column-width').waypoint(function(event, direction) {
        if (direction === 'down') {
        $('#main').addClass('fixed');
        }
        else {      
      $('#main').removeClass('fixed');
   }
});