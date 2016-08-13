var wordSelection = ['RED', 'GREEN', 'BLUE'];
var word = wordSelection[Math.floor(Math.random() * wordSelection.length)];

/*
for (var i = 0; i < wordSelection.length; i++){

	console.log(wordSelection[i]);

}*/

console.log(word);

/*var res = word.split("");

console.log(res);*/

document.onkeyup = function(event) {

	var guess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log(guess)


	String.prototype.replaceAt=function(index, character) {
    	return this.substr(0, index) + character + this.substr(index+character.length);
	}

	for (var i = 0; i < word.length; i++) {

		var = ""

		var l = word.indexOf(guess);
		console.log(l);

		if(l > -1){
			word = word.replaceAt(l, "#");
			console.log(word);
			//var word = replace(l,"k");
			//replaceStr
			//return word.replace("E", "#");
			//console.log(word);*/
		} else if(l = -1) {
			console.log('No letter found');
		}
	}
//	if (letter == correctLetter) {

//	}

}







