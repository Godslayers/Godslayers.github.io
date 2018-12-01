$(".view-credits").click(function(){
	$('.navbar-zero').toggle(100, function() {
		if ($('.navbar-zero').css('display') == 'none') {
			$('.view-credits').text('back to index');
		} else {
			$('.view-credits').text('view credits');
		}
	});

});