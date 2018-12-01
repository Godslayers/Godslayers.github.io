$(".view-credits").click(function(){

	$('.center').fadeToggle(1000, function() {
		if ($('.navbar-zero').css('display') == 'none') {
			$('.view-credits').text('back to index');
		} else {
			$('.view-credits').text('view credits');
		}
	});

});