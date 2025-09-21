let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

let player = {
    name : "tingu",
    money:123
}

let playerEl= document.getElementById("player-el")
playerEl.textContent= player.name + ":$" + player.money

function randomcard(){
    let random = Math.floor(Math.random()*13)+1
    if (random >10){
        return 10
    }
    else if (random ===1){
        return 11
    }
    else {
        return random
    }
}

function startgame(){
    isalive= true
    let firstcard = randomcard()
    let secondcard = randomcard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
    rendergame()
}

function rendergame(){
    cardEl.textContent= "cards:" 
    for (let i=0 ; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum :" + sum
    if (sum<=20){
        message = "do you want to draw a card"
    }
    else if (sum === 21){
        message = "you won a blackjack"
        hasblackjack = true
    }
    else {
        message = "you lost"
        isalive = false
    }
    messageEl.textContent = message
    
}

function newcard(){
    if(isalive===true && hasblackjack===false){
        let card = randomcard()
        sum += card
        cards.push(card)
        console.log(card)
        rendergame()

    }
    
}