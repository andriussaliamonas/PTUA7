// Paimame visus naujienos pavadinimus
const naujienosPavadinimai = document.querySelectorAll(".naujienos-pavadinimas");

// Pridedame click event listenerį kiekvienam naujienos pavadinimui
naujienosPavadinimai.forEach(pavadinimas => {
    pavadinimas.addEventListener("click", atvertiNaujiena);
});

// Funkcija, kuri atveria naujienos turinį
function atvertiNaujiena(event) {
    // Paimame tėvinio elemento (h2) šalia esantį naujienos turinį (p)
    const naujienosTurinys = event.target.nextElementSibling;

    // Tikriname, ar naujienos turinys yra paslėptas ar matomas
    if (naujienosTurinys.style.display === "none" || naujienosTurinys.style.display === "") {
        naujienosTurinys.style.display = "block"; // Jei paslėptas, rodyti
    } else {
        naujienosTurinys.style.display = "none"; // Jei matomas, paslėpti
    }
}
