const out=["rock", "paper", "scissors"]
function computerplay(){
    return out[Math.floor(Math.random()*3)];
}
let computerSection, playerSection;
function playRound(){
    computerSection = computerplay();
    if(computerSection === playerSection){
        return 0;
    }
    switch(computerSection){
        case "rock":
            return playerSection === "paper" ? 1 : -1;
        case "paper":
            return playerSection === "scissors" ? 1 : -1;
        case "scissors":
            return playerSection === "rock" ? 1 : -1;
    }
}
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
function game(){
    let i;
    let myscore = 0;
    let cpuscore = 0;
    for(i=0; i<5; i++){
        playerSection = prompt("Rock! Paper! Scissors!")
        playerSection = playerSection.toLowerCase();
        while(!out.includes(playerSection)){
            playerSection = prompt("Type again.");
            playerSection = playerSection.toLowerCase();
        }
        let result = playRound()
        switch(result){
            case 0:
                console.log("Both "+playerSection+", draw!");
                break;
            case 1:
                console.log(capitalize(playerSection)+" beats "+ capitalize(computerSection)+"! You win this game!");
                myscore++;
                break;
            case -1:
                console.log(capitalize(computerSection)+" beats "+ capitalize(playerSection)+"! You lose this game!");
                cpuscore++;
                break;
        }
        console.log(`Player ${myscore} - ${cpuscore} CPU`);
    }
    if(myscore > cpuscore){
        console.log("You win!");
    }else if (myscore < cpuscore){
        console.log("You lose!");
    }else{
        console.log("Draw!");
    }
}