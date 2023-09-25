// Paimame DOM elementus
const skaičiusElementas = document.getElementById("skaičius");
const didintiMygtukas = document.getElementById("didintiMygtukas");

// Pradinis skaičius
let skaičius = 0;

// Funkcija, kuri padidina skaičių vienetu ir atnaujina DOM
function didintiSkaičių() {
    skaičius++;
    skaičiusElementas.innerText = skaičius;
}

// Priskiriame click event listenerį mygtukui
didintiMygtukas.addEventListener("click", didintiSkaičių);
