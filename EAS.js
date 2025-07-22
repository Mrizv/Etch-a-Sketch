const grid = document.getElementById("squares");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "blue";
  });
}
