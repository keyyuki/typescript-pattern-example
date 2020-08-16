import { BankInterface } from './Bank.interface';

export class TpBank implements BankInterface {
  getBankName(): string {
    return 'TpBank';
  }
}
