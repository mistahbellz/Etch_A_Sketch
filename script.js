const container = document.getElementById('container');
const numberOfDivs = prompt("Enter the number of divs:");

function createDiv() {
    const div = document.createElement('div');
    div.style.opacity = 0.2;
    return div
}

for (let i = 0; i < numberOfDivs; i++) {
    const box = createDiv();
    container.appendChild(box);
}

const divs = document.querySelectorAll('#container > div');

// Add event listeners to each div element
divs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.opacity = div.opacity=0.5; // Set opacity to 0.5 when hovered over
    });

    div.addEventListener('mouseleave', () => {
        div.style.opacity = 1; // Set opacity back to 1 when mouse leaves
    });
});