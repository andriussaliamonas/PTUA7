const lemputeDOM = document.getElementById('lempute');

function ijungtiLempute() {
    lemputeDOM.src = 'img/on.jpg';
    lemputeDOM.removeEventListener('click', ijungtiLempute);
    lemputeDOM.addEventListener('click', isjungtiLempute);
}

function isjungtiLempute() {
    lemputeDOM.src = 'img/off.jpg';
    lemputeDOM.removeEventListener('click', isjungtiLempute);
    lemputeDOM.addEventListener('click', ijungtiLempute);
}

// Pradinis nustatymas - lemputė išjungta
isjungtiLempute();