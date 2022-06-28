$(function() {
	$('.switch__hand').click(function() {
		$(this).addClass('active');
		$('.icons').addClass('active');
		$('.lever__signature').addClass('dark');
		setTimeout("$('.lever__signature').removeClass('dark');$('.lever__signature p').text('Congrats')", 2000);
		setTimeout("$('.modal-wrapper').fadeIn(300)", 3000);
		return false;
	});

});