// function BellBoy (name, age, hasWorkPermit, languages) {
// 	this.name = name;
// 	this.age = age;
// 	this.hasWorkPermit = hasWorkPermit;
// 	this.languages = languages;
// 	this.moveSuitcase = function () {
// 		alert("May I take your suitcase?");
// 		pickUpSuitcase();
// 		move();
// 	};
// }

// var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", function () {
		// this.style.color = "white";
		buttonPress = this.innerHTML;
		makeSound(buttonPress);
		buttonAnimation(buttonPress);
	});
}

document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

function makeSound(buttonPress) {
	switch (buttonPress) {
		case "w":
			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		default:
			console.log(buttonPress);
			break;
	}
}



