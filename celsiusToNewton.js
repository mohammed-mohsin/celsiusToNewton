// 1 Celsius = 0.33 N
const celsius = 50;

// Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);