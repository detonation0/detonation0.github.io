$(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 350) {
            $('.hideme').addClass('show');
        }
        else {
            $('.hideme').removeClass('show');
        }
    });
});

$( "#openMenu" ).click(function() {
    $( "#sideMenu" ).css("left","0px");
    $( "#sideMenu" ).css("overflow","auto");
    $( "body" ).css("overflow","hidden");
    $( ".overlay" ).show();
});

$( ".closeMenu" ).click(function() {
    $( "#sideMenu" ).css("left","-300px");
    $( "#sideMenu" ).css("overflow","hidden");
    $( "body" ).css("overflow","auto");
    $( ".overlay" ).hide();
});

$(document).mouseup(function(e) {
    var container = $( "#sideMenu" );
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.css("left","-300px");
        $( "body" ).css("overflow","auto");
        $( ".overlay" ).hide();
    }
});
