$(document).ready(function(){

	wh = $(window).height(),      						// Height of window (visible part).
	wt = $(window).scrollTop(),
	dh = $(document).height(),
	eDDAlpha = wt/(dh-wh)*.4 + .1, 						//this value starts low and ends high
	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,					//this value starts high and ends low

	readHeight = function(){
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	// eDDAlpha = wt/(dh-wh)*.4 + .1, 					//this value starts low and ends high
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;				//this value starts high and ends low
	},

	draw = function(){
		if (wt > 550) {
			console.log("should be green")
			if(eDAlpha<.11){
				document.getElementById("eyeballImg").src="home2green.svg";
			} else {
				document.getElementById("eyeballImg").src="home1green.svg";
			}	
		} else{
			if(eDAlpha<.11){
				document.getElementById("eyeballImg").src="home2.svg";
			} else {
				document.getElementById("eyeballImg").src="home1.svg";
			}
		}
		
		if (wt<10){
 			document.getElementById("eyeballImg").src="home3.svg";
	 			$('#eyeballImg').css({
					'width': 6.2 +'vw'
				});
 			document.getElementById("icon").href="index.html";
 			console.log(wt);
 			} else {
 				$('#eyeballImg').css({
					'width': 6 +'vw'
				});
 			document.getElementById("icon").href="#banner";
 			console.log($("#icon").css("href"));	
 			}	
	},

	deBug = function(){
													//Debugging tools
  // 	console.log('window height: '+ wh);
  //   	console.log('window scrollTop: ' + wt);
  //   	console.log('eDAlpha: ' + eDAlpha);
  //   	console.log('eDDAlpha: ' + eDDAlpha);
  //   	console.log('document height: ' + dh );
  //   	console.log('darkness' + (.10+4*eDDAlpha));
  //   	console.log($('#eyeballImg').css("-webkit-filter"));
	}



	readHeight();
	draw();

	$(document).scroll(function(){
		readHeight();
		draw();
		deBug();
	});

	/*Scrollto*/

// Click event for any anchor tag that's href starts with #
 $('a[href^="#"]').click(function(event) {

    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = 0;

    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset;

    // The magic...smooth scrollin' goodness.
    $('html, body').animate({scrollTop:target}, 300);

    //prevent the page from jumping down to our section.
    event.preventDefault();
 });



});








