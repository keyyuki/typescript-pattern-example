import { BankInterface } from './Bank.interface';

export class VpBank implements BankInterface {
  branch: string | undefined;

  getBankName(): string {
    return 'VpBank-' + this.branch;
  }
  getBranchName(): string {
    return this.branch || '';
  }
}
