$(document).ready(function(){

												//Run the lifter function once at the beginning of the pageload

	var	wh = $(window).height(),      			// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1, 			//this value starts low and ends high
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,		//this value starts high and ends low
    	eDDDepth = eDDAlpha * 38,
		eDDepth = eDAlpha * 38;

	$('#eyeballDiv').css('box-shadow',(3+(20*eDDAlpha)) + 'px 3px ' + (14 + (30*eDDAlpha)) + 'px rgba(0,0,0,.15)');
	$('#eyeballDiv').css('left', 2.3 + eDAlpha +'em');
	$('#eyeballDivDown').css('box-shadow', (3+(20*eDAlpha)) + 'px 3px ' + (14 + (30*eDAlpha)) + 'px rgba(0,0,0,.15)');
	$('#eyeballDivDown').css('right', 2.8 - eDDAlpha +'em');
  	if (eDAlpha < 0){
		eDAlpha = 0;
	}
	
	//Run it again every time the user scrolls.

	$(document).scroll(function(){
	var	wh = $(window).height(),      // Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1,
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,
    	eDDDepth = eDDAlpha * 38,
		eDDepth = eDAlpha * 38;
    	console.log('window height: '+ wh);
    	console.log('window scrollTop: ' + wt);
    	console.log('eDAlpha: ' + eDAlpha);
    	console.log('eDDAlpha: ' + eDDAlpha);
    	console.log('document height: ' + dh );
    	$('#eyeballDiv').css('box-shadow',(3+(30*eDDAlpha)) + 'px 3px ' + (14 + (30*eDDAlpha)) + 'px rgba(0,0,0,.15)');
		$('#eyeballDiv').css('left', 2.3 + eDAlpha +'em');
		$('#eyeballDivDown').css('box-shadow', (3+(20*eDAlpha)) + 'px 3px ' + (14 + (30*eDAlpha)) + 'px rgba(0,0,0,.15)');
		$('#eyeballDivDown').css('right', 2.8 - eDDAlpha +'em');
	  	if (eDAlpha < 0){
			eDAlpha = 0;
		}
	});
	

    $("#eyeballDiv").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, 500);
  		return false;
	});
	$("eyeballDiv").mousedown(function() {
		eDAlpha = eDAlpha + .2;
	});
	$("eyeballDiv").mouseup(function() {
		eDAlpha = eDAlpha - .2;
	});

	

	$("#eyeballDivDown").click(function() {
  		$("html, body").animate({ scrollTop: $('#bio').offset().top }, 1000);
  		return false;
	});
	$("eyeballDivDown").mousedown(function() {

	});
	$("eyeballDivDown").mouseup(function() {

	});

});
