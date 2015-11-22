var stD = 4;

var domace = ["Domača1","Domača2","Domača3"];

var podatkiOcen = [["63130075" , 10, 9, 8],
["63130076" , 10, 5, 3],
["63130077" , 6, 9, 8],
["63130078" , 9, 9, 9],
["63130079" , 7, 9, 8],
["63130080" , 6, 9, 6],
["63130081" , 10, 10, 10]
];

var edit;
var data;

function narisiPito(){
	$("#pie").html("");
	console.log(data)
	var width = 200,
		height = 200,
		radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00","#df7c30","#7a6540","#3a7745","#009999"]);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { return d.population; });

	var svg = d3.select("#pie").append("svg")
		.attr("width", width)
		.attr("height", height)
	.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	//console.log("yay")
		//console.log(data);
	data.forEach(function(d) {
		d.population = +d.population;
	});

	var g = svg.selectAll(".arc")
		.data(pie(data))
		.enter().append("g")
		.attr("class", "arc");

	g.append("path")
		.attr("d", arc)
		.style("fill", function(d) { return color(d.data.age); });

	g.append("text")
		.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		.attr("dy", ".35em")
		.style("text-anchor", "middle")
		.text(function(d) { return d.data.age; });

	
}

//podatki za graf pite
function makeData(a){
	data = [];
	var delay = 0;
	for(var i=0;i<11;i++){
		if(a[i] == 0){
			delay = delay + 1;
		}
		else{
			data[i-delay]={"age": i,"population": a[i]}
		}
	}
}

//kopira besedilo v prostor za spreminjanje
function odpriB(){
	$("#spremeniB").fadeIn(250);
	if($(".nacin").val() == 1){
		var find = '\t';
		var re = new RegExp(find, 'g');
		$("#opisB textarea").val($("#opisPB").text().replace(re,""));
		find = '\n';
		re = new RegExp(find, 'g');
		$("#opisB textarea").val($("#opisB textarea").val().replace(re,""));
	}
	else{
		$("#opisB textarea").val($("#opisPB").html());
	}
}

function odpriDG(){
	$("#dodajG").fadeIn(250);
	if($(".nacin2").val() == 1){
		$("#dodajanje").html("<input type=\"file\">");
	}
	else{
		$("#dodajanje").html("<input type=\"text\">");
		$("#dodajanje input").css("width","100%")
	}
}

//skrije dodajanje/odstranjevanje/spremembe
function skrijDoOd(){
	$(this).parent().parent().fadeOut(250);
}

//spreminja is html v text in obratno
function htmlText(){
	$("#spremeniB").fadeIn(250);
	if($(".nacin").val() == 1){
		var find = '\t';
		var re = new RegExp(find, 'g');
		$("#opisB textarea").val($("#opisPB").text().replace(re,""));
		find = '\n';
		re = new RegExp(find, 'g');
		$("#opisB textarea").val($("#opisB textarea").val().replace(re,""));
	}
	else{
		$("#opisB textarea").val($("#opisPB").html());
	}
}

//doda spremembe
function spremeniB(){
	if($(".nacin").val() == 1){
		$("#opisPB").text($("#opisB textarea").val());
	}
	else{
		var stringOfHtml = $("#opisB textarea").val();
		var html2 = $.parseHTML(stringOfHtml);
		$("#opisPB").html(html2);
	}
}

function spremeniInput(){
	if($(".nacin2").val() == 1){
		$("#dodajanje").html("<input type=\"file\">");
	}
	else{
		$("#dodajanje").html("<input type=\"text\">");
		$("#dodajanje input").css("width","100%")
	}
}

function dodajG(){
	if($("#dodajanje input").val() == ""){
		$("#warning").css("color","#ff0000");
		$("#warning").text("*prosim izberite datoteko ali povezavo");
	}
	else{
		$("#warning").text("");
		if($("#opis").val()==""){
			$("#G").append("<div><a href=\"#\">"+ $("#dodajanje input").val() +"</a></div>");
		}
		else{
			$("#G").append("<span>"+$("#opis").val()+"</span><br><div><a href=\"#\">"+ $("#dodajanje input").val() +"</a></div>");
		}
	}
}

function odpriOG(){
	var htmlstring = "";
	$("#G a").each(function(){
		htmlstring = htmlstring +"<li>"+$(this).text()+"<input type=\"checkbox\"></li>"
	});
	htmlstring = "<ul>"+ htmlstring +"</ul>";
	$("#list").html(htmlstring);
	$("#odstraniG").fadeIn(250);
}

// odstrani označeno gradivo
function odstraniG(){
	$("#odstraniG input").each(function(){
		if($(this).prop("checked")){
			var pred = $(this).parent().text();
			$(this).parent().remove();
			$("#G a").each(function(){
				if($(this).text() == pred){
					$(this).parent().remove();
				}
			});
		}
	});
}

//prkaže GUI za odstranjevanje domačih nalog
function odpriOD(){
	var htmlstring = "";
	$("#D .but").each(function(){
		htmlstring = htmlstring +"<li>"+$(this).text()+"<input type=\"checkbox\"></li>"
	});
	htmlstring = "<ul>"+ htmlstring +"</ul>";
	$("#list2").html(htmlstring);
	$("#odstraniD").fadeIn(250);
}

//odstrani označene naloge
function odstraniD(){
	$("#odstraniD input").each(function(){
		if($(this).prop("checked")){
			var pred = $(this).parent().text();
			$(this).parent().remove();
			$("#D .but").each(function(){
				if($(this).text() == pred){
					$(this).remove();
				}
			});
		}
	});
}

// doda domačo nalogo
function dodajD(){
	$("#D").append("<div class=\"but domaca\"> Domača"+stD+"</div>");
	stD++;
}

//prikeže za oddajo
function odpriO(){
	$("#oddajDo").fadeIn(250);
}

//skrije oddajo
function skrijDoOd2(){
	$("#oddajDo").fadeOut(250);
}

//prikaže ocene studentu
function prikaziOcene(){
	var stringHtml2 = "<table class=\"table table-striped table-hover\"><thead><tr><td><b>Domace</b></td><td><b>Ocene</b></td></tr></thead><tbody>";
	var skupno = 0;
	for(var i=1;i<podatkiOcen[0].length;i++){
		stringHtml2 = stringHtml2 + "<tr><td>"+domace[i-1]+"</td><td>"+podatkiOcen[0][i]+"</td></tr>";
		skupno = skupno + podatkiOcen[0][i];
	}
	stringHtml2 = stringHtml2 + "</tbody><tfoot><tr><td><b>Povprečje</b></td><td>"+skupno/podatkiOcen[0].length+"</td></tr></tfoot></table>"
	$("#list3").html(stringHtml2);
	$("#oceneO").fadeIn(250);
}

//spreminjeanje ocen
function urediOceno(){
	if(edit != null){
		var tmp = parseInt(edit.find("input").val());
		if(tmp > 10){
			tmp = 10;
		}
		else if(tmp < 0){
			tmp = 0;
		}
		else if(tmp == null){
			tmp = 0;
		}
		else if(tmp.toString() == "NaN"){
			tmp = 0;
		}
		var pov = 0;
		edit.html(tmp);
		edit.click(urediOceno);
		//
		var datatomake=[];
		for(var i=0;i<11;i++){
			datatomake[i]=0;
		}
		//
		$("#list4 .edit").each(function(){
			pov = pov + parseInt($(this).text());
			//
			datatomake[parseInt($(this).text())] = datatomake[parseInt($(this).text())] + 1;
			//
		});
		//
		makeData(datatomake);
		narisiPito();
		//
		$(".pov").text(pov/podatkiOcen.length);
	}
	edit=$(this);
	var tmp = $(this).text();
	$(this).off();
	$(this).html("<input type=\"text\">");
	$(this).find("input").text(tmp);
	$(this).find("input").val(tmp);
	
}

//pregled ocen za določeno domačo nalog
function dajOcene(){
	var indexD = parseInt($(".dom").val());
	var stringHtml2 = "<table class=\"table table-striped table-hover\"><thead><tr><td><b>Vpisna st.</b></td><td><b>Ocene</b></td></tr></thead><tbody>";
	var skupno = 0;
	
	//
	var datatomake=[];
	for(var i=0;i<11;i++){
		datatomake[i]=0;
	}
	//
	
	for(var i=0;i<podatkiOcen.length;i++){
		stringHtml2 = stringHtml2 + "<tr><td>"+podatkiOcen[i][0]+"</td><td class=\"edit\">"+podatkiOcen[i][indexD+1]+"</td></tr>";
		skupno = skupno + podatkiOcen[i][indexD+1];
		//
		datatomake[podatkiOcen[i][indexD+1]] = datatomake[podatkiOcen[i][indexD+1]] + 1;
		//
	}
	//
	makeData(datatomake);
	narisiPito();
	//
	stringHtml2 = stringHtml2 + "</tbody><tfoot><tr><td><b>Povprečje</b></td><td class=\"pov\">"+skupno/podatkiOcen.length+"</td></tr></tfoot></table>"
	$("#list4").html(stringHtml2);
	$("#list4 .edit").click(urediOceno);
	$("#oceniO").fadeIn(250);
}

// doda dogodke
function addPredmetListeners(){
	$("#SB").click(odpriB);
	$(".close").click(skrijDoOd);
	$("#spremeniButB").click(spremeniB);
	$(".nacin").change(htmlText);
	$("#DG").click(odpriDG);
	$(".nacin2").change(spremeniInput);
	$("#dodajButG").click(dodajG)
	$("#OG").click(odpriOG);
	$("#odstraniButG").click(odstraniG);
	$("#OD").click(odpriOD);
	$("#odstraniButD").click(odstraniD);
	$("#DD").click(dodajD);
	if(stat.status=="student"){
		$("#D .but").click(odpriO);
		$("#oddajD").click(skrijDoOd2);
		$("#ocene").click(prikaziOcene);
	}
	$("#oceni").click(dajOcene);
	$(".dom").change(dajOcene);
	$("#potrdi").click(skrijOce)
};

function skrijOce(){
	$("#oceniO").fadeOut(250);
}

$(function(){
	addPredmetListeners();
});