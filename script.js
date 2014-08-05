$(document).ready(function() {
    
    $("#eyeballDiv").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, 500);
  		return false;
	});

	$("div").mousedown(function() {
		$(this).css('box-shadow','5px 5px 18px #D5D5D5');
	});

	$("div").mouseup(function() {
		$(this).css('box-shadow','5px 5px 20px #E5E5E5');
	});

	$("#eyeballDivDown").click(function() {
  		$("html, body").animate({ scrollTop: $('#bio').offset().top }, 1000);
  		return false;
	});

});
