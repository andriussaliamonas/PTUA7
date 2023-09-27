const imageContainer = document.querySelector('.image-container');

async function fetchImages(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}`);
        const images = await response.json();
        return images;
    } catch (error) {
        console.error('Klaida gaudant nuotraukas iš API:', error);
    }
}

function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.width = 200;
        imgElement.height = 200;
        imgElement.style.objectFit = 'cover';
        imgElement.style.margin = '10px';
        imageContainer.appendChild(imgElement);
    });
}

function getRandomPage() {
    return Math.floor(Math.random() * 33) + 1;
}

async function loadRandomImages() {
    const randomPage = getRandomPage();
    const images = await fetchImages(randomPage);
    displayImages(images);
}

loadRandomImages();
