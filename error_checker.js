function checkform()
{


	 if (document.pointform.time.value == "")
	{
		// No entry in date field
		alert('Please enter a date');
		return false;
	}
	else if (document.pointform.time.value == "03/29/12" && document.pointform.hour.value < 1)
       {	
		// Date is not in expected value range
		alert('Please enter a date between March 29 1:00 and June 26 3:00');
		return false;
       }
      	else if (document.pointform.time.value == "06/23/12" && document.pointform.hour.value < 3)
       {	
		// Date is not in expected value range
		alert('Please enter a date between March 29 1:00 and June 26 3:00');
		return false;
       }
	else if (document.pointform.nbmovie.value >=25 || !(document.pointform.nbmovie.value ) )
	{
		// Number of movie images is higher than 25
		alert('Please limit the number of movie images to under 25');
		return false;
	}
	else if (document.pointform.maxval.value < document.pointform.minval.value)
       {
	    // The min parameter is greater than the max parameter
	    alert('The maximum parameter cannot be less than the minimum parameter');
	    return false;
       }
       else if (document.pointform.altit.value > -1 && document.pointform.altit.value >= document.pointform.altit2.value)
	{	
	    // The altitude is greater than zero and the top layer is greater than the bottom layer
	    alert('If the altitude is greater than zero, then the altitude of the top layer must be greater than the altitude');
		return false;
	}
	else if (document.pointform.minlat.value > 50 || document.pointform.minlat.value < 0)
	{
		// The minimun latitude is not in the execepted range
		alert('Please select a minimum horizontal latitude between 0 and 50');
		return false;
	}
	else if (document.pointform.maxlat.value > 50 || document.pointform.maxlat.value < 0)
	{
		// The maximun latitude is not in the execepted range
		alert('Please select a maximum horizontal latitude between 0 and 50');
		return false;
	}
	else if (document.pointform.minlatv.value > 50 || document.pointform.minlatv.value < 0)
	{
		// The minimun vertical latitude is not in the execepted range
		alert('Please select a minimum vertical latitude between 0 and 50');
		return false;
	}
	else if (document.pointform.maxlatv.value > 50 || document.pointform.maxlatv.value < 0)
	{
		// The maximun vertical latitude is not in the execepted range
		alert('Please select a maximum vertical latitude between 0 and 50');
		return false;
	}
	else if (document.pointform.minlon.value > 0 || document.pointform.minlon.value < -125)
	{
		// The minimun longitude is not in the execepted range
		alert('Please select a minimum horizontal longitude between -70 and -125');
		return false;
	}
	else if (document.pointform.maxlon.value > 0 || document.pointform.maxlon.value < -125)
	{
		// The maximun longitude is not in the execepted range
		alert('Please select a maximum horizontal longitude between -70 and -125');
		return false;
	}
	else if (document.pointform.minlonv.value > 0 || document.pointform.minlonv.value < -125)
	{
		// The minimun vertical longitude is not in the execepted range
		alert('Please select a minimum vertical longitude between -70 and -125');
		return false;
	}
	else if (document.pointform.maxlonv.value > 0 || document.pointform.maxlonv.value < -125)
	{
		// The maximun vertical longitude is not in the execepted range
		alert('Please select a minimum vertical longitude between -70 and -125');
		return false;
	}
	
	else  
	{
		// All tests have passed, change css of the div to show spinner until image loads



   $('#loader').addClass("loading");

  var times = 0;
  var call = setInterval(function () {
       var img = new Image();
	times++;
	alert('Ajax call #' + times);
	//the number below is the maximum amount of ajax calls until disconnect
	if (times == 3){
	clearInterval(call);
		    $('#loader').removeClass('loading');
		    $("#loader").html('Unable to generate image');
}
	$(img).load(function () {
	
           //$(this).css('display', 'none'); // .hide() doesn't work in Safari when the element isn't on the DOM already
	   clearInterval(call);
	   $(this).hide();
           $('#loader').removeClass('loading').append(this);
           $(this).fadeIn();
	     

		
		// notify the user that the image could not be loaded
	    }).attr('src', 'USMap.png');
	   },3000);
  //the number above is the interval between ajax calls
return true;
	
}

}