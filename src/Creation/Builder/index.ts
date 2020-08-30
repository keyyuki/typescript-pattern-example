import { OrderBuilder } from './OrderBuilder';
import {
  OrderType,
  BreadType,
  SauceType,
  VegetableType,
} from './OrderType.enum';

function fakeRequest(time: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

async function createOrder(): Promise<void> {
  const orderBuilder = new OrderBuilder();
  // wait a request
  await fakeRequest(1000);
  orderBuilder.setOrderType(OrderType.ON_SITE);
  // wait bread chosen
  await fakeRequest(1000);
  orderBuilder.setBreadType(BreadType.BEEF);
  // wait sauce chosen
  await fakeRequest(1000);
  orderBuilder.setSauceType(SauceType.KETCHUP);
  // wait vegetable chosen
  await fakeRequest(1000);
  orderBuilder.setVegetableType(VegetableType.SALAD);

  const order = orderBuilder.build();

  order.printOrder();
}

createOrder();
