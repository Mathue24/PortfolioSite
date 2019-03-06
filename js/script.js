function doggoFunction(doggo, first, second) {
	var doggo = document.getElementById(doggo);
	var first = document.getElementById(first);
	var second = document.getElementById(second);
	console.log("First:"+doggo);
	parseInt
	if (doggo.style.display === "block") {
		doggo.style.display = "none";
	} else {
		doggo.style.display = "block";
		first.style.display = "none";
		second.style.display = "none";
	}
}