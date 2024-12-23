console.log("Welcome to classic Rock Paper Scissors")

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
    }

    else if((player==='rock'&& moveComputer==='scissors') || 
    (player==='paper'&& moveComputer==='rock') ||
    (player==='scissors'&& moveComputer==='paper')
){
        result= "Player Wins";
    }
    else {
        result= "Computer Wins";
    }
    
    console.log(result);

}