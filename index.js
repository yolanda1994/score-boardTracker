let scoreHome = 0
let scoreGuest = 0 
let homeScore = document.getElementById("home-goal")
let guestScore = document.getElementById("guest-goal")
let startOver = document.getElementById("reset-btn")

function homePoint1() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function homePoint2() {
    scoreHome +=2
    homeScore.textContent = scoreHome
    
}

function homePoint3() {
     scoreHome +=3
    homeScore.textContent = scoreHome
}

function guestPoint1() {
   scoreGuest +=1
   guestScore.textContent = scoreGuest
}

function guestPoint2() {
   scoreGuest +=2
   guestScore.textContent = scoreGuest
}

function guestPoint3() {
   scoreGuest +=3
   guestScore.textContent = scoreGuest
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    homeScore.textContent = scoreHome
    guestScore.textContent = scoreGuest
    
}