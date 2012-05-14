$(function(){
			$('#slides').slides({
				preload: false,
				preloadImage: '',
				play: 5000,
				pause:0,			
				hoverPause: true,
				animationStart: function(current){
					$('.caption').animate({
						bottom:-35
					},200);
					$('.trmask').animate({
					  right:300,
						opacity:0
					},200);					
					$('.tlmask').animate({
					  right:600,
						opacity:0
					},200);
					$('.ttmask').animate({
					  top:0,
						opacity:0
					},200);
				  $('.tbmask').animate({
					  top:200,
						opacity:0
					},200);					
					if (window.console && console.log) {
						// example return of current slide number
						console.log('animationStart on slide: ', current);
					};
				},
				animationComplete: function(current){
					$('.caption').animate({
						bottom:0
					},1000);
					if (window.console && console.log) {
						// example return of current slide number
						console.log('animationComplete on slide: ', current);						
					};
					$('.trmask').animate({
					  opacity:0.8,
						right:340
						},500);						
				  $('.tlmask').animate({
					  opacity:0.8,
						right:450
						},500);							
					$('.ttmask').animate({
					  opacity:0.8,
						top:40
					},200);					
					$('.tbmask').animate({
					  opacity:0.8,
					  top:150
					},200);	
  			},
				slidesLoaded: function(){
					$('.caption').animate({
						bottom:0						
					},1000);
			  }						
			});
		});

		
		//
    // This method Gets URL Parameters (GUP)
    //
    function gup( name )
    {
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var tmpURL = window.location.href;
    var results = regex.exec( tmpURL );
    if( results == null )
    return "";
    else
    return results[1];
    }

    //
    // This method decodes the query parameters that were URL-encoded
    //
    function decode(strToDecode)
    {
    var encoded = strToDecode;
    return unescape(encoded.replace(/\+/g,  " "));
    }

		
		function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
    }
		
		
		//
    // Set parameters
    //
		
		var home=decode(gup('imageurl'));
		var tfamily=decode(gup('tfamily'));
	
		
    var feedback0 =new Array();
    var feedback1 =new Array();
		var feedback2 =new Array();
		var feedback3 =new Array();
		var tcatch=new Array(4);
		for(i=1;i<=4;i++){tcatch[i]=Math.ceil(20*Math.random());}
		
 
    var sheight = screen.height;
    var swidth = screen.width;
		var wwidth = window.innerWidth;
		
 
    var rhome="http://marconioz.github.com/isotrigoz/turk/"
	  var ehome="http://marconioz.github.com/isotrigoz/turk/CHUBB/isotrigons/Box/odd/"
		var tclass="";
    var rn=1;
		var thome=home;
    var ct=20;
    var str="";
		
		
		


    function settexture()
    {
		if (contains(tcatch,ct)) {thome=ehome;tclass="easy";} else{thome=home;tclass="current";}
		feedback3.push(tclass);
    try
    {
    document.getElementById('texture').src=thome +"t"+rn+ ".png"
    }
    catch(err1)
    {
    try
    {
    document.getElementById('texture').src=thome +"t"+rn+ ".png"
    }
    catch(err2)
    {
    txt="There was an error loading this texture.\n\n";
    txt+="Error description: " + err2.message + "\n\n";
    txt+="Click OK to continue.\n\n";
    alert(txt);
    }
    }
    }

    function setmask()
    {		
    try
    {
    document.getElementById('readyButton').style.visibility="visible";
    document.getElementById('texture').src=rhome +"t0.png"
    }
    catch(err1)
    {
    try
    {
    document.getElementById('texture').src=rhome +"t0.png"
    }
    catch(err2)
    {
    txt="There was an error on this page.\n\n";
    txt+="Error description: " + err2.message + "\n\n";
    txt+="Click OK to continue.\n\n";
    alert(txt);
    }
    }
    }


    function timedTexture()
    {
     document.getElementById('readyButton').style.visibility="hidden";
     rn=Math.ceil(1999*Math.random());
		
    var t1=setTimeout('settexture(rn)',300);
    var t2=setTimeout('setmask(rn)',2300);
    easytiger();
    document.getElementById('togo').value= ct;
    }

    function easytiger()
    {
    document.getElementById('readyButton').disabled = true; 
    document.getElementById('readyButton').value = "Where?";
    document.getElementById('kudos').style.visibility="hidden";
    enableit();
    }

    function gotiger(){        
    document.getElementById('readyButton').style.visibility="visible";
    document.getElementById('readyButton').disabled = false;
    document.getElementById('readyButton').value ="Ready?";
    }


		function teacher(r,s){
		if (r%8==1||r%8==2){if (s=="R2") {return true} else{return false} }//right
		if (r%8==3||r%8==4){if (s=="R1"){return true} else{return false} }//left
		if (r%8==5||r%8==6){if (s=="R0"){return true} else{return false} }//top
		if (r%8==7||r%8==0){if (s=="R3"){return true} else{return false} }//bottom
		if (s=="Duh!missed!"){return "NaN"};	
		} 
		
	
    function ipick(choice)
    {str=String(choice);
    var aux=teacher(rn+1,str); 
		
		
		if (aux==false){ 
		document.getElementById('kudos').src="img/mule.png"
		document.getElementById('kudos').style.visibility="visible"}
		else{
		document.getElementById('kudos').src="img/cooleyes.png"
		document.getElementById('kudos').style.visibility="visible"
		};
		
    
		document.getElementById(str).name="cat" +ct;
    


    feedback0.push(document.getElementById(str).value);
    feedback1.push("t"+rn+".jpg");
		feedback2.push(aux);
		
    
		
		
		
    if(ct==0){
    disableit();
    document.getElementById('readyButton').disabled==true;
    document.getElementById('readyButton').value ="Done! click submit";
    document.getElementById('submitButton').disabled =false;
    document.getElementById('submitButton').value = "Submit";


    document.getElementById('feed0').value=feedback0;
    document.getElementById('feed1').value=feedback1;
		document.getElementById('feed2').value=feedback2;
		document.getElementById('feed3').value=feedback3;
    }else{
    document.getElementById('submitButton').disabled = true;
    document.getElementById('submitButton').value = "Complete before submitting.";
    ct=ct-1;

    disableit();
    var t3=setTimeout('cleanit()',1000);
    gotiger();
    }
    }
    
		

    function cleanit()
    {
    for(i=0;i<=4;i++){
    if(document.getElementById("R"+i).checked){document.getElementById("R"+i).checked=false}
    }
    }

    function disableit()
		{
    for(i=0;i<=4;i++){document.getElementById("R"+i).disabled=true}
    }

    function enableit()
		{
    for(i=0;i<=4;i++){document.getElementById("R"+i).disabled=false}
    }


		
   function hideshow(which){
   if (!document.getElementById)
   return
   if (which.style.display=="block")
   which.style.display="none"
   else
   which.style.display="block"
   }
	 

	 
   //
	 //browser detect
	 //
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
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
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
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();


