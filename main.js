$( document ).ready(function() {

    $('.header-right .item').mouseenter(function(){

        $('.dropdown-menu').removeClass('active');
        $(this).next('.dropdown-menu').addClass('active');

    });

    $('.dropdown-menu').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.box').mouseleave(function(){
        $('.dropdown-menu').removeClass('active');
    });

});
