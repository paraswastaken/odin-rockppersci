function computerP() {
    randomNum = Math.random()
    return randomNum>0.67?'rock':randomNum>0.33?'paper':'scissors';
}

let comp =0; player=0;

function playRound(e) {
    cmp = computerP();
    cmpsym = document.querySelector('#'+cmp).getAttribute('data-symbol');
    pl = `${e.target.getAttribute('id')}`.toString();
    console.log(`Player: ${player}      Computer: ${comp}`);
    if(pl===cmp){
        res.textContent = `Draw!! Both Computer and you had ${pl.toUpperCase()}`;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        return;
    }
    if(pl==='rock'){
        res.textContent = cmp==='paper'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='paper'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        return;
    }
    if(pl==='paper'){
        res.textContent = cmp==='scissors'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='scissors'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        return;
    }
    if(pl==='scissors'){
        res.textContent = cmp==='rock'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='rock'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        return;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const res = document.querySelector('.results');
const plmove = document.querySelector('.moves>.player');
const compmove = document.querySelector('.moves>.computer');

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