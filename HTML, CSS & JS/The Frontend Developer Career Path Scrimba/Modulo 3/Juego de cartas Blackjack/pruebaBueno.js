let sum = 0;
let hasBlackJack = false;
let isAlive = false
let message = ""
let cardsArray = []
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.querySelector("#cardsEl")
let puntaje = document.getElementById("puntaje")
let player = {
    nombre:"Michell Pérez",
    puntos: 200
}
puntaje.textContent = player.nombre + " " + "tienes" + " " + player.puntos + " " + "puntos" + "."


function getRandomCards (){ 
    let randomNumber = Math.floor((Math.random () *13) + 1) 
    if   (randomNumber === 1){
        return 11
    }
     else if (randomNumber > 10){
         return 10
     }
     else {
         return randomNumber
     }
}

function startGame (){
    let firstCard = getRandomCards ();
    let secondCard = getRandomCards ();
    sum = firstCard + secondCard
    isAlive = true
    cardsArray = [firstCard, secondCard]
    renderGame()
};



function renderGame(){
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cardsArray.length; i ++){
        cardsEl.textContent +=  cardsArray[i] +" "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new cart?"
    }
    else if (sum === 21) {
        hasBlackJack = true
        message = "You have a blackjack¡"
    }
    else {
        isAlive = false
        message = "You are out"
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

};
// FIJATE CÓMO SI PUEDE HABER LOOPS Y CONDICIONALES DENTRO DE UNA FUNCIón



function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let newC = getRandomCards () ;
        cardsArray.push(newC)
        sum += newC
        renderGame()  
    }
   
};
