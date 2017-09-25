console.log("linked!")
var playerOneGame = [];
var playerTwoGame = [];


// wait for the DOM to finish loading

//Hello!
  alert("Hi! Welcome to my Tic Tac Toe Game, this site is still under construction however turn up the volume and enjoy!");

//Variable
  var xPlayer = "url('http://www.freeiconspng.com/uploads/x-png-13.png')";
  var oPlayer = "url('https://orig00.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png')";
  var playerNameOne = prompt("Enter your name Player One");
  var playerNameTwo = prompt("Enter your name Player Two");
  var boxes = [...document.querySelectorAll(".box")];
  var playerOne = true;
  var resetButton = document.querySelector(".resetButton");
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
  var body = document.querySelector('body');
  var winningBackground = "url('https://media.tenor.com/images/0565d3b4a90ce5c6c6a938df82c14049/tenor.gif')";

//Background Changes Color With Every Click
  function backgroundRandomColors(){

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
        thisBox.style.backgroundImage = xPlayer;
        playerOneGame.push(boxes.indexOf(thisBox));
        if(hasWon(playerOneGame)){
          body.style.background = winningBackground;
          alert(`Congrats ${playerNameOne} you win!`)
        }
        // thisBox.innerText = "X"
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("h1").innerText = playerNameTwo + ", your move!";
        playerOne = false;
        this.removeEventListener("click", unclickableBox);
      } else {
        // thisBox.innerText = "O"
        backgroundRandomColors();
        thisBox.style.backgroundImage = oPlayer;
        playerTwoGame.push(boxes.indexOf(thisBox));
        if(hasWon(playerTwoGame)){
          body.style.background = winningBackground;
          alert(`Congrats ${playerNameTwo} you win!` )
        }
        document.querySelector("h1").style.color = "#d70909";
        document.querySelector("h1").innerText = playerNameOne + ", your move!";
        playerOne = true;
        this.removeEventListener("click", unclickableBox);
      }
    })
  });

  function hasWon(player){
    for (var i = 0; i < winCombinations.length; i++) {
      var current_comb = winCombinations[i];
      if(player.includes(current_comb[0]) &&
        player.includes(current_comb[1]) &&
        player.includes(current_comb[2])
      ){
        return true;
      }
    }
    return false;
  };

//Reset Button
  function reset(){
    location.reload();
	};

  resetButton.addEventListener("click", function(){
    reset();
  });
