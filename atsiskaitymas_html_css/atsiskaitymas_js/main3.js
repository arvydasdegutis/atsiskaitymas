function askForCoin () {
    let sum = 0;  
    let number; 
    
    while (true) {
        number = parseFloat(prompt("Iveskite skaiciu"));

        if (number < 0) {
            break;
        } 
        sum += number
    }
    console.log(sum);
};

askForCoin();
