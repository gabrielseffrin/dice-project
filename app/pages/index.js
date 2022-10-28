'use strict';

let quantityDice = (quantity, typeDice) => {
    let aux = 0;
    let result = 0;
    while (aux < quantity) {
        console.log(typeDice);
        result += Math.floor(Math.random() * typeDice) + 1;
        aux++;
    }

    return result;
};

let rollDice = () => {
    let typeDice = +document.getElementById('typeDice').value;
    let quantity = +document.getElementById('input-quantity-dice').value;

    /* result and image dice */
    let result = document.getElementById('result');
    let dice = document.getElementById('type-dice');

    switch (typeDice) {
        case 1:
            result.innerHTML = quantityDice(quantity, 4);
            dice.innerHTML = `D4`;
            break;
        case 2:
            result.innerHTML = quantityDice(quantity, 6);
            dice.innerHTML = `D6`;

            break;
        case 3:
            result.innerHTML = quantityDice(quantity, 8);
            dice.innerHTML = `D8`;

            break;
        case 4:
            result.innerHTML = quantityDice(quantity, 10);
            dice.innerHTML = `D10`;

            break;
        case 5:
            result.innerHTML = quantityDice(quantity, 12);
            dice.innerHTML = `D12`;

            break;
        case 6:
            result.innerHTML = quantityDice(quantity, 20);
            dice.innerHTML = `D20`;

            break;
        case 7:
            result.innerHTML = quantityDice(quantity, 100);
            dice.innerHTML = `100`;

            break;
        default:
            alert('falta informação!');
            break;
    }
};

let resultDice = document.getElementById('button-roll');
resultDice.addEventListener('click', () => {
    rollDice();
});