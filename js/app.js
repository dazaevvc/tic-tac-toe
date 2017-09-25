console.log("linked!")

// wait for the DOM to finish loading
$(document).ready(function() {

//Hello!
  alert("Hi! Welcome to my Tic Tac Toe Game, this site is still under construction however turn up the volume and enjoy!");

//Variable
  var playerNameOne = prompt("Enter your name Player One");
  var playerNameTwo = prompt("Enter your name Player Two");
  var boxes = document.querySelectorAll(".box")
  var playerOne = true;
  var resetButton = document.querySelector(".resetButton");
  var playerOneGame = [];
  var playerTwoGame = [];
  var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  var chosenBoxes = {
    playerNameOne: [],
    playerNameTwo: []
  }

//Background Changes Color With Every Click
  function backgroundRandomColors(){
    var body = document.querySelector('body');

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = Math.random();

    body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
};

//Function behind every player's move
  boxes.forEach(function (thisBox){
    thisBox.addEventListener("click", function unclickableBox(){
      console.log("you clicked a box");
      if (playerOne === true){
        backgroundRandomColors();
        thisBox.style.backgroundImage = "url(\"http://www.freeiconspng.com/uploads/x-png-13.png\")"
        // thisBox.innerText = "X"
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("h1").innerText = playerNameTwo + ", your move!";
        playerOne = false;
        this.removeEventListener("click", unclickableBox);
      } else {
        // thisBox.innerText = "O"
        backgroundRandomColors();
        thisBox.style.backgroundImage = "url(\"https://orig00.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png\")"
        document.querySelector("h1").style.color = "#d70909";
        document.querySelector("h1").innerText = playerNameOne + ", your move!";
        playerOne = true;
        this.removeEventListener("click", unclickableBox);
      }
    })
  });

//Reset Button
  function reset(){
    console.log("hola we");
    location.reload();
	};

  resetButton.addEventListener("click", function(){
    reset();
  });



//REALLY tried to make it store the values to compare it to the winning arrays :(
  for (var i = 0; i < winCombinations.length; i++) {
    if (winCombinations[i] == playerOneGame[i]){
      console.log(playerNameOne + " won!");
    } else if (winCombinations[i] == playerTwoGame) {
      console.log(playerNameTwo + " won!");
    }
    else {
      console.log("Draw");
    }
  };

});
