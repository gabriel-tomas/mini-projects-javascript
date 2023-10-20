function mainScope() {
    const resultButton = document.querySelector("#result-button");
    const resultCampo = document.querySelector("#result-campo > p");
    const multButton = document.querySelector("#mult-button");
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

    function addEventsSigns() {
        multButton.addEventListener("mousedown", function () {
            Calculadora.getSign("*");
        });
        resultButton.addEventListener("mousedown", function() {
            Calculadora.getExpression(resultCampo);
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
    }

    const Calculadora = {
        resultado: 0,
        expression: "",

        //getSign(element) {
        //    if(element == "mult") {

        //    }
        //},

        //multNumber() {

        //}

        getExpression(resultElement) {
            console.log(resultElement.innerHTML);
            return resultElement.innerHTML;
        },

        postExpression(text) {
            console.log(typeof text);
            if(typeof Number(text) == "number") {
                this.expression += text;
                resultCampo.innerHTML = this.expression;
            }
        }
    }

    addEventsSigns();
}

mainScope();