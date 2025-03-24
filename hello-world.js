const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        nameInput.value = '';
    }
    if (event.key === 'Enter') {
        helloWorld();
    }
});

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

const limpaTudo = () => {
    nameInput.value = ''
    messageP.innerText = ''
}