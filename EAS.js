const grid = document.getElementById("squares");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "blue";
  });
}

const button = document.querySelector('button');

function createGrid(size) {
  grid.innerHTML = "";
  const containerSize = grid.clientWidth;
  const squareSize = Math.floor(containerSize / size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "blue";
    });
    grid.appendChild(square);
  }
}

createGrid(16); // initial grid

button.addEventListener("click", () => {
  const size = parseInt(prompt("Number of squares per side for new grid:"));
  if (!size || size < 1 || size > 100) {
    alert("Please enter a number between 1 & 100");
    return;
  }
  createGrid(size);
});
