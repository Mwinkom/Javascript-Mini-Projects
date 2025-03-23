

function digitalClock(){
    const dateNow = new Date();
    let hours = dateNow.getHours().toString().padStart(2,0);
    const minutes = dateNow.getMinutes().toString().padStart(2,0);
    const seconds = dateNow.getSeconds().toString().padStart(2,0);
    const time = document.getElementById('clock')

    hours = hours % 12 || 12;
    
    let ampm = hours >= 12? "PM" : "AM";
    time.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
}

digitalClock();
setInterval(digitalClock,1000);