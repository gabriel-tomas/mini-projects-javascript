function gameScope() {
    //let playerEscolha = Number(prompt("Pedra, papel ou tesoura?"));
    let cpuEscolha = Math.round(Math.random() * (3 - 1) + 1);
    const opcoesJogo = {1:"pedra", 2:"papel", 3:"tesoura"};
    game(playerEscolha, cpuEscolha);

    function game(playerChoice, cpuChoice){
        let text = "";
        if(playerChoice === cpuChoice) {
            text = "EMPATE";
        } else if(playerChoice === 1 && cpuChoice === 2) {
            text = "PERDEU";
        } else if(playerChoice === 1 && cpuChoice === 3) {
            text = "GANHOU";
        } else if(playerChoice === 2 && cpuChoice === 1) {
            text = "GANHOU";
        } else if(playerChoice === 2 && cpuChoice === 3) {
            text = "PERDEU";
        } else if(playerChoice === 3 && cpuChoice === 1) {
            text = "PERDEU"; 
        } else if(playerChoice === 3 && cpuChoice === 2) {
            text = "GANHOU"; 
        }
    }
}

gameScope();