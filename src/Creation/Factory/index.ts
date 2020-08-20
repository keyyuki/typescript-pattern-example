import { TpBank } from './TpBank';
import { VpBank } from './VpBank';
import { BankFactory } from './BankFactory';

const bank1 = BankFactory.getBank(TpBank);
const bank2 = BankFactory.getBank(VpBank);

console.log(bank1?.getBankName());
console.log(bank2?.getBranchName());
