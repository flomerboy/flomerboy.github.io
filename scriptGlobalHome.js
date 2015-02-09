$(document).ready(function(){

	bannerHeight = $("#banner").height() - 62	; // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
	console.log("banner height: " + bannerHeight + "px");
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
		if (wt > bannerHeight) {
			// console.log("should be green")
			// if(eDAlpha<.11){
			// 	document.getElementById("eyeballImg").src="home2green.svg";
			// } else {
			// 	document.getElementById("eyeballImg").src="home1green.svg";
			// }
			$(".nav").css("display","inline");
			$("#name").css("display","inline");
		} else {
			// if(eDAlpha<.11){
			// 	document.getElementById("eyeballImg").src="home2.svg";
			// } else {
			// 	document.getElementById("eyeballImg").src="home1.svg";
			// }
			$(".nav").css("display","none");
			$("#name").css("display","none");
		}
			
	},

	deBug = function(){
																//Debugging tools
	console.log("wt: " + wt);
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







