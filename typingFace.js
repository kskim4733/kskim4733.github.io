var aText2 = new Array(
"..........................................................-:/+osssso+/:-..........................................................",
".....................................................-:/shdmmddmmmdmdddhyo/-......................................................",
"..................................................-/ohdmNmmmmmmmmmmmmmmmmmdhs/-...................................................",
"................................................-+hmNNNNNNNNNNNmmmmmmmmmmmmmmdy+:.................................................",
"..............................................:sdNNNNNNNNNNNNNNNNNNmmmNNNNNNNNmdy/................................................",
"............................................/smNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMNNmy/-..............................................",
"..........................................:ymNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmy:..............................................",
"........................................./dNNNNNNMMMMMMMMMMMMMMMNNNNMMMMMMMMMMMMNNm+-.............................................",
"........................................omNNNNNNNMMMMMMMMMNNNNmmdddddmmmmmNNNMMMMNNdo-............................................",
"......................................./mNNNNNNNNMMMMNNmmdddhddhyyyyyssssyyhdmmNNNNNmy:...........................................",
".......................................sNNNNNNNNMMMNmdhyyyyyhhyssoooo+++++++osyhdmmNNNy-..........................................",
"......................................+mNNNNNMMNMNmdyyssssyyhsooo++///////////+oshdmmNNh:.........................................",
"....................................-oNNNNNMMMNNNdhyssooosyyo++++/////::::://///+oyhdmNNm+........................................",
"...................................-oNNNNMMMMMNmdhysoooosyso++//////::::::::::////osyhmNNm+.......................................",
"...................................+mNNNMMMMMNmdyssooooyyo+++/////::::::::::/:////+osyhmNNmo......................................",
"----..............................:dNNMMMMMMNmhyssooosso++//////::::::::::::::::///+osyhmmNd:.....................................",
"-----.............................oNNMMMMMMNmhyssoo+o++////:::::::::::::::::::::://+osyyhmNNy.....................................",
"---.....--------..................yNNMMMMMNmdyssoo+++////::::::::::::::::::::::::://+syhhdmNN-....................................",
"------.....-----------.--.........sNNMMMMNmhhyyyhhhhhyyso+/////:::://+osssysssoo++//+oyhdddmNo....................................",
"-------------------------.........+NNMMMNNhhhhddmmmmmmddhys++///////+syhhddddddhyyso++shddmmNy....................................",
"-----------------------------------smNMNNmddddddddddddddhysoo+++++++osyyhhhyyyyysssso+oydmmmNy....................................",
"------------------------------------:dhyhNdysosssoooooossyhddhyyyyhdyssooooo++++//:/++:+ymmmmo....................................",
"-------------------------------------ymNNhdoossyyyyyysoosoosNNmmmNmo+oooossoo+++/::--+/yodmmm+....................................",
"-------------------------------------omNNdsosyhddydNNNdyssssNdyyyhm+++oshdNmmyooo+/::+oo:/mmd:....................................",
"-------------------------------------/mNddoosssyyyyhhyysooshms/:+hNs//+ossyysooooo+/:s+/+ohm+.....................................",
"-------------------------------------+hhsmoooooooooooo+++osmy/:-:+dm+////+++++//////+s/::dds-.....................................",
"------------------------------------/shyoydso++++++++++++ymh+:---:+hdo//://///::://+y+/::hy/::....................................",
"------------------------------------:syyoosyhysssssssssyhyyo+:---::+osyssoooooooosso/:::/y+:o/....................................",
"-------------------------------------+syooooooooooo++++ooso+/:---:://++++++++++++///::::/o/:/.....................................",
"--------------------------------------shooooo+++++////+oso++/::---::////////////////::::+o/:-.....................................",
"--------------------------------------shsoooo++++////++ooo++//::-::::/+///:::::::::::::/oo+/-.....................................",
"--------------------------------------oysoooo++++////+osshdho++//ohy+/////:::::::::::::/++o/......................................",
"--------------------------------------/osooooo++++///+ossyyyysooooo+++/:::::::::::::::://:/-......................................",
"--------------------------------------/oooooooo+++////++oooo++++/////::::::::::::::::::/:::.......................................",
"--------------------------------------/+oo++++o++++++++++oooo++++//::::::::::::::::::::/:-........................................",
"-----------------------------------------/++++++o++++ooosyyyysssssso+///////::::::::::::--........................................",
"------------------------------------------++++oooooooshdhhhyyyyssssyyyyso++/::::::::::-...........................................",
"-------------------------------------------++oooooooossyyyssooo++++ooo+++++//::::::::-............................................",
"-------------------------------------------/+oooooooo+oooooooooo++////:::////:::::::-.............................................",
"--------------------------------------------+ooooooooo++++++++++//::::::://////////:..............................................",
"--------------------------------------------/ooooooooo+++////////::::::::::////////-..............................................",
"--------------------------------------------/ooooooooo+++++/++////:::::::::////////-..............................................",
"---------------------------------------------ooossooooooooo+++++////////////+//////-..............................................",
"---------------------------------------------ossssssoooooooooo+++++++++/+++++////::-..............................................",
"--------------------------------------------/ososssssssooooooooo+ooooooooo++/////::-..............................................",
"--------------------------------------------+oooossssssssssssssssssssooo+++/////::::`.............................................",
"--------------------------------------------oyoooosoooossssssssssoooo++//////:::::+-``............................................",
"-------------------------------------------//hsooooooooososoooooo+++/////////:////+.```...........................................",
"---------------------------------------:////:shooooooooooooooo++++//////////////++.````...````....................................",
"-------------------------------------://:----:ssoooo+ooooooooo+++//////////////+s-.`````....`````.................................",
"----------------------------///////-::/:------:yoo+++oo++++++++++++//++///////+s:.``````..........```.............................",
"-------------------//////------------::--------/yo++++++++++++++++++++///////+o:..```````..........```````........................",
"--------------////-------------------:-----....-+so+++++++++++++++++////////+s:-.````````............`..`````.....................",
"------------//-----..---------------------......-so++++++++++++++++++//////+s:-.``````````..........``........```.................",
"-------///::::--..--..-------------------::-.....:oo+++++++++++++++++////++s/-..-.````````...........`.`...`...`````..............",
"----////::---........-....---------://++ooso+-....-:++++/++++++++++++++/+o+/-.-/+++/:-.``............```......``...````...........",
"---//::----..................-------::/+ooooo+:-....-/++///+++++++++++++/:----://///+++:..............``......``..`````````.......",
"//::----..-.................----------::///++++//-....:++//////+++++++/----.----:-------..............``.....``...````````````....",
"/:-..--.......-...............----------:::////////:-...:////////+++/-..--..-----.....................``.....``...``..```````````.",
":-..--........-....................---------:::://///::-..:/:///++/-....-.............................``....``...`..``````````````",
"-...---.......--......................-----------::::::::-.-://++:-...................................``...```...`.....```````````",
"-...---........--.........................-.------------:::--/+/-.....................................``..```....`.....```````````",
"--..----.----..-.....---..................-..............-------..........................................```....`.....```````````",
"--..----------.-...------..--.-............................--.............................................```....`......`````````"); // set up text to print, each item in array is new line
var elementID2 = "textImage"; //id of the place where the typing will happen
var writeInNewLine2 = true;
var iSpeed2 = 0.5; // time delay of print out
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
 		destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "|"; //add blinking animation to span tag
	  	iTextPos2 = 0;
	  	iIndex2++;
	  	if ( iIndex2 != aText2.length ) {
	   		iArrLength2 = aText2[iIndex2].length;
	   		setTimeout("typewriter2()", writeSpeed);
	  	}
 	}else{
  		setTimeout("typewriter2()", iSpeed2);
  		destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "|";
 	}
}

setTimeout(typewriter2,writeSpeed); // calling the function