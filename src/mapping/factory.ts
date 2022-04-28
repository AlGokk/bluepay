import { BigInt } from '@graphprotocol/graph-ts';
import {
  OrderBookCreated,
  PaymentSystemCreated,
} from '../../generated/BlueberryPayFactory/BlueberryPayFactory';
import { Factory, PaymentSystem, OrderBook } from '../../generated/schema';
// This is templae not schema
import { FACTORY_ADDRESS } from './helper';
export function handlePaymentSystemCreated(event: PaymentSystemCreated): void {
  let factory = Factory.load(FACTORY_ADDRESS);
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS);
    factory.orderBookCount = 0;
  }
  let timestamp = event.block.timestamp;
  let entity = new PaymentSystem(
    event.params._paymentSystemOwner.toHexString()
  );
  entity.count = entity.count + BigInt.fromI32(1);
  entity._paymentSystemOwner = event.params._paymentSystemOwner;
  entity._paymentSystemUID = event.params._paymentSystemUID;
  entity._timestamp = timestamp;
  // Entities can be written to the store with `.save()`
  entity.save();
  factory.save();
}

export function handleOrderBookCreated(event: OrderBookCreated): void {
  let timestamp = event.block.timestamp;
  let entity = new OrderBook(
    event.params.orderBookUID.toHexString()
  ) as OrderBook;
  entity.count = entity.count + BigInt.fromI32(1);
  entity._paymentSystemOwner = event.params._paymentSystemOwner;
  entity._paymentSystemUID = event.params._paymentSystemUID;
  entity._orderBookUID = event.params.orderBookUID;
  entity._timestamp = timestamp;

  entity.save();
}

//export function handleOrderBookCreated(event: OrderBookCreated): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex());

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex());

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0);
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1);

//   // Entity fields can be set based on event parameters
//   entity._paymentSystemOwner = event.params._paymentSystemOwner;
//   entity._paymentSystemUID = event.params._paymentSystemUID;

//   // Entities can be written to the store with `.save()`
//   entity.save();

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.WETH(...)
//   // - contract.allMerchants(...)
//   // - contract.createPaymentSystem(...)
//   // - contract.feeTo(...)
//   // - contract.feeToSetter(...)
//   // - contract.getOrderBook(...)
//   // - contract.getPaymentSystem(...)
//   // - contract.initCodeHashMerchant(...)
//   // - contract.initCodeHashOrderBook(...)
//   // - contract.mediator(...)
// }
