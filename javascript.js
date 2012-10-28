 
	
function ajaxcallhome () {
	$("#ajax").load('landing.html');
	
}
function ajaxcallcontact () {
	$("#ajax").load('contact.html');
	
}	
function ajaxcallabout () {
	$("#ajax").load('about.html');
	
}
	
function ajaxcallprojects () {
	$("#ajax").load('cool.html');
	
}
function ajaxcallcode () {
	$("#ajax").load('code.html');
}
function ajaxcallnhd () {
	$("#ajax").html('<object data="http://54844055.nhd.weebly.com/">');
}
function ajaxcallnoaa () {
	$("#ajax").html('<object data="http://www.narendasan.com/test.html">');
}
function bottom () {
	var x = Math.floor((Math.random()*10)+1)
	if ( x == 1 ) {
		var color = 'patterna.jpg';
		} 
	else if ( x == 2 ) {
		var color = 'patternb.jpg';
		} 
	else if ( x == 3) {
		var color = 'patternc.jpg';
		} 
	else if ( x == 4 ) {
		var color = 'patternd.jpg';
		}	 
	else if ( x == 5 ) {
		var color = 'patterne.jpg';
		} 
	else if ( x == 6 ) {
		var color = 'patternf.jpg';
		} 
	else if ( x == 7 ) {
		var color = 'patterng.jpg';
		} 
	else {
		var color = 'patternh.jpg';
		} 
 $("#lower").html('<div id "lower" style ="background-image:url('+color+')"></div>');
}


