/*----- constants -----*/

// const win = document.querySelector("win")
// const lose = document.querySelector("lose")
// const alphabet = document.querySelector("alphabet")
// const notifications = document.querySelector("notifications")
// const results = document.querySelector("results")



/*----- app's state (variables) -----*/

let answer = "cake";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let correct = null;




/*----- cached element references -----*/

/*----- event listeners -----*/
// window.addEventListener("resize", resizeGame, false); //for background resizing //
// window.addEventListener("orientationchange", resizeGame, false); // for background resizing //


/*----- functions -----*/



/* Background resizing 
function resizeGame() {
    let gameArea = document.getElementById("gameArea");
    let ratio = 4 / 3;
    let newWidth = window.innerHeight;
    let newHeight = window.innerHeight;
    let newRatio = newWidth / newHeight;

    if (newRation > ratio) {
        newWidth = newHeight * ratio;
        gameArea.style.height = newHeight + "px";
        gameArea.style.width = newWidth + "px";
    } else {
       newHeight = newWidth / ratio;
       gameArea.style.width = newWidth + "px";
       gameArea.style.height = newHeight + "px"; 
    }

    gameArea.style.marginTop = (-newHeight / 2) + "px";
    gameArea.style.marginLeft = (-newWidth / 2) + "px";

    let canvas = document.getElementById("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
}
*/


function correctAnswer () {
    answer = "cake";
}


function generateButtons() { // lets code by DRY //
    let buttons = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter =>
        `
            <button
                class="btn"
                id="` + letter + `"
                onclick="guess("` + letter + `)"
            >
                ` + letter + `
            </button>
        `).join("");

    document.getElementById("alphabet").innerHTML = buttons;
}

generateButtons();


function guess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute("disabled", true);

    if (answer.indexOf(chosenLetter) >= 0) {
        answer();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        wrong++;
        updateWrong();
        checkIfGameLost();
        brokenPinata();
    }
}





$("#alphabet").on('click', 'button', function(e) {
    $(this).fadeOut(1000, function() {
        $(this).remove();
    })
  });
  
