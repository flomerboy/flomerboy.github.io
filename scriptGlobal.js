$(document).ready(function(){

	bannerHeight = $("div.bukkit#banner").height() + 50;
	console.log("banner height: " + bannerHeight + "px");
	wh = $(window).height(),      						// Height of window (visible part).
	wt = $(window).scrollTop(),
	dh = $(document).height(),
	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,					//this value starts high and ends low
	eDhover = 0,				//this value starts high and ends low

	readHeight = function(){
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;				//this value starts high and ends low
	},

	draw = function(){
		if (wt > bannerHeight) {
			console.log("should be green");
			// if(eDAlpha<.11){
			// 	document.getElementById("eyeballImg").src="home2green.svg";
			// } else {
			// 	document.getElementById("eyeballImg").src="home1green.svg";
			// }	
			$("#name").css("display","inline");
			$(".nav").css("background-color","#4CAF50");
			document.getElementById("home").href="#banner";
			document.getElementById('name').innerHTML = 'up';
			
		} else{
			// if(eDAlpha<.11){
			// 	document.getElementById("eyeballImg").src="home2.svg";
			// } else {
			// 	document.getElementById("eyeballImg").src="home1.svg";
			// }
			$("#name").css("display","inline"); //I actually want "home" to display all the time.
			$(".nav").css("background-color","#4CAF50");
			document.getElementById("home").href="index.html";
			document.getElementById("name").innerHTML = 'back';
			console.log("no nav");
		}
	}
		
		if (wt<10){
 			// document.getElementById("eyeballImg").src="home3.svg";
	 		// 	$('#eyeballImg').css({
				// 	'width': 6.2 +'vw'
				// });
 			 
 			// console.log(wt);
 			 } else {
 			// 	$('#eyeballImg').css({
				// 	'width': 6 +'vw'
				// });
 			 document.getElementById("name").href="#banner";
 			// console.log($("#icon").css("href"));	
 			// }	
	}

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

	$('.adaptive-height').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
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







