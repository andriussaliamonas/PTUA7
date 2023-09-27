const addJokeBtn = document.getElementById('add-joke-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const jokeCardsContainer = document.getElementById('joke-cards-container');
const openCardsSpan = document.getElementById('open-cards');
const totalLettersSpan = document.getElementById('total-letters');

let openCardCount = 0;
let totalLettersCount = 0;

const defaultIconUrl = 'https://assets.chucknorris.host/img/avatar/chuck-norris.png';

addJokeBtn.addEventListener('click', () => {
    fetchJoke()
        .then((jokeData) => {
            createJokeCard(jokeData);
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
        });
});

clearAllBtn.addEventListener('click', () => {
    jokeCardsContainer.innerHTML = '';
    openCardCount = 0;
    totalLettersCount = 0;
    updateStats();
});

function fetchJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json());
}

function createJokeCard(jokeData) {
    const card = document.createElement('div');
    card.classList.add('joke-card');

    const img = document.createElement('img');
    img.src = jokeData.icon_url || defaultIconUrl; // Use the icon_url from the response or the default icon URL
    card.appendChild(img);

    const updatedSpan = document.createElement('p');
    updatedSpan.textContent = `Updated: ${new Date().toLocaleString()}`;
    card.appendChild(updatedSpan);

    const link = document.createElement('a');
    link.href = jokeData.url;
    link.textContent = 'Read More';
    card.appendChild(link);

    const joke = document.createElement('p');
    joke.textContent = jokeData.value;
    card.appendChild(joke);

    const cardActions = document.createElement('div');
    cardActions.classList.add('card-actions');

    const randomColorBtn = document.createElement('button');
    randomColorBtn.textContent = 'Random Color';
    randomColorBtn.addEventListener('click', () => {
        card.style.backgroundColor = getRandomColor();
    });
    cardActions.appendChild(randomColorBtn);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', () => {
        jokeCardsContainer.removeChild(card);
        openCardCount--;
        totalLettersCount -= jokeData.value.replace(/[^a-zA-Z]/g, '').length;
        updateStats();
    });
    cardActions.appendChild(closeBtn);

    card.appendChild(cardActions);

    jokeCardsContainer.appendChild(card);

    openCardCount++;
    totalLettersCount += jokeData.value.replace(/[^a-zA-Z]/g, '').length;
    updateStats();
}

function updateStats() {
    openCardsSpan.textContent = openCardCount;
    totalLettersSpan.textContent = totalLettersCount;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
