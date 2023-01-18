container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    cells = document.createElement('div');
    cells.classList.add('grid-item');
    container.appendChild(cells);
}

input = document.querySelector('button');

function promptUser() {
    do {
        squares = prompt("Input how many squares you want on each side! It must be 100 and less!");
    }
    while (squares >= 100);

    // Remove all the divs
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

    check();
}

input.addEventListener('click', promptUser);

// Gives node list of grid items
function check() {
    item = document.querySelectorAll(".grid-item");

    function changeColor(e) {
        this.style.backgroundColor = "rgb(218, 87, 87)";
    }
    
    item.forEach((element) => element.addEventListener('mouseover', changeColor));
}

check();
