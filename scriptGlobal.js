$(document).ready(function(){

	wh = $(window).height(),      						// Height of window (visible part).
	wt = $(window).scrollTop(),
	dh = $(document).height(),
	eDDAlpha = wt/(dh-wh)*.4 + .1, 						//this value starts low and ends high
	eDAlpha = (1 - wt/(dh-wh))*.4 + .1,					//this value starts high and ends low
	eDhover = 0,										//this variable stores whether or not the div has the mouse above it. 
	eDDhover = 0,										//0 = not lifted 2 = lifted. I increment it whenever the mouse enters, 
														//and subtract whever the mouse leaves.
	readHeight = function(){
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		dh = $(document).height(),
    	// eDDAlpha = wt/(dh-wh)*.4 + .1, 					//this value starts low and ends high
    	eDAlpha = (1 - wt/(dh-wh))*.4 + .1;				//this value starts high and ends low
	},

	draw = function(){
		$('#eyeballDiv').css({
			'box-shadow': (3+(20*eDDAlpha)) + 'px 3px ' + (14 + (20*eDDAlpha)) + 'px rgba(0,0,0,' + (.10+eDDAlpha/1.5) + ')',
			'left': 2.3 + eDAlpha +'em'
		});
	},

	deBug = function(){
																//Debugging tools
  // 	console.log('window height: '+ wh);
     	console.log('window scrollTop: ' + wt);
  //   	console.log('eDAlpha: ' + eDAlpha);
  //   	console.log('eDDAlpha: ' + eDDAlpha);
  //   	console.log('document height: ' + dh );
  //   	console.log('darkness' + (.10+4*eDDAlpha));
  //   	console.log($('#eyeballImg').css("-webkit-filter"));
	},

	hover = function(){
		if ($('#eyeballDiv').is(":hover")){
			console.log(eDAlpha);
			if (eDhover<.2){
				eDhover+=.02;
				eDAlpha= eDAlpha + eDhover;
				console.log(eDAlpha);
			}
		}
	}

	

	$(document).scroll(function(){
		readHeight();
		hover();
		draw();
		deBug();
		 if (wt==0){
 			document.getElementById("icon").href="index.html";
 			console.log(wt);
 			} else {
 			document.getElementById("icon").href="#banner";
 			console.log($("#icon").css("href"));	
 			}
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

		readHeight();
		hover();
		draw();

});








