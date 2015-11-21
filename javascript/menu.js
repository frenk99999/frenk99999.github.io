//Metoda se izvaja ob kliku. Skrije ali prikaže določe element v meniju elementov 
function prikaziOdstrani(){

	var element = $(this).find('> ul > li');
	if(element.css("display")=="none"){
		element.fadeIn(250);
	}
	else{
		element.fadeOut(250);
	}
	return false;
}

//Dodajanje dogodkov v meniju
function addEventListeners(){
	var search = '.navi > ul > li';
	
	for(var i=0;i<3;i++){
		$(search).click(prikaziOdstrani);
		search = search + ' > ul > li';
	}
} 

//Izvajanje, ko se dokument naloži
$(function() {
	addEventListeners();
})