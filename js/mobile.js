$('.menu-nav-mobile i:nth-of-type(1)').click(function() {
	$('.menu-nav-mobile').find('i:nth-of-type(1)').hide();
	$('.menu-nav-mobile').find('i:nth-of-type(2)').fadeIn();
	$('.menu-nav-mobile').find('ul').slideToggle();
})
$('.menu-nav-mobile i:nth-of-type(2)').click(function() {
	$('.menu-nav-mobile').find('i:nth-of-type(1)').fadeIn();
	$('.menu-nav-mobile').find('i:nth-of-type(2)').hide();
	$('.menu-nav-mobile').find('ul').slideToggle();
});
