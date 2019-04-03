//Always create your document.ready when write JQuery
$(document).ready(function(){
	//console.log("Immmmm readyyyyy");
	//Add the class navOn to the first item on initial page load
	$(".navigation li:first").addClass("navigationOn");

	/* This handles the click events for the nav and checks which section 
		We want to go to. Then scrolls to that section */

	$(".navigation li").click(function(){
		//This is a function checking for clicks on my nav items
		//console.log("You clicked a nav item");
		//Remove that navOn class from w/e nav item has it
		$(".navigation li").removeClass("navigationOn");
		//Add the navOn class to the element that was clicked
		$(this).addClass("navigationOn");

		//Store the href ATTRIBUTE in variable so we know what we clicked on
		//This will be where we GO TO
		goTo = $(this).attr("href");
		console.log(goTo);

		//Scroll to the element with the corresponding ID of the href we stored
		//ScrollTop = how far from top to scroll to
		$("body, html").animate({ scrollTop: $(goTo).offset().top },1000);
	});
	$(".scrollDown").click(function(){
		//If the user clicks my down arrow, jump to the next section
		$("body, html").animate({ scrollTop: $("#pageevent").offset().top },1000);
	});


});












