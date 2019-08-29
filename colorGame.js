var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =  document.getElementById("colorDisplay");
var clickedColor = 0;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");

//START GAME IN MEDIUM MODE 6 Squares
squares[6].style.display = "none";
squares[7].style.display = "none";
squares[8].style.display = "none";
mediumBtn.classList.add("selected");
colorDisplay.textContent = pickedColor;
h1.style.backgroundColor = "steelblue";

//EASY MODE BUTTON 3 Squares
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for( var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

//MEDIUM MODE BUTTON 6 Squares
mediumBtn.addEventListener("click", function(){
    mediumBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    numberOfSquares = 6;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for( var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});
//HARD MODE BUTTON  9 Squares
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for( var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    }
});



//NEW COLORS OR PLAY AGAIN? BUTTON
resetButton.addEventListener("click", function(){
    //change h1 to default color
    h1.style.backgroundColor = "steelblue";
    //change text content
    this.textContent = "New Colors"
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    messageDisplay.textContent = ""
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
});

for(var i = 0; i < squares.length; i++)
{   //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i< squares.length; i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an arrray
    var arr = [];
    //repeat action num times
    for(var i = 0; i < num; i++)
    {
        
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor()
{
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random()*256)
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random()*256)
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}