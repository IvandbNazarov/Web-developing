
console.log("CLICK");

$("button").on("click", function(event){
	event.preventDefault()
})

$(".navintro").hide();

$(".nav").on("click", function(){
	$(".navintro").toggle();
});

$(".registrHide").hide();

$(".registrShow").on("click", function(){
	$(".registrHide").toggle()
});

$(".social").hide();

$(".contact li h2").on("click", function(){
	$(".social").toggle()
});

