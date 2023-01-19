container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    cells = document.createElement('div');
    cells.classList.add('grid-item');
    container.appendChild(cells);
}

input = document.querySelector('.dimensions');
// Prompt user when button is clicked
function promptUser() {
    do {
        squares = prompt("Input how many squares you want on each side! It must be 100 and less!");
    }
    while (squares > 100);
    return squares;
}

function handleInput() {
    // Remove all the divs
    squares = promptUser();
    divs = document.querySelectorAll('.grid-item');
    divs.forEach((element) => container.removeChild(element));
    
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    // add new divs
    for (let i = 0; i < squares ** 2; i++) {
        cells = document.createElement('div');
        cells.classList.add('grid-item');
        container.appendChild(cells);
    }
    repeat();
}
input.addEventListener('click', handleInput);

mixed = document.querySelector(".rainbow");
selected = document.querySelector("input");
shade = document.querySelector(".black");

function repeat() {
    // Gives node list of grid items
    item = document.querySelectorAll(".grid-item");
    mixed.addEventListener('click', setValue);
    selected.addEventListener('input', setValue);
    shade.addEventListener('click', setValue);
    function setValue(event) {
    let answer = this.classList.value;
    if (answer === "choose") {
        color = event.target.value;
    }
    else if (answer === "rainbow") {
        function changeColor(e) {
            let value1 = Math.floor(Math.random() * 256);
            let value2 = Math.floor(Math.random() * 256);
            let value3 = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
        }
    }
    else {
        color = `rgb(255,255,255)`;
    }
    function changeColor(e) {
        // Random RGB values
        this.style.backgroundColor = color;
    }
    
    item.forEach((element) => element.addEventListener('mouseover', changeColor));
    }
}

repeat();
