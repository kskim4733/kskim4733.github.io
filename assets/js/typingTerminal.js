aText2= new Array (
	"Years of programming experiences in Java, Python and more.",
	"Responsible team player.",
	"Self-learning and Initiative.",
	"Check My Resume For More Information!")

var elementID2 = "type-animation-terminal"; //id of the place where the typing will happen
var writeInNewLine2 = true;
var iSpeed2 = 15; // time delay of print out
var iIndex2 = 0; // start printing array at this posision
var iArrLength2 = aText2[0].length; // the length of the text array
var iScrollAt2 = 20; // start scrolling up at this many lines
var iTextPos2 = 0; // initialise text position
var sContents2 = ''; // initialise contents variable
var iRow2; // initialise current row
var writeSpeed = 5;
function typewriter2(){
	sContents2 =  ' ';
 	iRow2 = 0;
 	var destination2 = document.getElementById(elementID2);
	if (writeInNewLine2 == true){
	 	while ( iRow2 < iIndex2 ) { //if iRow is smaller than iIndex than add irow so that we can move on to nxt string
	  	sContents2 += aText2[iRow2++] + '<br>';
	 	}
	}
 	if ( iTextPos2++ == iArrLength2 ) {
 		destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2); //add blinking animation to span tag
	  	iTextPos2 = 0;
	  	iIndex2++;
	  	if ( iIndex2 != aText2.length ) {
	   		iArrLength2 = aText2[iIndex2].length;
	   		setTimeout("typewriter2()", writeSpeed);
	  	}
 	} else {
  		setTimeout("typewriter2()", iSpeed2);
  		destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2);
 	}
}

setTimeout(typewriter2,writeSpeed); // calling the function