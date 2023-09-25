// Paimame DOM elementus
const rezoliucijaElementas = document.getElementById("rezoliucija");

// Funkcija, kuri atnaujina ekrano rezoliucijos informaciją
function atnaujintiRezoliucija() {
    const ekranoPlotis = window.innerWidth;
    const ekranoAukštis = window.innerHeight;
    rezoliucijaElementas.innerText = ekranoPlotis + " x " + ekranoAukštis;
}

// Pirma karta atnaujiname rezoliuciją
atnaujintiRezoliucija();

// Priskiriame event listenerį, kad atnaujintume rezoliuciją, kai keičiamas naršyklės langas
window.addEventListener("resize", atnaujintiRezoliucija);
