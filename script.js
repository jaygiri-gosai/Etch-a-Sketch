console.log("Welcome to Etch-a-Sketch!");

// Draw grid on page load
window.addEventListener("load", (event) => {
  createGrid(10);
});

// Function to draw a grid
function createGrid(cellCount) {
  let container = document.getElementById("container");
  // Resets the container
  container.innerHTML = "";
  container.className = "container";

  // Update grid button creation at the top
  let btn = document.createElement("button");
  btn.innerText = "Update Grid";
  btn.style.margin = "25px";

  // Add button at the top
  container.appendChild(btn);

  for (let i = 1; i <= cellCount; i++) {
    // Flex container creation
    let parentContainer = document.createElement("div");
    parentContainer.className = "parent";
    container.appendChild(parentContainer);
    // Loop to draw flex items
    for (let j = 1; j <= cellCount; j++) {
      let cell = document.createElement("div");
      cell.id = `cell-${j}`;
      cell.className = "cell";
      parentContainer.appendChild(cell);

      // Mouse enter & mouse leave listeners
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
      });
      cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "#FFFFFF";
      });
    }
  }

  btn.addEventListener("click", (e) => {
    let num = parseInt(prompt("Please enter grid size (max 100): "));
    if (num && num > 0 && num <= 100) createGrid(num);
    else alert("Invalid input!");
  });
}
