
/*  Javascript functions developed by Jerome Brioude
 *
 *  This scripts are freely distributable under the GPL license
/*--------------------------------------------------------------------------*/
graph1=0;
graph2=0;
function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}

i=0;
i2=0;
function checkOvermap(event)
{
if (graph1==0)
{
var cnv2 = document.getElementById("pointer_div_map");
jg3 = new jsGraphics(cnv2);
graph1=1;
}
if (graph2==0)
{
var cnv2 = document.getElementById("pointer_div_map");
jg4 = new jsGraphics(cnv2);
graph2=1;
}
    if(window.event)
    {i2++
		  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_map").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_map").offsetTop;

    }
    else
    {i2++
        // For Firefox
		  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_map").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_map").offsetTop;
    
    }
if (i2==1 )
{

t=y_position - 0;
l=x_position;
//x=(x_position-13)*3/425-107*1;
//y=(y_position-49)*(-2/287)+41*1;
//x=(x_position-19)*(-115.5+121*1)/(283*1-19*1-1.)-121*1;
//y=(y_position-0)*(31.5-36.5)/(211-0+1.)+36.5;

miny=document.pointform.miny.value;
maxy=document.pointform.maxy.value;
minx=document.pointform.minx.value;
maxx=document.pointform.maxx.value;
//x=(x_position-60)*(-101.+109.)/(431*1-59*1)-109.;
//y=(y_position-36)*(37.-43.)/(324-35+1.)+35.0;
x=(x_position-60)*(maxx*1-minx*1)/(431*1-59*1)+minx*1;
y=(y_position-36)*(miny*1-maxy*1)/(324-35+1.)+maxy*1;

if (document.pointform.typecoupe[0].checked)
{
document.pointform.minlat.value=y ;
document.pointform.minlon.value=x;
}
else
{
document.pointform.minlatv.value=y ;
document.pointform.minlonv.value=x;
}
//document.pointform.minlat.value=y_position;
//document.pointform.minlon.value=x_position;
}
if(i2==2 )
    {
b=y_position - 0;
			r=x_position;
if ( l > r )
{
x1 = r;
x2 = l;
}
else
{
x1 = l;
x2 = r;
}
if ( t > b )
{
y1 = b;
y2 = t;
}
else
{
y1 = t;
y2 = b;
}

//x=(x_position-13)*3/425-107*1;
//y=(y_position-49)*(-2/287)+41*1;
miny=document.pointform.miny.value;
maxy=document.pointform.maxy.value;
minx=document.pointform.minx.value;
maxx=document.pointform.maxx.value;
//x=(x_position-60)*(-101.+109.)/(431*1-59*1)-109.;
//y=(y_position-36)*(37.-43.)/(324-35+1.)+35.0;
x=(x_position-60)*(maxx*1-minx*1)/(431*1-59*1)+minx*1;
y=(y_position-36)*(miny*1-maxy*1)/(324-35+1.)+maxy*1;

if (document.pointform.typecoupe[0].checked)
{
document.pointform.maxlat.value=y ;
document.pointform.maxlon.value=x;
if (graph1==0)
{
var cnv2 = document.getElementById("pointer_div_map");
jg3 = new jsGraphics(cnv2);
graph1=1;
}
jg3.setStroke(2);
jg3.setColor("#ff0000"); // red
jg3.drawRect(x1, y1, (x2-x1), (y2-y1));  
  jg3.paint();
}
else
{
document.pointform.maxlatv.value=y;
document.pointform.maxlonv.value=x;
if (graph2==0)
{
var cnv2 = document.getElementById("pointer_div_map");
jg4 = new jsGraphics(cnv2);
graph2=1;
}
jg4.setStroke(2);
jg4.setColor("#ff0000"); // red
  jg4.drawLine(l,t, r,b);
  jg4.paint();

}
}
if(i2==3 )
    {
if (document.pointform.typecoupe[0].checked)
{
if (graph1==1)
{
jg3.clear();
}
    document.pointform.minlat.value = 0;
document.pointform.maxlat.value = 0;
    document.pointform.minlon.value = 0;
document.pointform.maxlon.value = 0;
}
else
{
if (graph2==1)
{
jg4.clear();
}
    document.pointform.minlatv.value = 0;
document.pointform.maxlatv.value = 0;
    document.pointform.minlonv.value = 0;
document.pointform.maxlonv.value = 0;
}

i2=0;
}

//    key.innerHTML = "<p>"+x_position+" - "+y_position+"</p>";
}
i3=0;
function updategraph(event)
{
if (i2==1)
{
    if(window.event)
    {
                  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_map").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_map").offsetTop;

    }
    else
    {
        // For Firefox
                  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_map").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_map").offsetTop;

    }
b=y_position - 0;
r=x_position;
if ( l > r )
{
x1 = r;
x2 = l;
}
else
{
x1 = l;
x2 = r;
}
if ( t > b )
{
y1 = b;
y2 = t;
}
else
{
y1 = t;
y2 = b;
}



if (document.pointform.typecoupe[0].checked)
{
jg3.clear();
jg3.setStroke(2);
jg3.setColor("#ff0000"); // red
jg3.drawRect(x1, y1, (x2-x1), (y2-y1));
jg3.paint();

}
else
{
jg4.clear();
jg4.setStroke(2);
jg4.setColor("#ff0000"); // red
  jg4.drawLine(l,t, r,b);
  jg4.paint();

}

}
}

function checkOver_vertcyl(event)
{
    if(window.event)
    {i3++
		  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_vert_cyl").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_vert_cyl").offsetTop;

    }
    else
    {i3++
        // For Firefox
		  x_position = event.offsetX ? (event.offsetX) : event.pageX - $("pointer_div_vert_cyl").offsetLeft;
  y_position = event.offsetY?(event.offsetY):event.pageY - $("pointer_div_vert_cyl").offsetTop;
    
    }
if (i3==1 )
{
var namepro=document.pointform.nest.value;

t=y_position - 0;
l=x_position;
//x=(x_position-13)*3/425-107*1;
//y=(y_position-49)*(-2/287)+41*1;
//x=(x_position-19)*(-115.5+121*1)/(283*1-19*1-1.)-121*1;
//y=(y_position-0)*(31.5-36.5)/(211-0+1.)+36.5;
miny=document.pointform.miny.value;
maxy=document.pointform.maxy.value;
minx=document.pointform.minx.value;
maxx=document.pointform.maxx.value;
//x=(x_position-60)*(-101.+109.)/(431*1-59*1)-109.;
//y=(y_position-36)*(37.-43.)/(324-35+1.)+35.0;
x=(x_position-60)*(maxx*1-minx*1)/(431*1-59*1)+minx*1;
y=(y_position-36)*(miny*1-maxy*1)/(324-35+1.)+maxy*1;

document.pointform.formv_y.value=y ;
document.pointform.formv_x.value=x;
}
if(i3==2 )
    {
b=y_position - 0;
			r=x_position;
if ( l > r )
{
x1 = r;
x2 = l;
}
else
{
x1 = l;
x2 = r;
}
if ( t > b )
{
y1 = b;
y2 = t;
}
else
{
y1 = t;
y2 = b;
}
var cnv2 = document.getElementById("pointer_div_vert_cyl");
jg4 = new jsGraphics(cnv2);
jg4.setStroke(2);
jg4.setColor("#ff0000"); // red
  jg4.drawLine(l,t, r,b);
  jg4.paint();
var namepro=document.pointform.nest.value;
//x=(x_position-13)*3/425-107*1;
//y=(y_position-49)*(-2/287)+41*1;
//x=(x_position-19)*(-115.5+121*1)/(283*1-19*1-1.)-121*1;
//y=(y_position-0)*(31.5-36.5)/(211-0+1.)+36.5;
miny=document.pointform.miny.value;
maxy=document.pointform.maxy.value;
minx=document.pointform.minx.value;
maxx=document.pointform.maxx.value;
//x=(x_position-60)*(-101.+109.)/(431*1-59*1)-109.;
//y=(y_position-36)*(37.-43.)/(324-35+1.)+35.0;
x=(x_position-60)*(maxx*1-minx*1)/(431*1-59*1)+minx*1;
y=(y_position-36)*(miny*1-maxy*1)/(324-35+1.)+maxy*1;

document.pointform.formv_y2.value=y ;
document.pointform.formv_x2.value=x;
}
if(i3==3 )
    {
    document.pointform.formv_y.value = 0;
document.pointform.formv_x.value = 0;
    document.pointform.formv_y2.value = 0;
document.pointform.formv_x2.value = 0;
jg4.clear()
i3=0
}

//    key.innerHTML = "<p>"+x_position+" - "+y_position+"</p>";
}

//window.onload = init;

//-->
function basculer(fen, nb_fen) {
 for (j = 0; j < nb_fen; j++) {
  var cible = document.getElementById("fen" + j);
  var fl_cible = document.getElementById("fen-fl" + j);
  if (j == fen) {
   if (cible.style.display == "none"){
    cible.style.display="";
   } else {
    cible.style.display="none";
   }
  } else {
   cible.style.display = "none";
  }
 }
}

function basculer2(fen, nb_fen) {
 for (j = 3; j < nb_fen; j++) {
  var cible = document.getElementById("fen" + j);
  var fl_cible = document.getElementById("fen-fl" + j);
  if (j == fen) {
   if (cible.style.display == "none"){
    cible.style.display="";
   } else {
    cible.style.display="none";
   }
  } else {
   cible.style.display = "none";
  }
 }
}

k=0

bas=0;
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();