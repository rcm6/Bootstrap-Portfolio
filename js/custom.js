/* Add/Remove Class on Scroll */
/* https://codepen.io/maani/pen/Aqpagr */

$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
       $('#nav').addClass('newClass');
    } else {
       $('#nav').removeClass('newClass');
    }
});