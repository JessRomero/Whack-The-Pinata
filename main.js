const win = document.getElementById("win")
const lose = document.getElementById("lose")
const alphabet = document.getElementById("alphabet")
const randomWordEl = document.getElementById("randomWord");
const livesDiv = document.getElementById("lives")


let lives = 4;

const decreaseLives = function () {
    lives--
    livesDiv.textContent = `Lives = ${lives}`
}

function generateButtons() {
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

const word = "CAKE"
const renderArr = []
for (let i = 0; i < word.length; i++) {
    renderArr.push("_")
}
functionRender(renderArr.join(" "))

function recordGuess() {
    let pickLetter
    $("#alphabet").on("click", "button", function (e) {
        pickLetter = e.target.id
        $(this).fadeOut(1000, function () {
            $(this).remove();
        })

        const isIncluded = word.includes(pickLetter);
        if (isIncluded) {
            const idxArr = []
            for (let i = 0; i < word.length; i++) {
                if (word[i] === pickLetter) {
                    idxArr.push(i)
                }
            }

            renderArr.forEach(function (empty, idx) {
                if (idxArr.includes(idx)) {
                    renderArr[idx] = pickLetter;
                }
            })
            functionRender(renderArr.join(" "));
            checkWin();
        } else {
            decreaseLives();
            checkWin();
        }
    });
    return pickLetter;
}

recordGuess();

function functionRender(string) {
    randomWordEl.textContent = string
}

function checkWin() {
    if (lives === 0 && word != renderArr.join("")) {
        document.getElementById("winLose").innerHTML = "YOU LOSE!";
    } else if (renderArr.join("") === word) {
        document.getElementById("winLose").innerHTML = "YOU WIN!";
        document.getElementById("pinata").style.display = "none";
        document.getElementById("broken").style.display = "block";
    }
}
checkWin();