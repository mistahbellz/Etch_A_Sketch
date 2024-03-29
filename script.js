const container = document.getElementById('container');
const numberOfDivs = prompt("Enter the number of divs:");

function createDiv() {
    const div = document.createElement('div');
    div.style.opacity = 0.2;
    return div
}
const divs = document.querySelectorAll('.item');
divs.forEach(div => {

    let opacity = 0.2; // Initial opacity

    div.addEventListener('mouseenter', () => {
        opacity += 0.2; // Increase opacity by 0.2
        if (opacity > 1) {
            opacity = 1; // Cap opacity at 1
        }
        div.style.opacity = opacity; // Set the updated opacity
    });

    // div.addEventListener('mouseleave', () => {
    //     // Reset opacity to 1 when mouse leaves
    //     opacity = 1;
    //     div.style.opacity = opacity;
    // });
});