import "./style.css";
console.log("hello");

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 10;

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
