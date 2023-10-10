
import { Robot } from '../models/robot';
import {User} from './user';
export class Transaction {
  id:number;
  product: Robot;
  user: User;
  purchaseDate: any;
}
