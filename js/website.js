$(document).ready(function() {
    var navHeight = $('#nav').height();
    $('body').css("padding-top", navHeight+15);
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-nav').children.removeClass('active');
        $(this.parent).addClass('active');
    });
});