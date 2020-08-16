import { TpBank } from './TpBank';
import { VpBank } from './VpBank';
import { BankInterface } from './Bank.interface';

export enum BankTypes {
  TpBank,
  VpBank,
}

export class BankFactory {
  static getBank(bankType: BankTypes): BankInterface | null {
    if (bankType == BankTypes.TpBank) {
      return new TpBank();
    }
    if (bankType == BankTypes.VpBank) {
      return new VpBank('noi_bai'); // may be change branch to process.env.VpBankBranch
    }
    return null;
  }
}
