import {Grid} from "./grid.js";

function init() {
  const grid = Grid({
    cols: 16,
    rows: 10,
    scale: 70,
    containerId: "game",
    gridId: "grid",
    cellClass: "cell",
  });
  grid.create();
  grid.bindListeners("click",
    () => console.log("Hello, world!"),
    (cell) => console.log(cell.id),
  );
}
 
window.onload = init;
