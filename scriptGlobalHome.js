$(document).ready(function(){

	wh = $(window).height(),      						// Height of window (visible part).
	wt = $(window).scrollTop(),
	dh = $(document).height(),
	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,					//this value starts high and ends low
	eDhover = 0,										//this variable stores whether or not the div has the mouse above it.  
														//and subtract whever the mouse leaves.
	readHeight = function(){
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
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
		} else {
			if(eDAlpha<.11){
				document.getElementById("eyeballImg").src="home2.svg";
			} else {
				document.getElementById("eyeballImg").src="home1.svg";
			}
		}
			
	},

	deBug = function(){
																//Debugging tools
  // 	console.log('window height: '+ wh);
     	console.log('window scrollTop: ' + wt);
     	console.log(url);
  //   	console.log('eDAlpha: ' + eDAlpha);
  //   	console.log('document height: ' + dh );
  //   	console.log($('#eyeballImg').css("-webkit-filter"));
	}



	readHeight();
	draw();

	$(document).scroll(function(){
		readHeight();
		draw();
		deBug();
		 // if (wt==0){
 		// 	document.getElementById("eyeballImg").src="home3.svg";
 		// 	document.getElementById("icon").href="index.html";
 		// 	console.log(wt);
 		// 	} else {
 		// 	document.getElementById("icon").href="#banner";
 		// 	console.log($("#icon").css("href"));	
 		// 	}
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







