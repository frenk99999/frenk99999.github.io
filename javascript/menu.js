//datotekaa za delovanje navigacijskega menuja

//Metoda se izvaja ob kliku. Skrije ali prikaže določe element v meniju elementov 
function prikaziSkrij(){

	var element = $(this).parent().find('> ul > li');
	if(element.css("display")=="none"){
		element.fadeIn(250);
	}
	else{
		element.fadeOut(250);
	}
	return false;
}

function dodaj(){
	if($(this).find('ul').length > 0){
		$( this ).find('> div').click(prikaziSkrij);
	}
}

//Dodajanje dogodkov v meniju
function addEventListeners(){
	var search = '.navi > ul > li';
	
	for(var i=0;i<4;i++){
		var searched = $(search);
		$(search).each(dodaj);
		//$(search).click(prikaziOdstrani);
		search = search + ' > ul > li';
	}
	
	$(".active").fadeIn(250);
	$(".selected").css("background","#ffffff");
} 

//Izvajanje, ko se dokument naloži
$(function() {
	addEventListeners();
})