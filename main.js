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

    $('.hamburger-icon').click(function(){
        $('header').hide();
        $('.hamburger-menu').addClass('active');
    });

    $('.cross-icon').click(function(){
        $('header').show();
        $('.hamburger-menu').removeClass('active');
    });

});
