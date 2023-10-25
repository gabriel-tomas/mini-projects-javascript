function gameScope() {
    const playerImgs = {1:"imgs/blue/rock.svg", 2:"imgs/blue/paper.svg", 3:"imgs/blue/scissors.svg"};
    const cpuImgs = {1:"imgs/red/rock.svg", 2:"imgs/red/paper.svg", 3:"imgs/red/scissors.svg"};

    addListeners();

    function addListeners() {
        const rockButton = document.querySelector(".rock-button");
        const paperButton = document.querySelector(".paper-button");
        const scissorsButton = document.querySelector(".scissors-button");

        rockButton.addEventListener("mousedown", function () {
            playGame(1);
        })
        paperButton.addEventListener("mousedown", function () {
            playGame(2);
        })
        scissorsButton.addEventListener("mousedown", function () {
            playGame(3);
        })
    }

    function playGame(choice) {
        let cpuEscolha = Math.round(Math.random() * (3 - 1) + 1);

        setTimeout(function(){changeImage(choice, cpuEscolha)}, 3000);
        resetImgsHands();
        repeatHandAnimation();
        setTimeout(function(){removeAddScndHand(false)}, 2900);
        const [text, winner] = game(choice, cpuEscolha);
        const [p1, br, p2] = createElements(text, winner);
        showWinner(p1, br, p2);
    }

    function removeAddScndHand(flag) {
        const playerScndHand = document.querySelector(".player .second-hand");
        const cpuScndHand = document.querySelector(".cpu .second-hand-reverse");

        if(flag) {
            setTimeout(function(){cpuScndHand.classList.add("hand-back")}, 100);
            setTimeout(function(){playerScndHand.classList.add("hand-back")}, 100);
        } else {
            cpuScndHand.classList.remove("hand-back");
            playerScndHand.classList.remove("hand-back");
        }
    }

    function repeatHandAnimation() {
        const playerHand = document.querySelector(".player .main-hand");
        const cpuHand = document.querySelector(".cpu .main-hand");
        removeAddScndHand(true);

        cpuHand.classList.remove("run-reverse-animation");
        cpuHand.offsetWidth;
        setTimeout(function(){cpuHand.classList.add("run-reverse-animation")}, 100);
        playerHand.classList.remove("run-animation");
        playerHand.offsetHeight;
        setTimeout(function(){playerHand.classList.add("run-animation")}, 100);
    }

    function resetImgsHands() {
        const playerHand = document.querySelector(".player .main-hand img");
        const cpuHand = document.querySelector(".cpu .main-hand img");

        playerHand.src = playerImgs[1];
        cpuHand.src = cpuImgs[1];
    }

    function changeImage(playerChoice, cpuChoice) {
        const playerHand = document.querySelector(".player .main-hand img");
        const cpuHand = document.querySelector(".cpu .main-hand img");
        
        playerHand.src = playerImgs[playerChoice];
        cpuHand.src = cpuImgs[cpuChoice];
    }

    function showWinner(p1, br, p2) {
        const titleWinner = document.querySelector(".winner-container > h1");

        titleWinner.innerHTML = "";
        titleWinner.appendChild(p1);
        titleWinner.appendChild(br);
        titleWinner.appendChild(p2);
    }

    function createElements(text, winner) {
        const p1 = document.createElement("p");
        const br = document.createElement("br");
        const p2 = document.createElement("p");

        p1.innerHTML = `${text}`;
        p2.innerHTML = `Ganhador: ${winner}`;

        return [p1, br, p2];
    }

    function game(playerChoice, cpuChoice){
        let text;
        let winner;

        if(playerChoice === cpuChoice) {
            text = "EMPATE";
            winner = "";
        } else if(playerChoice === 1 && cpuChoice === 2) {
            text = "PERDEU";
            winner = "CPU"
        } else if(playerChoice === 1 && cpuChoice === 3) {
            text = "GANHOU";
            winner = "Jogador";
        } else if(playerChoice === 2 && cpuChoice === 1) {
            text = "GANHOU";
            winner = "Jogador";
        } else if(playerChoice === 2 && cpuChoice === 3) {
            text = "PERDEU";
            winner = "CPU";
        } else if(playerChoice === 3 && cpuChoice === 1) {
            text = "PERDEU"; 
            winner = "CPU";
        } else if(playerChoice === 3 && cpuChoice === 2) {
            text = "GANHOU"; 
            winner = "Jogador";
        }
        return [text, winner];
    }
}

gameScope();