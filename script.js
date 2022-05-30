// Function to randomly generate a string which is then used as computers move...
//... in *playround()* function.
function computerP() {
    randomNum = Math.random()
    return randomNum>0.67?'rock':randomNum>0.33?'paper':'scissors';
}

// Score counter Variables
let comp = 0; player = 0;

// Function to play a single round. It is called in the *click()* function...
//...Argument passed is click data which is then used to reference target button.
function playRound(e) {
    cmp = computerP();   // 
    cmpsym = document.querySelector('#'+cmp).getAttribute('data-symbol');
    pl = `${e.target.getAttribute('id')}`.toString();
    if(pl===cmp){
        res.textContent = `Draw!! Both Computer and you had ${pl.toUpperCase()}`;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        plscore.textContent = `Player: ${player}`;
        compscore.textContent = `Computer: ${comp}`;
        
        return;
    }
    if(pl==='rock'){
        res.textContent = cmp==='paper'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='paper'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        plscore.textContent = `Player: ${player}`;
        compscore.textContent = `Computer: ${comp}`;

        return;
    }
    if(pl==='paper'){
        res.textContent = cmp==='scissors'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='scissors'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        plscore.textContent = `Player: ${player}`;
        compscore.textContent = `Computer: ${comp}`;

        return;
    }
    if(pl==='scissors'){
        res.textContent = cmp==='rock'?`You Lose! ${cmp.toUpperCase()} beats ${pl.toUpperCase()}`:`You Win! ${pl.toUpperCase()} beats ${cmp.toUpperCase()}`;
        cmp==='rock'?comp++:player++;
        plmove.textContent = `${e.target.getAttribute('data-symbol')}`;
        compmove.textContent = cmpsym;
        plscore.textContent = `Player: ${player}`;
        compscore.textContent = `Computer: ${comp}`;

        return;
    }
}

// Function to handle click events on buttons.
function click(e) {
    if(player===5||comp===5){
        reset();
        return;
    }
    playRound(e);
    if(player===5||comp===5){
        res.textContent = `Final Result: ${player>comp?'You win!!':'You Lose!!'}`;
    }
}

// Query selectors for buttons used to make a move.
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Query selectors for editing text content of corresponding divs to display...
//...result and scores after every round.
const res = document.querySelector('.results');
const plscore = document.querySelector('.plsc');
const compscore = document.querySelector('.compsc');

// Query selectors to display symbols of moves made by player and computer after every round.
const plmove = document.querySelector('.moves>.player');
const compmove = document.querySelector('.moves>.computer');

// Function to reset scores after one BO5 ends.
function reset(){
    player = 0; comp = 0;
    res.textContent = "Make Your first move!!";
    plscore.textContent = `Player`;
    compscore.textContent = `Computer`;
}

// Event listener on all three buttons with *click* as callback function
rock.addEventListener('click', click);
paper.addEventListener('click', click);
scissors.addEventListener('click', click);
