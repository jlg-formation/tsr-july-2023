import { multiplicationFactor, r1, samples, SVG_NS } from "./constant";
import { getAngleFromIndex, getPointOnCircleFromAngle } from "./math";
import { setAttributeNbr } from "./misc";
import "./style.css";
console.log("hello");

const container = document.querySelector("svg g.samples");
if (container === null) {
  throw new Error("Cannot find selector svg g.samples");
}

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(SVG_NS, "circle");

  const angle = getAngleFromIndex(i, samples);
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
for (let i = 0; i < samples; i++) {
  const line = document.createElementNS(SVG_NS, "line");

  const angle1 = getAngleFromIndex(i, samples);
  const angle2 = getAngleFromIndex(i * multiplicationFactor, samples);
  const p1 = getPointOnCircleFromAngle(angle1);
  const p2 = getPointOnCircleFromAngle(angle2);

  setAttributeNbr(line, "x1", p1.x);
  setAttributeNbr(line, "y1", p1.y);
  setAttributeNbr(line, "x2", p2.x);
  setAttributeNbr(line, "y2", p2.y);
  lineContainer.appendChild(line);
}
