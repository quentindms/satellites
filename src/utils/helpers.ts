import { SatellitePosition } from "../../types/satellites";

export const roundNumber = (position: number, decimal: number = 4) => {
  const multiplier = Math.pow(10, decimal);
  return Math.round((position + Number.EPSILON) * multiplier) / multiplier;
};

export const sortByOrbitalVelocityFn = (
  satA: SatellitePosition,
  satB: SatellitePosition
) => {
  // Orbital speed = √(GM/r), so the closest satellite will have the higher orbital speed.
  return satA.positions[0].sataltitude - satB.positions[0].sataltitude;
};

const M = 5.9736e24;
const G = 6.6743e-11;

export const computeOrbitalSpeed = (altitude: number) =>
  roundNumber(Math.sqrt((M * G) / (altitude * 1e3)), 2);
