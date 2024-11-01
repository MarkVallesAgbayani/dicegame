function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6 +  1);
    let randomNumber2 = Math.floor(Math.random() * 6 +  1);

    document.getElementById("image1").setAttribute("src", "./image/dice" + randomNumber1 + ".png");
    document.getElementById("image2").setAttribute("src", "./image/dice" + randomNumber2 + ".png");

    let heading = document.getElementById("h1");


    if (randomNumber1 > randomNumber2){
        heading.textContent = "Player 1 Wins 🚩";
    }
    else if (randomNumber2 > randomNumber1){
        heading.textContent = "Player 2 Wins 🚩";
    }
    else{
        heading.textContent = "It's a tie 🤝 ";
    }

}