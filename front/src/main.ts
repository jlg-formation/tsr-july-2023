import "./style.css";
console.log("hello");

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 100;
const multiplicationFactor = 98;

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("svg g.samples");
if (container === null) {
  throw new Error("Cannot find selector svg g.samples");
}

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = (i * (Math.PI * 2)) / samples;

  const x = cx0 + Math.cos(angle) * r0;
  const y = cy0 + Math.sin(angle) * r0;

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

  const angle1 = (i * (Math.PI * 2)) / samples;
  const angle2 = (i * multiplicationFactor * (Math.PI * 2)) / samples;

  const x1 = cx0 + Math.cos(angle1) * r0;
  const y1 = cy0 + Math.sin(angle1) * r0;
  const x2 = cx0 + Math.cos(angle2) * r0;
  const y2 = cy0 + Math.sin(angle2) * r0;

  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y2", y2 + "");
  lineContainer.appendChild(line);
}
