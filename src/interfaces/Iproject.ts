export interface IProject {
  id: number;
  name: string;
  color: string;
  size: number;
  initialPosition: { x: number; y: number };
  initialVelocity: { x: number; y: number };
}
