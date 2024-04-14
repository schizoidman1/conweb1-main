function animateButton(button) {
    button.disabled = true;

    button.classList.add('loading');

    setTimeout(() => {
        // Remove the loading class and enable the button after 2 seconds
        button.classList.remove('loading');
        button.disabled = false;
    }, 1000);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => animateButton(button));
});
