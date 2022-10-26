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
    let imgDice = document.getElementById('imgDice');

    switch (typeDice) {
        case 1:
            result.innerHTML = quantityDice(quantity, 4);
            imgDice.src = 'assets/images/dice-d4.png';
            break;
        case 2:
            result.innerHTML = quantityDice(quantity, 6);
            imgDice.src = 'assets/images/dice-d6.png';

            break;
        case 3:
            result.innerHTML = quantityDice(quantity, 8);
            imgDice.src = 'assets/images/dice-d8.png';

            break;
        case 4:
            result.innerHTML = quantityDice(quantity, 10);
            imgDice.src = 'assets/images/dice-d10.png';

            break;
        case 5:
            result.innerHTML = quantityDice(quantity, 12);
            imgDice.src = 'assets/images/dice-d12.png';

            break;
        case 6:
            result.innerHTML = quantityDice(quantity, 20);
            imgDice.src = 'assets/images/dice-d20.png';

            break;
        case 7:
            result.innerHTML = quantityDice(quantity, 100);
            imgDice.src = 'assets/images/dice-d10.png';

            break;
        default:
            alert('error');
            break;
    }
};

let resultDice = document.getElementById('button-roll');
resultDice.addEventListener('click', () => {
    rollDice();
});