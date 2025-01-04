let firstRandomNumber = Math.floor((Math.random()) * 6) + 1;
let secondRandomNumber = Math.floor((Math.random()) * 6) + 1;

if (firstRandomNumber > secondRandomNumber) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector("h1").textContent = "Player 2 wins!";
} else {
    document.querySelector("h1").textContent = "NO one wins!";
}

switch (firstRandomNumber) {
    case 1:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice1.png");
        break;
   case 2:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice3.png");
        break;    
    case 4:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".Player1 img").setAttribute("src", "images/dice6.png");
        break;
}
switch (secondRandomNumber) {
    case 1:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice1.png");
        break;
   case 2:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice3.png");
        break;    
    case 4:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".Player2 img").setAttribute("src", "images/dice6.png");
        break;
}
