function computerP() {
    randomNum = Math.random()
    return randomNum>0.67?'rock':randomNum>0.33?'paper':'scissors';
}

let comp =0; player=0;

function playRound(e) {
    cmp = computerP();
    pl = `${e.target.getAttribute('class')}`.toString();
    console.log(`Player: ${player}      Computer: ${comp}`);
    if(pl===cmp){
        console.log(`Draw!! Both Computer and you had ${pl.toUpperCase()}`);
        return;
    }
    if(pl==='rock'){
        console.log(cmp==='paper'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`);
        cmp==='paper'?comp++:player++;
        return;
    }
    if(pl==='paper'){
        console.log(cmp==='scissors'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`);
        cmp==='scissors'?comp++:player++;
        return;
    }
    if(pl==='scissors'){
        console.log(cmp==='rock'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`);
        cmp==='rock'?comp++:player++;
        return;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// function play() {
//     let i = 0; comp=0; player=0;
//     while(comp!==5||player!==5){
//         playerP = prompt("Enter your move:").toLowerCase();
//         playRound(playerP);
//         console.log(`Player: ${player}      Computer: ${comp}`);
//     }
//     console.log(`FINAL SCORE:\nPlayer: ${player}      Computer: ${comp}`);
// }