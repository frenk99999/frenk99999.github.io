//koda za delovanje spletne strani kontakti

//prikaz google maps
function spremeni(){
	//console.log($("#mapa").css("display"));
	if($("#mapa").css("display")=="none"){
		$("#mapa").fadeIn(250);
	}
	else{
		$("#mapa").fadeOut(250);
	}
}

//dodajanje dogotkov
function addEventListener(){
	$(".but").click(spremeni);
}

$(function() {
	addEventListener();
})