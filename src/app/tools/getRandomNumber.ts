import { NumberInterval } from '../components/ball-selector/models';

export function getRandomNumber(interval: NumberInterval): number {
 return Math.floor((Math.random() * interval.lastNumber) + interval.firstNumber);
}
