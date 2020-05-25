export interface Result {
  ball: number;
  result: string;
  prize: number;
}

export enum ResultType {
  winner =  'winner',
  lose = 'lose'
}
