import { Config } from "./interfaces/Config";
import { querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.render();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }

  render() {
    querySelector("div.command label.samples span.value").innerHTML =
      this.config.samples + "";
    querySelector(
      "div.command label.multiplicationFactor span.value"
    ).innerHTML = this.config.multiplicationFactor + "";

    const inputElt = querySelector(
      "div.command label.samples input"
    ) as HTMLInputElement;
    console.log("inputElt: ", inputElt);
    inputElt.value = this.config.samples + "";

    const inputElt2 = querySelector(
      "div.command label.multiplicationFactor input"
    ) as HTMLInputElement;
    console.log("inputElt2: ", inputElt2);
    inputElt2.value = this.config.multiplicationFactor + "";
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
