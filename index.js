//declaring the global variables

let homePoints = 0;
let guestPoints = 0; 
let homeEl = document.querySelector('#home-points')
let guestEl =document.querySelector('#guest-points')
// functions for adding points to the scoreboard

//Home buttons.

function addOnePoints() {
    homePoints += 1
    homeEl.innerHTML = homePoints
}

function addTwoPoints() {
    homePoints += 2
    homeEl.innerHTML = homePoints
}


function addThreePoints() {
    homePoints += 3
    homeEl.innerHTML = homePoints

}

//Guest buttons.

function addOne() {
    guestPoints += 1
    guestEl.innerHTML = guestPoints
}

function addTwo() {
    guestPoints += 2
    guestEl.innerHTML = guestPoints
}


function addThree() {
    guestPoints += 3
    guestEl.innerHTML = guestPoints

}

// new game btn function.

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeEl.innerHTML = 0
    guestEl.innerHTML = 0
}





