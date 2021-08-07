let getMeters = document.getElementById("Meters"),
	getInches = document.getElementById("inches")
	Button 	  = document.getElementById("Get");

let Meters = 0, Inches = 0;

function getData(){
	Meters = getMeters.value;
	Inches = Meters * 39.37;

	getInches.value = Inches.toFixed(1);
}

Button.onclick = getData;