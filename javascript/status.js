var guest = {status: "guest"};
var student = {status: "student"};
var profesor = {status:"profesor"};
var admin = {status: "administrator"};
var stat = profesor;

//spreminjanje napisa
function spremeniNapis(){
	$("#odjava span").text("odjava");
	$("#odjava a").attr("href", "#");
	$("#status").html("<b>Status: </b>"+stat.status);
}

//Brisanje elementov določenega razreda (le v primeru če se ne pojavi niz v spremenljivki exept)
function izbrisiStuEle( exept ){
	$(".stu").each(function(){
		var atri = $(this).attr("class");
		var ind = atri.indexOf(exept);
		if(ind == -1){
			$(this).remove();
		}
	});
}

function izbrisiProEle( exept ){
	$(".pro").each(function(){
		var atri = $(this).attr("class");
		var ind = atri.indexOf(exept);
		if(ind == -1){
			$(this).remove();
		}
	});
}

function izbrisiAdmEle( exept ){
	$(".adm").each(function(){
		var atri = $(this).attr("class");
		var ind = atri.indexOf(exept);
		if(ind == -1){
			$(this).remove();
		}
	});
}

function izbrisiGueEle( exept ){
	$(".gue").each(function(){
		var atri = $(this).attr("class");
		var ind = atri.indexOf(exept);
		if(ind == -1){
			$(this).remove();
		}
	});
}

//kontrola dostopnosti, izbriše elemente za katere uporabnik nima dostopa
function preveriStatus(){
	if(stat.status == "guest"){
		izbrisiStuEle("gue");
		izbrisiProEle("gue");
		izbrisiAdmEle("gue");
	}
	else if(stat.status == "student"){
		spremeniNapis();
		izbrisiProEle("stu");
		izbrisiAdmEle("stu");
		izbrisiGueEle("stu");
	}
	else if(stat.status == "profesor"){
		spremeniNapis();
		izbrisiStuEle("pro");
		izbrisiAdmEle("pro");
		izbrisiGueEle("pro");
	}
	else if(stat.status == "administrator"){
		spremeniNapis();
		izbrisiStuEle("adm");
		izbrisiProEle("adm");
		izbrisiGueEle("adm");
	}
}

$(function(){
	preveriStatus();
});