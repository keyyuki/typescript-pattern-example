import { Singleton } from './Singleton';

const a = Singleton.getInstance().addNum();
const b = Singleton.getInstance().addNum();

console.log(a);
console.log(b);
