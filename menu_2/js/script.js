//MENU BY JPSTORY
$(document).ready(function(){
    $('.slide').click(function(){
    var hidden = $('.hidden');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":"-300px"}, "slow").removeClass('visible').addClass('hidden-ready');
        $('#gamburger-img').fadeIn("slow");
    } else {
        hidden.animate({"left":"0px"}, "slow").addClass('visible').removeClass('hidden-ready');
        $('#gamburger-img').fadeOut("slow");
    }
    });
});