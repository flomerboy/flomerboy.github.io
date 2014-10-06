$(document).ready(function(){

														//Run the lifter function once at the beginning of the pageload

	var	wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1, 					//this value starts low and ends high
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;				//this value starts high and ends low

	$('#eyeballDiv').css({
		'box-shadow': (3+(20*eDDAlpha)) + 'px 3px ' + (14 + (20*eDDAlpha)) + 'px rgba(0,0,0,' + (.10+eDDAlpha/1.5) + ')',
		'left': 2.3 + eDAlpha +'em'
	});

	$('#eyeballImg').css({
	 	'-webkit-filter': 'grayscale(' + (100*eDAlpha) + '%)',
	 	'-moz-filter': 'grayscale(' + (100*eDAlpha) + '%)',	
	 	'filter': 'grayscale(' + (100*eDAlpha) + '%)',
	 	'opacity': (100*eDDAlpha) + '%)'
	});

	$('#eyeballDivDown').css({
		'box-shadow': (3+(20*eDAlpha)) + 'px 3px ' + (14 + (20*eDAlpha)) + 'px rgba(0,0,0,' + (.10+eDAlpha/1.5) + ')',
		'right': 2.8 - eDDAlpha +'em'
	});

	$('#eyeballImgDown').css({
	 	'-webkit-filter': 'grayscale(' + (100*eDDAlpha) + '%)',
	 	'-moz-filter': 'grayscale(' + (100*eDDAlpha) + '%)',	
	 	'filter': 'grayscale(' + (100*eDDAlpha) + '%)',
	 	'opacity': (100*eDAlpha) + '%)'
	});

  	if (eDAlpha < 0){
		eDAlpha = 0;
	}
	if (eDDAlpha < 0){
		eDDAlpha = 0;
	}
	
														//Run it again every time the user scrolls.

	$(document).scroll(function(){
	var	wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1,
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;

														//Debugging tools
		console.log('eDD' + eDDAlpha);
    	// console.log('window height: '+ wh);
    	// console.log('window scrollTop: ' + wt);
    	// console.log('eDAlpha: ' + eDAlpha);
    	// console.log('eDDAlpha: ' + eDDAlpha);
    	// console.log('document height: ' + dh );
    	// console.log('darkness' + (.10+4*eDDAlpha));
    	// console.log($('#eyeballImg').css("-webkit-filter"));

    	$('#eyeballDiv').css({
			'box-shadow': (3+(20*eDDAlpha)) + 'px 3px ' + (14 + (20*eDDAlpha)) + 'px rgba(0,0,0,' + (.10+eDDAlpha/1.5) + ')',
			'left': 2.3 + eDAlpha +'em'
		});

		$('#eyeballImg').css({
		 	'-webkit-filter': 'grayscale(' + (100*eDAlpha) + '%)',
		 	'-moz-filter': 'grayscale(' + (100*eDAlpha) + '%)',	
		 	'filter': 'grayscale(' + (100*eDAlpha) + '%)',
		 	'opacity': (100*eDDAlpha) + '%)'
		});

		$('#eyeballDivDown').css({
			'box-shadow': (3+(20*eDAlpha)) + 'px 3px ' + (14 + (20*eDAlpha)) + 'px rgba(0,0,0,' + (.10+eDAlpha/1.5) + ')',
			'right': 2.8 - eDDAlpha +'em'
		});

		$('#eyeballImgDown').css({
		 	'-webkit-filter': 'grayscale(' + (100*eDDAlpha) + '%)',
		 	'-moz-filter': 'grayscale(' + (100*eDDAlpha) + '%)',	
		 	'filter': 'grayscale(' + (100*eDDAlpha) + '%)',
		 	'opacity': (100*eDAlpha) + '%)'
		});
		  	
		  	if (eDAlpha < 0){
				eDAlpha = 0;
			}
			if (eDDAlpha < 0){
				eDDAlpha = 0;
			}
	});

    $("#eyeballDiv").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, 500);
  		return false;
	});

	$("#eyeballDiv").mouseenter(function() {
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1,
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;

		for(i = 1; i < 11; i++){
	    	(function(i){
	    		setTimeout(function(){
	    			eDAlpha-=.02;
	    			eDDAlpha+=.02;
					$('#eyeballDiv').css({
						'box-shadow': (3+(20*eDDAlpha)) + 'px 3px ' + (14 + (20*eDDAlpha)) + 'px rgba(0,0,0,' + (.10+eDDAlpha/1.5) + ')',
						'left': 2.3 + eDAlpha +'em'
					});

					$('#eyeballImg').css({
					 	'-webkit-filter': 'grayscale(' + (100*eDAlpha) + '%)',
					 	'-moz-filter': 'grayscale(' + (100*eDAlpha) + '%)',	
					 	'filter': 'grayscale(' + (100*eDAlpha) + '%)',
					 	'opacity': (100*eDDAlpha) + '%)'
					});
					console.log('eDD' + eDDAlpha);
				}, 50 * i);
			}(i));
		}
	});

	$("#eyeballDiv").mouseleave(function() {
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .3,
    	eDAlpha = (1 - wt/(dh-wh))*.4 - .1;

		for(i = 1; i < 11; i++){
	    	(function(i){
	    		setTimeout(function(){
	    			eDAlpha+=.02;
	    			eDDAlpha-=.02;
					$('#eyeballDiv').css({
						'box-shadow': (3+(20*eDDAlpha)) + 'px 3px ' + (14 + (20*eDDAlpha)) + 'px rgba(0,0,0,' + (.10+eDDAlpha/1.5) + ')',
						'left': 2.3 + eDAlpha +'em'
					});

					$('#eyeballImg').css({
					 	'-webkit-filter': 'grayscale(' + (100*eDAlpha) + '%)',
					 	'-moz-filter': 'grayscale(' + (100*eDAlpha) + '%)',	
					 	'filter': 'grayscale(' + (100*eDAlpha) + '%)',
					 	'opacity': (100*eDDAlpha) + '%)'
					});
					console.log('eDD' + eDDAlpha);
				}, 50 * i);
			}(i));

		}
	});

	$("#eyeballDivDown").click(function() {
  		$("html, body").animate({ scrollTop: $('#bio').offset().top }, 1000);
  		return false;
	});

	$("#eyeballDivDown").mouseenter(function() {
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .1,
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;

		for(i = 1; i < 11; i++){
	    	(function(i){
	    		setTimeout(function(){
	    			eDAlpha+=.02;
	    			eDDAlpha-=.02;
					$('#eyeballDivDown').css({
						'box-shadow': (3+(20*eDAlpha)) + 'px 3px ' + (14 + (20*eDAlpha)) + 'px rgba(0,0,0,' + (.10+eDAlpha/1.5) + ')',
						'right': 2.8 - eDDAlpha +'em'
					});

					$('#eyeballImgDown').css({
					 	'-webkit-filter': 'grayscale(' + (100*eDDAlpha) + '%)',
					 	'-moz-filter': 'grayscale(' + (100*eDDAlpha) + '%)',	
					 	'filter': 'grayscale(' + (100*eDDAlpha) + '%)',
					 	'opacity': (100*eDAlpha) + '%)'
					});
				}, 50 * i);
			}(i));
		}
	});

	$("#eyeballDivDown").mouseleave(function() {
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDDAlpha = wt/(dh-wh)*.4 + .3,
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .3;

		for(i = 1; i < 11; i++){
	    	(function(i){
	    		setTimeout(function(){
	    			eDAlpha-=.02;
	    			eDDAlpha+=.02;
					$('#eyeballDivDown').css({
						'box-shadow': (3+(20*eDAlpha)) + 'px 3px ' + (14 + (20*eDAlpha)) + 'px rgba(0,0,0,' + (.10+eDAlpha/1.5) + ')',
						'right': 2.8 - eDDAlpha +'em'
					});

					$('#eyeballImgDown').css({
					 	'-webkit-filter': 'grayscale(' + (100*eDDAlpha) + '%)',
					 	'-moz-filter': 'grayscale(' + (100*eDDAlpha) + '%)',	
					 	'filter': 'grayscale(' + (100*eDDAlpha) + '%)',
					 	'opacity': (100*eDAlpha) + '%)'
					});
				}, 50 * i);
			}(i));
			console.log(eDDAlpha);
		}
	});
});
