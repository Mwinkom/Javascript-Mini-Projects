let textArea = document.getElementById('textArea');
const toCelcius = document.getElementById('toCelcius');
const toFahrenheit = document.getElementById('toFahrenheit');
const result = document.getElementById('result');    
let temp;
    
function convert(){
    if(toCelcius.checked){
        temp = Number(textArea.value);
        temp = (5 / 9 * (temp - 32));
        result.textContent = temp.toFixed(1) + '°C';
    }
    else if(toFahrenheit.checked){
        temp = Number(textArea.value);
        temp = (9 / 5 * temp )+ 32;
        result.textContent = temp.toFixed(1) + '°F';
    }
    else{
        result.textContent = 'Please select a conversion';
    }
        
};

