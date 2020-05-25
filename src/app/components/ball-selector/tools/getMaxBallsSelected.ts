export function getMaxBallsSelected(numberOfBalls: number, percentage: number) {
  return Math.floor((numberOfBalls * percentage) / 100);
}
