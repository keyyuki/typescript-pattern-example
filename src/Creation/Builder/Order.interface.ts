import {
  BreadType,
  OrderType,
  SauceType,
  VegetableType,
} from './OrderType.enum';

export interface OrderInterface {
  breadType: BreadType;
  orderType: OrderType;
  sauceType: SauceType;
  vegetableType: VegetableType;

  printOrder: () => void;
}
