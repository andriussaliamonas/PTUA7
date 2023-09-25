// Paimame DOM elementus
const atvertiMygtukas = document.getElementById("atvertiMygtukas");
const meniu = document.getElementById("meniu");

// Kintamasis, kuris nurodo, ar meniu yra atidarytas
let meniuAtidarytas = false;

// Funkcija, kuri atveria arba uždaro meniu
function valdytiMeniu() {
    if (!meniuAtidarytas) {
        meniu.style.display = "block";
        meniuAtidarytas = true;
    } else {
        meniu.style.display = "none";
        meniuAtidarytas = false;
    }
}

// Priskiriame click event listenerį mygtukui
atvertiMygtukas.addEventListener("click", valdytiMeniu);
