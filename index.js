$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 100,
		loop: true,
		keyboard: true
	});
});
function to_about_page(){
	$(".main").moveTo(3);
}


