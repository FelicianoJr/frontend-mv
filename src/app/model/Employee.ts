import { Establishment } from './Establishment';

export interface Employee {
  id: number;
  name: string;
  address: string;
  establishment: Establishment;
}
