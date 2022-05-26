function computerP() {
    randomNum = Math.random()
    return randomNum>0.67?'rock':randomNum>0.33?'paper':'scissors';
}

function playRound(pl, cmp = computerP()) {
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
        cmp==='paper'?comp++:player++;
        return;
    }
    if(pl==='scissors'){
        console.log(cmp==='rock'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`);
        cmp==='paper'?comp++:player++;
        return;
    }
}

function play() {
    let i = 0; comp=0; player=0;
    for(i;i<5;i++){
        playerP = prompt("Enter your move:").toLowerCase();
        playRound(playerP);
        console.log(`Player: ${player}      Computer: ${comp}`);
    }
    console.log(`FINAL SCORE:\nPlayer: ${player}      Computer: ${comp}`);
}