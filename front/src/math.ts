import { cx0, r0, cy0 } from "./constant";

export const getAngleFromIndex = (i: number, samples: number) =>
  (i * (Math.PI * 2)) / samples;

export const getPointOnCircleFromAngle = (angle: number) => {
  const x = cx0 + Math.cos(angle) * r0;
  const y = cy0 + Math.sin(angle) * r0;
  return { x, y };
};
