const button = document.getElementById('toggleButton');
const text = document.getElementById('text');
const container = document.getElementById('container');

let toggled = false;

button.addEventListener('click', function() {
    if (toggled) {
        button.textContent = 'Click me!';
        text.textContent = 'This is some text';
        container.style.backgroundColor = 'lightblue';
    } else {
        button.textContent = 'Clicked!';
        text.textContent = 'Text has changed!';
        container.style.backgroundColor = 'lightcoral';
    }
    toggled = !toggled;
});
