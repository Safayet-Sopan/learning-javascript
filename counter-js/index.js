//setting up variables for each buttons.
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const mainCounter = document.getElementById("mainCounter");

//count variable at 0
let count = 0;

//functions to the buttons
increase.onclick = function() {
    count++;
    mainCounter.textContent = count;
}

decrease.onclick = function() {
    count--;
    mainCounter.textContent = count;
}

reset.onclick = function() {
    count = 0;
    mainCounter.textContent = count;
}