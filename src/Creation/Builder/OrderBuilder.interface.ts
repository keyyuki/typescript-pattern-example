import {
  BreadType,
  OrderType,
  SauceType,
  VegetableType,
} from './OrderType.enum';
import { OrderInterface } from './Order.interface';

export interface OrderBuiderInterface {
  setOrderType: (orderType: OrderType) => OrderBuiderInterface;
  setBreadType: (breadType: BreadType) => OrderBuiderInterface;
  setSauceType: (sauceType: SauceType) => OrderBuiderInterface;
  setVegetableType: (vegetableType: VegetableType) => OrderBuiderInterface;
  build: () => OrderInterface;
}
