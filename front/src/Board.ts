import { SVG_NS, r1 } from "./constant";
import { Config } from "./interfaces/Config";
import { getAngleFromIndex, getPointOnCircleFromAngle } from "./math";
import { setAttributeNbr } from "./misc";

export class Board {
  config: Config = {
    samples: 13,
    multiplicationFactor: 12,
  };

  draw() {
    const container = document.querySelector("svg g.samples");
    if (container === null) {
      throw new Error("Cannot find selector svg g.samples");
    }

    for (let i = 0; i < this.config.samples; i++) {
      const circle = document.createElementNS(SVG_NS, "circle");

      const angle = getAngleFromIndex(i, this.config.samples);
      const { x, y } = getPointOnCircleFromAngle(angle);

      setAttributeNbr(circle, "cx", x);
      setAttributeNbr(circle, "cy", y);
      setAttributeNbr(circle, "r", r1);
      container.appendChild(circle);
    }

    const lineContainer = document.querySelector("svg g.lines");
    if (lineContainer === null) {
      throw new Error("Cannot find selector svg g.lines");
    }
    for (let i = 0; i < this.config.samples; i++) {
      const line = document.createElementNS(SVG_NS, "line");

      const angle1 = getAngleFromIndex(i, this.config.samples);
      const angle2 = getAngleFromIndex(
        i * this.config.multiplicationFactor,
        this.config.samples
      );
      const p1 = getPointOnCircleFromAngle(angle1);
      const p2 = getPointOnCircleFromAngle(angle2);

      setAttributeNbr(line, "x1", p1.x);
      setAttributeNbr(line, "y1", p1.y);
      setAttributeNbr(line, "x2", p2.x);
      setAttributeNbr(line, "y2", p2.y);
      lineContainer.appendChild(line);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
