$(document).ready(function() {
  // Nustatome pradinę paveikslėlio būseną
  var image1 = $("#image");
  image1.attr("src", "img/nebe.jpg");

  // Sukuriame klausymosi įvykį paveikslėlio paspaudimui
  $("#image").click(function() {
    // Jei paveikslėlis yra "image1.jpg", pakeičiame jį į "image2.jpg"
    if (image1.attr("src") == "img/nebe.jpg") {
      image1.attr("src", "img/be.jpg");
    } else {
      // Jei paveikslėlis yra "image2.jpg", pakeičiame jį į "image1.jpg"
      image1.attr("src", "img/nebe.jpg");
    }
  });
});
