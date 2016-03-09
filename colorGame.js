var numSqaures = 6;
var colors = generateRandomColors(numSqaures);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easyButton");
//var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSqaures = 3;
		}else{
			numSqaures = 6;
		}
	reset();
	});
}	


//easyButton.addEventListener("click", function(){
//	hardButton.classList.remove("selected");
//	easyButton.classList.add("selected");
//	numSqaures = 3;
//	colors = generateRandomColors(numSqaures);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for(var i=0; i<squares.length; i++){
//		if(colors[i]){
//			squares[i].style.background = colors[i];
//		}else{
//			squares[i].style.display = "none";
//		}
//	}
//});

//hardButton.addEventListener("click", function(){
//	hardButton.classList.add("selected");
//	easyButton.classList.remove("selected");
//	numSqaures = 6;
//	colors = generateRandomColors(numSqaures);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for(var i=0; i<squares.length; i++){
//		squares[i].style.background = colors[i];
//		squares[i].style.display = "block";
//	}
//});

resetButton.addEventListener("click", function(){
	reset();
//	messageDisplay.textContent = "";
//	this.textContent = "New Colors";
	//generate all new colors
//	colors = generateRandomColors(numSqaures);
	//pick a new random number from the array
//	pickedColor = pickColor();
	//change colorDisplay to match picked color
//	colorDisplay.textContent = pickedColor;
	//change color of squares
//	for(var i = 0; i < squares.length; i++){
//		squares[i].style.background = colors[i];
//	}
//	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	//add initial color to squares
	squares[i].style.background = colors[i];

	//add event listeners to squares
	squares[i].addEventListener("click", function(){

	//get color of clicked square
	var clickedColor = this.style.background;
	//compare color of square to pickedColor
	if(clickedColor === pickedColor)
	{
		resetButton.textContent = "Play Again?"
		h1.style.background = clickedColor;
		changeColors(clickedColor);
		messageDisplay.textContent = "Correct!";
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

function reset(){
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(numSqaures);
	//pick a new random number from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#00e64d";
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
	//change each color to match the correct one.
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr

}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
