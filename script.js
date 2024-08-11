let correctCard = Math.floor(Math.random() * 3) + 1;

function checkCard(cardNumber) {
    const resultMessage = document.getElementById('resultMessage');

    if (cardNumber === correctCard) {
        resultMessage.textContent = 'Selamat! Anda memilih kartu yang benar!';
        resultMessage.style.color = 'green';
        revealCards();
    } else {
        resultMessage.textContent = 'Kartu yang salah, coba lagi!';
        resultMessage.style.color = 'red';
        revealCards();
    }
}

function revealCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index + 1 === correctCard) {
            card.style.backgroundColor = 'green';
        } else {
            card.style.backgroundColor = 'red';
        }
        card.style.pointerEvents = 'none';
    });
}

function resetGame() {
    correctCard = Math.floor(Math.random() * 3) + 1;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = '#007bff';
        card.style.pointerEvents = 'auto';
    });
    document.getElementById('resultMessage').textContent = '';
}
