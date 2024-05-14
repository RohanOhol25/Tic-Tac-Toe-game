let boxes = document.querySelectorAll(".box");
let Winner = document.getElementById("result");
let turn = document.getElementById("playerturn");
let startGameMsg = document.getElementById("stratgame");
let recent = document.getElementById('recent');
let turnconatiner = document.querySelector('#container');
let turnO = true;
let Patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 3, 0],
    [6, 4, 2]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            startGameMsg.style.display = "none";
            if (turnO) {
                box.innerHTML = "O";
                turn.innerHTML = "X";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
                turn.innerHTML = "O";
            }
            box.disabled = true;
            checkWinner();
        }
    });
});


let checkWinner = () => {
    let draw = true;
    for (pattern of Patterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                Winner.innerHTML = `Congratulations! Winner is ${pos1}`;
                turnconatiner.style.display="none";
                disableButtons();
                return;
            }
        } else {
            draw = false;
        }
    }
    if (draw) {
        Winner.innerHTML = "It's a draw!";
        turnconatiner.style.display="none";
        disableButtons();
    }
};
let disableButtons = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });

    recent.style.display = "block";
};


 recent.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    Winner.innerHTML = ""; 
    turnconatiner.style.display="block";
    turn.innerHTML = "O"; 
    startGameMsg.style.display = "block";
    recent.style.display = "none"; 
    turnO = true; 
});

