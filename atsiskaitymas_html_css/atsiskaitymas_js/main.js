function sumEvenAll() {
    let sum = 0;


    for (let i = 2; i < 20; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumEvenAll());
