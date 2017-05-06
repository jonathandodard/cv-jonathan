/**
 * Created by jonathan on 4/27/17.
 */
var wSubBlock = $('.k-js-sub-block-one').width();
var hSubBlock = $('.k-js-sub-block-one').height();
var marginBlockCentre = ($('.sub-experience').width() - $('.block-company-centre').width()*3)/2;
$('.block-company-centre').css('margin-left', marginBlockCentre);


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