


function validate (form) {
	var message = false;

	var pass = document.getElementById("pass").value;
	var passRepeat = document.getElementById("pass-repeat").value;
	var text = document.getElementById("area").value;
	var email = document.getElementById("email").value;

	if (!email) {
		message = "Write Email Please";
	}else if (!pass) {
		message = "Write Password Please";
	}else if (!passRepeat || pass !== passRepeat) {
		message = "Repeat Password Please";
	}else if(!text) {
		message = "Write Comment Please";
	}


	if(message) 
		alert(message);
}