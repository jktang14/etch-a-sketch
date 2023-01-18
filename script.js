container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    cells = document.createElement('div');
    cells.classList.add('grid-item');
    container.appendChild(cells);
}

// Gives node list of grid items
item = document.querySelectorAll(".grid-item");

function changeColor(e) {
    this.style.backgroundColor = "rgb(218, 87, 87)";
}

item.forEach((element) => element.addEventListener('mouseover', changeColor));

input = document.querySelector('button');

function promptUser() {
    do {
        squares = prompt("Input how many squares you want on each side! It must be less than 100!");
    }
    while (squares >= 100);
}

input.addEventListener('click', promptUser);


