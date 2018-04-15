function typeName(){
	var elementID = "myname"; //id of the place where the typing will happen
	var writeInNewLine = true;
	var aText = new Array("KYLE KIM","Computer Scientist"); // set up text to print, each item in array is new line
	var iSpeed = 100; // time delay of print out
	var iIndex = 0; // start printing array at this posision
	var iArrLength = aText[0].length; // the length of the text array
	var iScrollAt = 20; // start scrolling up at this many lines
	var iTextPos = 0; // initialise text position
	var sContents = ''; // initialise contents variable
	var iRow; // initialise current row
	 
	function typewriter(){
		sContents =  ' ';
	 	iRow = Math.max(0, iIndex-iScrollAt);
	 	var destination = document.getElementById(elementID);
		if (writeInNewLine == true){
		 	while ( iRow < iIndex ) { //if iRow is smaller than iIndex than add irow so that we can move on to nxt string
		  	sContents += aText[iRow++] + '<br />';
		 	}
		}
	 	if ( iTextPos++ == iArrLength ) {
	 		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span>|</span>"; //add blinking animation to span tag
		  	iTextPos = 0;
		  	iIndex++;
		  	if ( iIndex != aText.length ) {
		   		iArrLength = aText[iIndex].length;
		   		setTimeout("typewriter()", 500);
		  	}
	 	}else{
	  		setTimeout("typewriter()", iSpeed);
	  		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
	 	}
	}
}
setTimeout(typeName,500); // calling the function