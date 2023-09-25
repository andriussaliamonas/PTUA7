const input = document.getElementById('number');
const form = document.querySelector('form');
const numberWrapper = document.getElementById('number-wrapper');
const messageInvalid = document.getElementById('message-invalid');

input.addEventListener('blur', () => {
    const inputValue = input.value;

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 99) {
        // Remove any existing messages
        if (messageInvalid.parentElement === form) {
            form.removeChild(messageInvalid);
        }

        // Set the background of the number wrapper to green
        numberWrapper.style.backgroundColor = 'green';
        numberWrapper.textContent = 'Tai yra skaičius tarp 0 ir 99';
    } else {
        // Remove any existing messages
        if (messageInvalid.parentElement === form) {
            form.removeChild(messageInvalid);
        }

        // Set the background of the number wrapper to white (or any other color you prefer)
        numberWrapper.style.backgroundColor = 'white';
        numberWrapper.textContent = '';

        // Create a new p element for the invalid message
        const invalidMessage = document.createElement('p');
        invalidMessage.style.padding = '10px';
        invalidMessage.style.backgroundColor = 'red';
        invalidMessage.style.color = 'white';
        invalidMessage.textContent = `Tai yra ne skaičius ARBA mažesnis už 0 ARBA didesnis už 99, jūs įvedėte ${inputValue}`;

        // Append the invalid message to the form
        form.appendChild(invalidMessage);
    }

    // Remove any previous messages after a delay
    setTimeout(() => {
        const messages = form.querySelectorAll('p');
        messages.forEach((message) => {
            form.removeChild(message);
        });
    }, 2000); // Remove messages after 2 seconds
});

// Prevent the form from submitting when pressing Enter
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
