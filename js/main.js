$(function(){

	$(document).on('click','ul.tabs li:not(.active)', function(e) {
    	e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tabs__contents').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
})