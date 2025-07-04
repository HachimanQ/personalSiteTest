document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const words = textElement.innerText.split(' ');

    textElement.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

    document.querySelectorAll('.word').forEach(wordElement => {
        wordElement.addEventListener('click', () => {
            const word = wordElement.innerText;
            console.log(word);
            if (word.toLowerCase() === 'crow') {
                wordElement.classList.add('selected');
                window.location.href = 'congratulations.html';
            }
        });
    });
});
