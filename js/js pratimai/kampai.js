// Gautos viršūnių skaičiai
let n1 = 5; // Pirmojo daugiakampio viršūnių skaičius
let n2 = 8; // Antrojo daugiakampio viršūnių skaičius

// Skaičiuojame pirmojo daugiakampio kampų sumą
let sum1 = (n1 - 2) * 180;

// Skaičiuojame antrojo daugiakampio kampų sumą
let sum2 = (n2 - 2) * 180;

// Skaičiuojame abiejų daugiakampių kampų sumą
let totalSum = sum1 + sum2;

// Rodo rezultatus elemente 'ats'
document.getElementById('ats').textContent = "Pirmojo daugiakampio kampų suma: " + sum1 + "\nAntrojo daugiakampio kampų suma: " + sum2 + "\nAbiejų daugiakampių kampų suma: " + totalSum;
