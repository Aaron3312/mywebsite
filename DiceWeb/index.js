var randomNum1 = 1 + Math.floor(Math.random() * 6);
var randomNum2 = 1 + Math.floor(Math.random() * 6);
document
	.querySelector(".img1")
	.setAttribute("src", "images/dice" + randomNum1 + ".png");
document
	.querySelector(".img2")
	.setAttribute("src", "images/dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩 Player 1 gana!";
}
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 gana! 🚩";
}
else {
    document.querySelector("h1").textContent = "Empate!";
}