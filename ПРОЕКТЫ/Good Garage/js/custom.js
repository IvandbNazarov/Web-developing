
console.log("CLICK");


$(".navintro").hide();

$(".nav").on("click", function(){
	$(".navintro").toggle();
});

$(".social").hide();

$(".contact li h2").on("click", function(){
	$(".social").toggle()
});
