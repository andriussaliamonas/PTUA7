document.addEventListener('DOMContentLoaded', () => {
  // Nuskaitome form_structure.json failą
  fetch('form_structure.json')
    .then(response => response.json())
    .then(data => {
      // Sukuriame formą
      const form = document.createElement('form');
      form.id = 'myForm';

      // Iteruojame per JSON objekto raktus (laukų pavadinimus)
      for (const fieldName in data) {
        if (data.hasOwnProperty(fieldName)) {
          const fieldInfo = data[fieldName];
          const label = document.createElement('label');
          label.textContent = fieldInfo.label;
          const input = document.createElement(fieldInfo.type);

          // Nustatome lauko atributus
          input.type = fieldInfo.type;
          input.name = fieldName;
          input.placeholder = fieldInfo.label;

          // Pridedame label ir lauką į formą
          form.appendChild(label);
          form.appendChild(input);
        }
      }

      // Sukuriame mygtuką ir pridedame jį į formą
      const submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.value = 'Siųsti';
      form.appendChild(submitButton);

      // Pridedame formą į dokumentą
      document.body.appendChild(form);

      // Pridedame formos submit event listener'į
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        // Galite atlikti norimus veiksmus su formData čia, pvz., siųsti į serverį.
      });
    })
    .catch(error => {
      console.error('Klaida nuskaitant JSON failą:', error);
    });
});
