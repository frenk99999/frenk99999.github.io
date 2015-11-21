//Funkcije za dodajanje in odstranjevanje predmetov

//prikaže GUI za dodajanje predmetov
function prikaziDodaj(){
	$("#dodaj").fadeIn(250);
}

//prikaže GUI za odstranjevanje
function prikaziOdstrani(){
	var htmlstring = "";
	$(".navi a").each(function(){
		htmlstring = htmlstring +"<li>"+$(this).text()+"<input type=\"checkbox\"></li>"
	});
	htmlstring = "<ul>"+ htmlstring +"</ul>";
	$("#list").html(htmlstring);
	$("#odstrani").fadeIn(250);
}

//skrije dodajanje/odstranjevanje
function skrijDoOd(){
	$(this).parent().parent().fadeOut(250);
}

//odstrani predmet
function odstraniPred(){
	$("#odstrani input").each(function(){
		if($(this).prop("checked")){
			var pred = $(this).parent().text();
			$(this).parent().remove();
			$(".navi a").each(function(){
				console.log($(this).text());
				if($(this).text() == pred){
					$(this).parent().parent().remove();
				}
			});
		}
	});
}

//preverjanje za podatki in dodajanje predmeta
function dodajPred(){
	if($("#imePre").val() != ""){
		$("#imePre").css("border-color","#f7f7f7");
		$("#warning").text("");
		var letnik = parseInt($(".lt").val());
		var stopnja = parseInt($(".st").val());
		if((stopnja==2 || stopnja == 3) && (letnik == 3)){
			$("#warning2").css("color","#ff0000");
			$("#warning2").text("*Tretji letnik obstaja le v prvi stopji");
		}
		else{
			$("#warning2").text("");
			letnik = $(".lt option:selected").text();
			stopnja = $(".st option:selected").text();
			$(".navi>ul>li>div").each(function(){
				if($(this).text().indexOf(stopnja)>-1){
					$(this).parent().find("> ul > li >div").each(function(){
						console.log($(this))
						if($(this).text().indexOf(letnik )>-1){
							$(this).parent().find(">ul").append("<li><div><a href=\"#\">"+ $("#imePre").val() +"</a></div></li>");
						}
					});
				}
			});
		}
	}
	else{
		$("#imePre").css("border-color","#ff0000");
		$("#warning").css("color","#ff0000");
		$("#warning").text("*Vnesite ime predmeta");
		var letnik = parseInt($(".lt").val());
		var stopnja = parseInt($(".st").val());
		if((stopnja==2 || stopnja == 3) && (letnik == 3)){
			$("#warning2").css("color","#ff0000");
			$("#warning2").text("*Tretji letnik obstaja le v prvi stopji");
		}
		else{
			$("#warning2").text("");
		}
	}
}

//dodajanje dogodkov
function addIndexListeners(){
	$(".st")
	$("#dodPredmet").click(prikaziDodaj);
	$("#odsPredmet").click(prikaziOdstrani);
	$(".close").click(skrijDoOd);
	$("#odstraniBut").click(odstraniPred);
	$("#dodajBut").click(dodajPred);
}

$(function(){
	addIndexListeners();
});