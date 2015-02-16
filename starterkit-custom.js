// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//


jQuery(document).ready(function() {
    $("#orderedlist").addClass("red");
    $("#orderedlist > li").addClass("blue");
    $("#orderedlist > li:last").hover(function() {
	$(this).addClass("green");
    },function(){
	$(this).removeClass("green");
    });
});





















function overColor(color){
	$(this).addClass(color);
}
function leftoverColor(color){
	$(this).removeClass(color);
}