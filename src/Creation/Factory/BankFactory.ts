import { VpBank } from './VpBank';
import { BankInterface } from './Bank.interface';

export class BankFactory {
  static getBank<T extends BankInterface>(bankClass: { new (): T }): T {
    const obj: T = new bankClass();
    if (obj instanceof VpBank) {
      obj.branch = 'hoan kiem';
    }
    return obj;
  }
}
