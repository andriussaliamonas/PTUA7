const jokeForm = document.getElementById('joke-form');
const numJokesInput = document.getElementById('numJokes');
const jokesContainer = document.getElementById('jokes-container');

jokeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const numJokes = numJokesInput.value;
    if (numJokes <= 0) {
        alert('Please enter a valid number of jokes (greater than 0).');
        return;
    }

    jokesContainer.innerHTML = '';

    let jokesFetched = 0;
    for (let i = 0; i < numJokes; i++) {
        try {
            const joke = await fetchJoke('https://api.chucknorris.io/jokes/random');
            displayJoke(joke);
            jokesFetched++;
        } catch (error) {
            // If Chuck Norris API fails, try the alternative API
            try {
                const altJoke = await fetchJoke('https://api.icndb.com/jokes/random');
                displayJoke(altJoke);
                jokesFetched++;
            } catch (altError) {
                console.error('Error fetching joke from alternative API:', altError);
            }
        }
    }

    if (jokesFetched === 0) {
        displayJoke("Bad day for Chuck :(");
    }
});

async function fetchJoke(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching joke from API:', error);
        throw error; // Rethrow the error to handle it in the outer catch block
    }
}

function displayJoke(joke) {
    const jokeElement = document.createElement('p');
    jokeElement.textContent = joke;
    jokesContainer.appendChild(jokeElement);
}
