	<script>
	var i = 0;
	var txt = 'KYLE KIM'; /* The text */
	var speed = 100; /* The speed/duration of the effect in milliseconds */
	setTimeout(initText, speed);
	setTimeout(typeWriter, speed); //where the typing animation is being called
	var cycleCounter = 0;
	var maxCycle = 2; //cursor blinking time
	var textID = "myname"; //html my name ID

	function initText(){
		document.getElementById(textID).innerHTML = txt;
		var width = document.getElementById(textID).offsetWidth;
		var half = (screen.width/2) - (width/2);
		// document.getElementById(textID).style.left = half+"px";
		document.getElementById(textID).innerHTML = ''
	}
	function blinkCursor(){
		if (cycleCounter < maxCycle){
			if (document.getElementById(textID).innerHTML.slice(-1) != "|"){ //not |
				document.getElementById(textID).innerHTML += "|";
			}
			else{
				var newStr = document.getElementById(textID).innerHTML;
			  	var newStr = newStr.substring(0, newStr.length-1); //removing last character
			  	document.getElementById(textID).innerHTML = newStr;
			    cycleCounter += 1;
			}
			setTimeout(blinkCursor, speed)
		}else if(i == txt.length){ //end the loop put watever gonna execute once the writing is done
			document.getElementById(textID).style.left = ''
			document.getElementById("temp").style.textAlign = "center";
		}else{
			typeWriter();
			cycleCounter = 0;
		}
	}
	function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("myname").innerHTML += txt.charAt(i);
	    document.getElementById("myname").innerHTML += "|";
	    i++;
	    setTimeout(blinkCursor, speed);
	  }
	}
	</script>