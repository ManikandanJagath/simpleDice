document.addEventListener("DOMContentLoaded", function () {
    const rollEl = document.querySelector("#roll"); //button element
    const guessedNumberEl = document.querySelector("#guessedNumber"); //input element
    const textEl = document.querySelector("#textEl");
    const textEl2 = document.querySelector("#textEl2");
    const randomEl = document.querySelector("#random1"); //random number print element



    function rollTwoSidedDice() {
        // Generate a random number between 0 and 1
        const randomNumber = Math.random();

        // If the random number is less than 0.5, it's considered heads (1)
        // Otherwise, it's considered tails (2)
        if (randomNumber < 0.5) {
            return 1; // Heads
        } else {
            return 2; // Tails
        }
    }

    rollEl.addEventListener("click", function () {
        const guessedNumber = parseInt(guessedNumberEl.value);

        const rolledNumber = rollTwoSidedDice();

        if (guessedNumber === rolledNumber) {
            textEl.innerHTML = "Your guess number is right";
            textEl2.innerHTML = "You Win";
        } else if (guessedNumber > 2) {
            textEl.innerHTML = "This is not valid number";
            textEl2.innerHTML = "No Valid";
            randomEl.style.display = "none";
        } else {
            textEl.innerHTML = "Your guess number is wrong";
            textEl2.innerHTML = "You Lose";

        }

        randomEl.innerHTML = rolledNumber;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const rollEl4 = document.querySelector("#roll4"); //button element
    const guessedNumberEl4Side = document.querySelector("#guessedNumber4"); //input element
    const textEl4 = document.querySelector("#textEl4");
    const textEl24 = document.querySelector("#textEl24");
    const randomEl4 = document.querySelector("#random4"); //random number print element



    function rollFourSideDice() {
        // Generate a random number between 0 and 3
        const randomNumber4 = Math.floor(Math.random() * 4) + 1;
        return randomNumber4;
    }

    rollEl4.addEventListener("click", function () {
        const guessedNumber4 = parseInt(guessedNumberEl4Side.value);

        const rolledNumber4 = rollFourSideDice();

        if (guessedNumber4 >= 1 && guessedNumber4 <= 4) {
            const rolledNumber4 = rollFourSideDice();

            if (guessedNumber4 === rolledNumber4) {
                textEl4.innerHTML = "Your guess number is right";
                textEl24.innerHTML = "You Win";
            } else {
                textEl4.innerHTML = "Your guess number is wrong";
                textEl24.innerHTML = "You Lose";
            }

            randomEl4.innerHTML = rolledNumber4;
        } else {
            textEl4.innerHTML = "This is not a valid number";
            textEl24.innerHTML = "No Valid";
            randomEl4.style.display = "none";
        }
    });



});


document.addEventListener("DOMContentLoaded", function () {
    const rollEl6 = document.querySelector("#roll6"); //button element
    const guessedNumberEl6Side = document.querySelector("#guessedNumber6"); //input element
    const textEl6 = document.querySelector("#textEl6");
    const textEl26 = document.querySelector("#textEl26");
    const randomEl6 = document.querySelector("#random6"); //random number print element



    function rollSixSideDice() {
        // Generate a random number between 0 and 3
        const randomNumber6 = Math.floor(Math.random() * 6) + 1;
        return randomNumber6;
    }

    rollEl6.addEventListener("click", function () {
        const guessedNumber6 = parseInt(guessedNumberEl6Side.value);

        const rolledNumber6 = rollSixSideDice();

        if (guessedNumber6 >= 1 && guessedNumber6 <= 6) {
            const rolledNumber6 = rollSixSideDice();

            if (guessedNumber6 === rolledNumber6) {
                textEl6.innerHTML = "Your guess number is right";
                textEl26.innerHTML = "You Win";
            } else {
                textEl6.innerHTML = "Your guess number is wrong";
                textEl26.innerHTML = "You Lose";
            }

            randomEl6.innerHTML = rolledNumber6;
        } else {
            textEl6.innerHTML = "This is not a valid number";
            textEl26.innerHTML = "No Valid";
            randomEl6.style.display = "none";
        }
    });



});


document.addEventListener("DOMContentLoaded", function () {
    const rollEl8 = document.querySelector("#roll8"); //button element
    const guessedNumberEl8Side = document.querySelector("#guessedNumber8"); //input element
    const textEl8 = document.querySelector("#textEl8");
    const textEl28 = document.querySelector("#textEl28");
    const randomEl8 = document.querySelector("#random8"); //random number print element


    function rollEightSideDice() {
        // Generate a random number between 0 and 3
        const randomNumber8 = Math.floor(Math.random() * 8) + 1;
        return randomNumber8;
    }

    rollEl8.addEventListener("click", function () {
        const guessedNumber8 = parseInt(guessedNumberEl8Side.value);

        const rolledNumber8 = rollEightSideDice();

        if (guessedNumber8 >= 1 && guessedNumber8 <= 8) {
            const rolledNumber8 = rollEightSideDice();

            if (guessedNumber8 === rolledNumber8) {
                textEl8.innerHTML = "Your guess number is right";
                textEl28.innerHTML = "You Win";
            } else {
                textEl8.innerHTML = "Your guess number is wrong";
                textEl28.innerHTML = "You Lose";
            }

            randomEl8.innerHTML = rolledNumber8;
        } else {
            textEl8.innerHTML = "This is not a valid number";
            textEl28.innerHTML = "No Valid";
            randomEl8.style.display = "none";
        }
    });


});

document.addEventListener("DOMContentLoaded", function () {
    const rollEl12 = document.querySelector("#roll12"); //button element
    const guessedNumberEl12Side = document.querySelector("#guessedNumber12"); //input element
    const textEl12 = document.querySelector("#textEl12");
    const textEl212 = document.querySelector("#textEl212");
    const randomEl12 = document.querySelector("#random12"); //random number print element


    function rollTwelveSideDice() {
        // Generate a random number between 0 and 3
        const randomNumber12 = Math.floor(Math.random() * 12) + 1;
        return randomNumber12;
    }

    rollEl12.addEventListener("click", function () {
        const guessedNumber12 = parseInt(guessedNumberEl12Side.value);

        const rolledNumber12 = rollTwelveSideDice();

        if (guessedNumber12 >= 1 && guessedNumber12 <= 12) {
            const rolledNumber12 = rollTwelveSideDice();

            if (guessedNumber12 === rolledNumber12) {
                textEl12.innerHTML = "Your guess number is right";
                textEl212.innerHTML = "You Win";
            } else {
                textEl12.innerHTML = "Your guess number is wrong";
                textEl212.innerHTML = "You Lose";
            }

            randomEl12.innerHTML = rolledNumber12;
        } else {
            textEl12.innerHTML = "This is not a valid number";
            textEl212.innerHTML = "No Valid";
            randomEl12.style.display = "none";
        }
    });


});
