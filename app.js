let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let reserBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText = "O";
            box.style.color="#1b4332";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#1e6091";
            turnO=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}
const showWinner =(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const gameDraw=()=>{
    msg.innerText = "Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reserBtn.addEventListener("click",resetGame);