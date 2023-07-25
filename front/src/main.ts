import { Board } from "./Board";
import { Command } from "./Command";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = {
  samples: 50,
  multiplicationFactor: 25,
};
const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.redraw();
});
