/**
 * Created by jonathan on 4/27/17.
 */
var wSubBlockOne = $('.k-js-sub-block-one').width();
var wSubBlockTwo = $('.k-js-sub-block-two').width();
var wSubBlockThree = $('.k-js-sub-block-three').width();
var wSubBlockFour = $('.k-js-sub-block-three').width();
var wSubBlockFive = $('.k-js-sub-block-five').width();
var wSubBlockSix = $('.k-js-sub-block-three').width();
var marginBlockCentre = ($('.sub-experience').width() - $('.block-company-centre').width()*3)/2;
var positionBlockCentre = ($('.block-company-centre').width());


$('.k-js-sub-block-two').css('left', positionBlockCentre);
$('.k-js-sub-block-five').css('left', positionBlockCentre);

$('.block-company-centre').css('margin-left', marginBlockCentre);

$( ".k-js-sub-block-one" ).click(function() {
    $( ".k-js-sub-block-one" ).css('z-index', '100');
    $( ".k-js-sub-block-one" ).animate({
        left: 0,
        width: (wSubBlockOne == $('.k-js-sub-block-one').width())?100+'%':wSubBlockOne,
        height: (wSubBlockOne == $('.k-js-sub-block-one').width())?$('.k-js-sub-block-one').height()*2+8:$('.k-js-sub-block-three').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-one" ).css('z-index', (wSubBlockOne == $('.k-js-sub-block-one').width())?'0':'100');
    });
});

$( ".k-js-sub-block-two" ).click(function() {
    $( ".k-js-sub-block-two" ).css('z-index', '100');
    $( ".k-js-sub-block-two" ).css('margin-left', (wSubBlockTwo == $('.k-js-sub-block-two').width())?'0px':marginBlockCentre+'px');
    $( ".k-js-sub-block-two" ).animate({
        left: (wSubBlockTwo == $('.k-js-sub-block-two').width())?0:positionBlockCentre,
        width: (wSubBlockTwo == $('.k-js-sub-block-two').width())?100+'%':wSubBlockTwo,
        height: (wSubBlockTwo == $('.k-js-sub-block-two').width())?$('.k-js-sub-block-two').height()*2+8:$('.k-js-sub-block-three').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-two" ).css('z-index', (wSubBlockTwo == $('.k-js-sub-block-two').width())?'0':'100');
    });
});

$( ".k-js-sub-block-three" ).click(function() {
    $( ".k-js-sub-block-three" ).css('z-index', '100');

    $( ".k-js-sub-block-three" ).animate({
        right: 0,
        width: (wSubBlockThree == $('.k-js-sub-block-three').width())?100+'%':wSubBlockThree,
        height: (wSubBlockThree == $('.k-js-sub-block-three').width())?$('.k-js-sub-block-one').height()*2+8:$('.k-js-sub-block-one').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-three" ).css('z-index', (wSubBlockFour == $('.k-js-sub-block-three').width())?'0':'100');
    });
});

$( ".k-js-sub-block-four" ).click(function() {
    $( ".k-js-sub-block-four" ).css('z-index', '100');
    $( ".k-js-sub-block-four" ).css('margin-top', (wSubBlockFour == $('.k-js-sub-block-four').width())?'0px':'8px');


    $( ".k-js-sub-block-four" ).animate({
        top:(wSubBlockFour == $('.k-js-sub-block-four').width())?0:250,
        width: (wSubBlockFour == $('.k-js-sub-block-four').width())?100+'%':wSubBlockFour,
        height: (wSubBlockFour == $('.k-js-sub-block-four').width())?$('.k-js-sub-block-four').height()*2+8:$('.k-js-sub-block-one').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-four" ).css('z-index', (wSubBlockFour == $('.k-js-sub-block-four').width())?'0':'100');
    });
});

$( ".k-js-sub-block-five" ).click(function() {
    $( ".k-js-sub-block-five" ).css('z-index', '100');
    $( ".k-js-sub-block-five" ).css('margin-left', (wSubBlockFive == $('.k-js-sub-block-five').width())?'0px':marginBlockCentre+'px');
    $( ".k-js-sub-block-five" ).css('margin-top', (wSubBlockFive == $('.k-js-sub-block-five').width())?'0px':'8px');


    $( ".k-js-sub-block-five" ).animate({
        top:(wSubBlockFive == $('.k-js-sub-block-five').width())?0:250,
        left: (wSubBlockFive == $('.k-js-sub-block-five').width())?0:positionBlockCentre,
        width: (wSubBlockFive == $('.k-js-sub-block-five').width())?100+'%':wSubBlockFive,
        height: (wSubBlockFive == $('.k-js-sub-block-five').width())?$('.k-js-sub-block-five').height()*2+8:$('.k-js-sub-block-one').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-five" ).css('z-index', (wSubBlockFive == $('.k-js-sub-block-five').width())?'0':'100');
    });
});

$( ".k-js-sub-block-six" ).click(function() {
    $( ".k-js-sub-block-six" ).css('z-index', '100');
    $( ".k-js-sub-block-six" ).css('margin-top', (wSubBlockFive == $('.k-js-sub-block-six').width())?'0px':'8px');

    $( ".k-js-sub-block-six" ).animate({
        top:(wSubBlockSix == $('.k-js-sub-block-six').width())?0:250,
        width: (wSubBlockSix == $('.k-js-sub-block-six').width())?100+'%':wSubBlockSix,
        height: (wSubBlockSix == $('.k-js-sub-block-six').width())?$('.k-js-sub-block-six').height()*2+8:$('.k-js-sub-block-one').height(),
    }, 1000, function() {
        $( ".k-js-sub-block-six" ).css('z-index', (wSubBlockSix == $('.k-js-sub-block-six').width())?'0':'100');
    });
});

$('.arrow').css('left', ($('.diploma').width()/2)-($('.arrow').width()/2))+'px';
$('.arrow').on('click', function () {
    $('.diplomaTwo').slideToggle()
    $('.diplomaThree').slideToggle()
    if($('.arrowImg').hasClass('arrowRotation')) { $('.arrowImg').removeClass('arrowRotation')} else {$('.arrowImg').addClass('arrowRotation')};
})

/** ***** **/
/** skill **/
/** ***** **/
circle('subBar1', 100, '#dddddd', '#000000', false);
circle('subBar2', 100, '#bababa', '#000000', false);
circle('subBar3', 100, '#bababa', '#000000', false);
circle('subBar4', 100, '#bababa', '#000000', false);
circle('subBar5', 100, '#bababa', '#000000', false);


circle('bar1', 100, '#e44d26', '#e42d1a', true);
circle('bar2', 65, '#010101', '#4b4b4b', true);
circle('bar3', 80, '#777bb3', '#9398d6', true);
circle('bar4', 80, '#e6a627', '#9398d6', true);
circle('bar5', 25, '#e22e31', '#9398d6', true);

$('.sub-experience').css('margin-top', ($('.experience').height()-($('.k-js-sub-block-one').height()*2))/2+'px');