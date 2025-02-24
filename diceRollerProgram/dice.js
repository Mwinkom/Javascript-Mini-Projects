function roll(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const values = [];
    const images = [];

    for(i=1; i<=numOfDice; i++ ){
        let value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png" class="imgDice"> `)
    };

    diceResult.textContent = `Dice : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
};