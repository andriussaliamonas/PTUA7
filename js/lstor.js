// Išrenkame outputText elementą
const outputText = document.querySelector("#outputText");

// Registruojame keyup eventą input elementui
document.querySelector("#inputText").addEventListener("keyup", function() {
  // Atnaujiname outputText elemento tekstą
  outputText.textContent = this.value;
});

// Registruojame submit eventą submit mygtukui
document.querySelector("form").addEventListener("submit", function() {
  // Išsaugome tekstą Local Storage
  localStorage.setItem("text", document.querySelector("#inputText").value);
});
