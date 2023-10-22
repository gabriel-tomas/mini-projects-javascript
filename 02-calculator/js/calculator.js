function mainScope() {
    const button0 = document.querySelector("#button-0");
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const button4 = document.querySelector("#button-4");
    const button5 = document.querySelector("#button-5");
    const button6 = document.querySelector("#button-6");
    const button7 = document.querySelector("#button-7");
    const button8 = document.querySelector("#button-8");
    const button9 = document.querySelector("#button-9");
    const equalButton = document.querySelector("#equal-button");
    const resultCampo = document.querySelector("#result-campo > p");
    const multButton = document.querySelector("#mult-button");
    const minusButton = document.querySelector("#minus-button");
    const addButton = document.querySelector("#add-button");


    function addEventsSigns() {
        equalButton.addEventListener("mousedown", function() {
            Calculadora.postExpression("=");
        });
        button0.addEventListener("mousedown", function() {
            Calculadora.postExpression("0");
        })
        button1.addEventListener("mousedown", function() {
            Calculadora.postExpression("1");
        })
        button2.addEventListener("mousedown", function() {
            Calculadora.postExpression("2");
        })
        button3.addEventListener("mousedown", function() {
            Calculadora.postExpression("3");
        })
        button4.addEventListener("mousedown", function() {
            Calculadora.postExpression("4");
        })
        button5.addEventListener("mousedown", function() {
            Calculadora.postExpression("5");
        })
        button6.addEventListener("mousedown", function() {
            Calculadora.postExpression("6");
        })
        button7.addEventListener("mousedown", function() {
            Calculadora.postExpression("7");
        })
        button8.addEventListener("mousedown", function() {
            Calculadora.postExpression("8");
        })
        button9.addEventListener("mousedown", function() {
            Calculadora.postExpression("9");
        })
        multButton.addEventListener("mousedown", function () {
            Calculadora.postExpression("*");
        });
        minusButton.addEventListener("mousedown", function () {
            Calculadora.postExpression("-");
        });
        addButton.addEventListener("mousedown", function () {
            Calculadora.postExpression("+");
        });
    }

    const Calculadora = {
        resultado: 0,
        displayNumbers: "",
        signTimes: 0,
        signs: ["*", "-", "+"],
        actualSignOperation: null,
        numbers: [],
        SignsToDo: [],

        postExpression(text) {
            console.log(text);
            if(!isNaN(Number(text))) {
                this.displayNumbers += text;
                resultCampo.innerHTML = this.displayNumbers;
            } else if(this.signs.indexOf(text) != -1) {
                if(this.displayNumbers !== "") {
                    this.numbers.push(Number(this.displayNumbers));
                }
                if(this.SignsToDo.length < 2 && this.numbers.length !== 0) {
                    this.SignsToDo.push(text);
                    console.log("signstodo = ", this.SignsToDo);
                    this.actualSignOperation = this.SignsToDo[0];
                }
                this.displayNumbers = "";
            } else if(text === "=") {
                if(this.displayNumbers !== "") {
                    this.numbers.push(Number(this.displayNumbers));
                }
                this.displayNumbers = "";
                this.actualSignOperation = this.SignsToDo[0];
                console.log("sinal atual: ", this.actualSignOperation);
                console.log("signstodo depois do =", this.SignsToDo);
                console.log("numeros para calcular:", this.numbers);
            }

            console.log("numeros disponiveis", this.numbers);
            if(this.numbers.length === 2) {
                if(this.actualSignOperation === "+") {
                    this.resultado = this.add(this.numbers[0], this.numbers[1]);
                    resultCampo.innerHTML = this.resultado;
                    this.numbers = [this.resultado];
                    console.log(this.numbers);
                } else if(this.actualSignOperation === "-") {
                    this.resultado = this.minus(this.numbers[0], this.numbers[1]);
                    resultCampo.innerHTML = this.resultado;
                    this.numbers = [this.resultado];
                    console.log(this.numbers);
                } else if(this.actualSignOperation === "*") {
                    this.resultado = this.mult(this.numbers[0], this.numbers[1]);
                    resultCampo.innerHTML = this.resultado;
                    this.numbers = [this.resultado];
                    console.log(this.numbers);
                }
                this.SignsToDo.shift();
                console.log("sinais restantes: ", this.SignsToDo);
                console.log("numeros restentas: ", this.numbers);
            }
        },

        add(num1, num2) {
            console.log(num1 + num2);
            return num1 + num2;
        },

        minus(num1, num2) {
            console.log(num1 - num2);
            return num1 - num2;
        },

        mult(num1, num2) {
            console.log(num1 * num2);
            return num1 * num2;
        }

    }

    addEventsSigns();
}

mainScope();