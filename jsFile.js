/**
 * Created by jonathan on 4/27/17.
 */
var wSubBlock = $('.k-js-sub-block-one').width();
var hSubBlock = $('.k-js-sub-block-one').height();


$('.k-js-sub-block-one').on('click', function() {
    $('.k-js-sub-block-one').animate({
        width: ($('.k-js-sub-block-one').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-one').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-one').height()*2-30,
    }, 1000);
});
$('.k-js-sub-block-two').on('click', function() {
    $('.k-js-sub-block-two').animate({
        width: ($('.k-js-sub-block-two').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-two').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-two').height()*2-30,
    }, 1000);
});
$('.k-js-sub-block-three').on('click', function() {
    $('.k-js-sub-block-three').animate({
        width: ($('.k-js-sub-block-three').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-three').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-one').height()*2-30,
    }, 1000);
});
$('.k-js-sub-block-four').on('click', function() {
    $('.k-js-sub-block-four').animate({
        width: ($('.k-js-sub-block-four').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-four').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-four').height()*2-30,
    }, 1000);
});
$('.k-js-sub-block-five').on('click', function() {
    $('.k-js-sub-block-five').animate({
        width: ($('.k-js-sub-block-five').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-five').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-five').height()*2-30,
    }, 1000);
});
$('.k-js-sub-block-six').on('click', function() {
    $('.k-js-sub-block-six').animate({
        width: ($('.k-js-sub-block-six').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
        height: ($('.k-js-sub-block-six').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-six').height()*2-30,
    }, 1000);
});


console.log($( window ).height());
console.log($('.k-js-sub-block-one').height());
$('.sub-experience').css('margin-top', ($('.experience').height()-($('.k-js-sub-block-one').height()*2))/2+'px')

// $('.k-js-sub-block-two').on('click', function() {
//     $('.k-js-sub-block-two').animate({
//         width: ($('.k-js-sub-block-two').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
//         height: ($('.k-js-sub-block-two').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-two').height()*2-30,
//     }, 1000);
// });
//
// $('.k-js-sub-block-three').on('click', function() {
//     $('.k-js-sub-block-three').animate({
//         left: -($('.sub-experience').width()-$('.k-js-sub-block-three').width()),
//         width: ($('.k-js-sub-block-three').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
//         height: ($('.k-js-sub-block-three').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-three').height()*2-30,
//     }, 1000);
// });
//
// $('.k-js-sub-block-four').on('click', function() {
//     $('.k-js-sub-block-four').animate({
//         // top: -(hSubBlock-20),
//         width: ($('.k-js-sub-block-four').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
//         height: ($('.k-js-sub-block-four').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-four').height()*2-30,
//     }, 1000);
// });
//
// $('.k-js-sub-block-five').on('click', function() {
//     $('.k-js-sub-block-five').animate({
//         left: -($('.sub-experience').width()-$('.k-js-sub-block-five').width()),
//         width: ($('.k-js-sub-block-five').width()>wSubBlock)?wSubBlock:$('.sub-experience').width(),
//         height: ($('.k-js-sub-block-five').height()>hSubBlock)?hSubBlock:$('.k-js-sub-block-five').height()*2-30,
//     }, 1000);
// });