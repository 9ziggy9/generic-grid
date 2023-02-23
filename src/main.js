import {Grid} from "./grid.js";

function init() {
  const grid = Grid({
    cols: 16,
    rows: 9,
    scale: 5,
    containerId: "game",
    gridId: "grid",
    cellClass: "cell",
  });
  grid.create();
}
 
window.onload = init;
