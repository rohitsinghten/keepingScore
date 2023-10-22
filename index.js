let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
let select = document.querySelector("#playTo");

let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let reset = document.querySelector("#reset");

let score1 = 0;
let score2 = 0;

let isGameOver = false;

let max = 3;


p1Button.addEventListener("click",function(){
    if(!isGameOver){
        if(score1 != max){
            score1++;
            p1Score.textContent = score1;
            if(score1 == max){
                p1Score.classList.add("winner")
                p2Score.classList.add("loser")
                isGameOver = true; 
                p1Button.disabled = true;
                p2Button.disabled = true;
            }
        }else{
            p1Score.classList.add("winner")
            p2Score.classList.add("loser")
            isGameOver = true;           
        }

    }
})

p2Button.addEventListener("click",function(){
    if(!isGameOver){
        if(score2 != max){
            score2++;
            p2Score.textContent = score2;
            if(score2 == max){
                p1Score.classList.add("loser")
                p2Score.classList.add("winner")
                isGameOver = true;
                p1Button.disabled = true;
                p2Button.disabled = true;
            }
        }else{
            p1Score.classList.add("loser")
            p2Score.classList.add("winner")
            isGameOver = true;
        }
        }

    
});

reset.addEventListener("click",resetGame)

select.addEventListener("change",function(){
    let x = this.value;
    max = x;
    resetGame();
})

function resetGame(){
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1Score.textContent = score1;
    p2Score.textContent = score2;
    p1Score.classList.remove("loser", "winner")
    p2Score.classList.remove("winner" , "loser")
    p1Button.disabled = false;
    p2Button.disabled = false;
}
