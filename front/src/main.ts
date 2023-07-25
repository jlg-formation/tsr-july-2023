import { Board } from "./Board";
import "./style.css";

const board = new Board();
board.setConfig({
  samples: 100,
  multiplicationFactor: 89,
});
board.draw();
