import { BankInterface } from './Bank.interface';

export class VpBank implements BankInterface {
  branch: string;
  constructor(branch: string) {
    this.branch = branch;
  }

  getBankName(): string {
    return 'VpBank-' + this.branch;
  }
}
