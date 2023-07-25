import { cx0, cy0, multiplicationFactor, r0, samples, svgns } from "./constant";
import { getAngleFromIndex, getPointOnCircleFromAngle } from "./math";
import "./style.css";
console.log("hello");

const container = document.querySelector("svg g.samples");
if (container === null) {
  throw new Error("Cannot find selector svg g.samples");
}

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = getAngleFromIndex(i, samples);
  const { x, y } = getPointOnCircleFromAngle(angle);

  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", "1");
  container.appendChild(circle);
}

const lineContainer = document.querySelector("svg g.lines");
if (lineContainer === null) {
  throw new Error("Cannot find selector svg g.lines");
}
for (let i = 0; i < samples; i++) {
  const line = document.createElementNS(svgns, "line");

  const angle1 = getAngleFromIndex(i, samples);
  const angle2 = getAngleFromIndex(i * multiplicationFactor, samples);
  const p1 = getPointOnCircleFromAngle(angle1);
  const p2 = getPointOnCircleFromAngle(angle2);

  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");
  lineContainer.appendChild(line);
}
