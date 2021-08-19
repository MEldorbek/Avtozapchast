$(document).ready(function () {
    $('.stock__slider').slick({
        slidesToShow: 3,
        centerMode: true,
        arrows: true,
        centerPadding: '60px',
        prevArrow: '<button type="button" class="slick-prev" style="position: absolute;"></button>',
        nextArrow: '<button type="button" class="slick-next" style="position: absolute;"></button>',
    });
});