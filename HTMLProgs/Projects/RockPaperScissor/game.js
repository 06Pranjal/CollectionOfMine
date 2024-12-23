console.log("Welcome to classic Rock Paper Scissors")
const score={
    win:0,
    loose:0,
    ties:0
}
function computerMove(){

const numberComputer= Math.random();

if(numberComputer>0 && numberComputer<=0.33){
    return 'rock';

}
else if(numberComputer>0.33 && numberComputer<=0.66){
    return 'paper';
}
else{
    return 'scissors';
}

}


function win(player){
    const moveComputer= computerMove();
    console.log(`Player: ${player}, Computer: ${moveComputer}`);
    
    let result;
    if (player===moveComputer){
        result= "Match Tie";
        console.log(result);
        score.ties++;
        console.log(score);
        alert(`Match Tie!\nWins: ${score.win}, Losses: ${score.loose}, Ties: ${score.ties}`);

    }

    else if((player==='rock'&& moveComputer==='scissors') || 
    (player==='paper'&& moveComputer==='rock') ||
    (player==='scissors'&& moveComputer==='paper')
){
        result= "Player Wins";
        
        console.log(result);
        score.win++;
        console.log(score);
        alert(`Player wins!\nWins: ${score.win}, Losses: ${score.loose}, Ties: ${score.ties}`);

    }
    else {
        result= "Computer Wins";
        console.log(result);
        score.loose++;
        console.log(score);
        alert(`Computer wins!\nWins: ${score.win}, Losses: ${score.loose}, Ties: ${score.ties}`);

    }
    
    

}

function resetscore(){
    score.win=0;
    score.loose=0;
    score.ties=0;
    console.log("Score Reset");
    console.log(score);
    alert(`Score Reset!\nWins: ${score.win}, Losses: ${score.loose}, Ties: ${score.ties}`);

}