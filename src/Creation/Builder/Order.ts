import { OrderInterface } from './Order.interface';
import {
  OrderType,
  BreadType,
  SauceType,
  VegetableType,
} from './OrderType.enum';

export class Order implements OrderInterface {
  breadType: BreadType;
  orderType: OrderType;
  sauceType: SauceType;
  vegetableType: VegetableType;
  constructor(
    orderType: OrderType,
    breadType: BreadType,
    sauceType: SauceType,
    vegetableType: VegetableType,
  ) {
    this.orderType = orderType;
    this.breadType = breadType;
    this.sauceType = sauceType;
    this.vegetableType = vegetableType;
  }

  printOrder = (): void => {
    console.log('Print order =========', this);
  };
}
