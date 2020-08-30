import { OrderBuiderInterface } from './OrderBuilder.interface';
import {
  OrderType,
  BreadType,
  SauceType,
  VegetableType,
} from './OrderType.enum';
import { Order } from './Order';
import { OrderInterface } from './Order.interface';

export class OrderBuilder implements OrderBuiderInterface {
  private _orderType: OrderType | undefined;
  private _breadType: BreadType | undefined;
  private _sauceType: SauceType | undefined;
  private _vegetableType: VegetableType | undefined;

  setOrderType = (orderType: OrderType): OrderBuiderInterface => {
    this._orderType = orderType;
    return this;
  };
  setBreadType = (breadType: BreadType): OrderBuiderInterface => {
    this._breadType = breadType;
    return this;
  };
  setSauceType = (sauceType: SauceType): OrderBuiderInterface => {
    this._sauceType = sauceType;
    return this;
  };
  setVegetableType = (vegetableType: VegetableType): OrderBuiderInterface => {
    this._vegetableType = vegetableType;
    return this;
  };
  build = (): OrderInterface => {
    if (
      typeof this._orderType == 'undefined' ||
      typeof this._breadType == 'undefined' ||
      typeof this._sauceType == 'undefined' ||
      typeof this._vegetableType == 'undefined'
    ) {
      throw 'Order not complete';
    }
    return new Order(
      this._orderType,
      this._breadType,
      this._sauceType,
      this._vegetableType,
    );
  };
}
