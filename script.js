$(document).ready(function() {
    
    $("#eyeballDiv").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, 500);
  		return false;
	});

	$("eyeballDiv").mousedown(function() {
		$(this).css('box-shadow','5px 5px 18px #D5D5D5');
	});

	$("eyeballDivDown").mousedown(function() {
		$(this).css('box-shadow','5px 5px 18px #D5D5D5');
	});

	$("eyeballDiv").mouseup(function() {
		$(this).css('box-shadow','5px 5px 20px #E5E5E5');
	});

	$("eyeballDivDown").mouseup(function() {
		$(this).css('box-shadow','5px 5px 20px #E5E5E5');
	});

	$("#eyeballDivDown").click(function() {
  		$("html, body").animate({ scrollTop: $('#bio').offset().top }, 1000);
  		return false;
	});

});
