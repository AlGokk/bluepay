import { BigInt } from '@graphprotocol/graph-ts';

import {
  OrderCreated,
  OrderUpdated,
} from '../../generated/templates/BlueberryPayOrderBook/BlueberryPayOrderBook';
import { Order } from '../../generated/schema';
import { BlueberryPayOrderBook as BlueberryPayOrderBookTemplate } from '../../generated/templates';

export function handleOrderCreated(event: OrderCreated): void {
  let timestamp = event.block.timestamp;

  let entity = Order.load(event.transaction.from.toHex());

  if (!entity) {
    entity = new Order(event.transaction.from.toHex());
    entity.count = entity.count + BigInt.fromI32(1);
  }
  entity._seller = event.params._seller;
  entity._customer = event.params._customer;
  entity._orderID = event.params._orderID;
  entity._amount = event.params._amount;
  entity._status = BigInt.fromI32(event.params._status);
  entity._timestamp = timestamp;
  entity.save();
}

export function handleOrderUpdated(event: OrderUpdated): void {
  let timestamp = event.block.timestamp;
  let entity = Order.load(event.transaction.from.toHex());

  if (!entity) {
    entity = new Order(event.transaction.from.toHex());
    entity.count = entity.count + BigInt.fromI32(1);
  }

  entity._seller = event.params._seller;
  entity._customer = event.params._customer;
  entity._orderID = event.params._orderID;
  entity._amount = event.params._amount;
  entity._status = BigInt.fromI32(event.params._status);
  entity._timestamp = timestamp;
  entity.save();
}
