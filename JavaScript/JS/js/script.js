						//JQuery//


//КАК СДЕЛАТЬ КНОПКУ РАЗНЫМИ СПОСОБАМИ, МЕТОДЫ SHOW / HIDE //

//$(function(){

/*	function toggle(obj){
		obj
			.siblings("button")
				.removeAttr("disabled")
			.end()
				.attr("disabled", "disabled")
	}

	$("#hide").on("click", function(){
		$("#box").hide();
		toggle($(this));
		})

	$("#show").on("click", function(){
		$("#box").show();
		toggle($(this));
	})*/

/*	$("#box").on("click", function(){
		$("#toggle").trigger("click");
		$(this).off("click.hello");
	})

	$("#toggle").on("click.hello", function(){
		console.log("HELLO")
	})

	$("#toggle").on("click.display", {x:10, y:20},function(e){
		console.log(e.data.x, e.data.y);
		var box = $("#box");
		box.toggle();
		if(box.is(":visible")){
			$(this).text("Показать");
		}else{
			$(this).text("Скрыть");
		}
	}) 
})*/






				//ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ//


/*$("article").append("<h2>Добавили строку</h2>");
$("<h2></h2>", {
	text: "Добавили строку",
	class: "myClass"
}).insertAfter("h1");
*/

//$("p").eq(0).after($("h1"))
/*$("span.sp").each(function(){
	//$(this).closest("p").prepend("Hello")
	$("<blockquote></blockquote>", {
		class: "sp",
		text: $(this).text()
	}).prependTo($(this).closest("p"));
})*/

/*
var h3 = $("h3").map(function(i, obj){
	return $(obj).text();
})
console.log(h3);

$("ul").html(
	$.map(h3, function(obj, i){
		return "<li><a href='#"+h3[i]+"'>Раздел "+(i+1)+"</a></li>"
	}).join("")
);*/





			//АНИМАЦИЯ JQUERY//

/*$('#toggle').click(function(){
	if ($('#box').is(':visible')) {
		$('#box').slideUp("slow");
	}else{
		$('#box').slideDown("fast");
	}
})
*/


/*$('#toggle').click(function(){
	$('#box').fadeToggle();
})*/



var content = $("div.content");
var winW = $(window).width() / 2 - content.outerWidth() / 2;
var winH = $(window).height() / 2 - content.outerHeight() / 2;

$("button").on("click", function(){
	content
		.animate(
			{"left": winW, "position": "absolute"}
		)
		.animate(
			{"top": winH},
			{duration: 200, queue: false}
		);
/*	content.animate({
		"font-size": "+=5",
		"width": "+=200"
	}, 2000, "swing", function(){console.log("stop")
	})*/

/*	content.animate(
	{"font-size": "+=5"},
	{
		duration: 500,
		complete: function(){console.log("stop")},
		step: function(){console.log($(this).css("font-size"))}
	});*/


/*content
	.animate(
		{"font-size": "+=5"},
		{duration: 500}
	)
	.animate(		
		{"top": 500},
		{duration: 2000, queue: false}
		)*/

})
