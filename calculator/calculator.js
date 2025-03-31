let display = document.getElementById('display');

function displayChar(val){
    display.value += val;
}

function result(){
   try{
    if ( display.value.trim() === ""){
        throw new Error('Select Values')
    }

    display.value = eval(display.value);
   }
   catch(error){
        display.value = error.message;
        setTimeout(() => {display.value = ""}, 2000)
   }
}

function clearDisplay(){
    display.value = "";
}

