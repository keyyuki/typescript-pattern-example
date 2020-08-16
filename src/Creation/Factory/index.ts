import { BankFactory, BankTypes } from './BankFactory';

const bank1 = BankFactory.getBank(BankTypes.TpBank);
const bank2 = BankFactory.getBank(BankTypes.VpBank);

console.log(bank1?.getBankName());
console.log(bank2?.getBankName());
