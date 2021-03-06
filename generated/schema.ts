// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PaymentSystem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("_paymentSystemOwner", Value.fromBytes(Bytes.empty()));
    this.set("_paymentSystemUID", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PaymentSystem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PaymentSystem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PaymentSystem", id.toString(), this);
    }
  }

  static load(id: string): PaymentSystem | null {
    return changetype<PaymentSystem | null>(store.get("PaymentSystem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get _paymentSystemOwner(): Bytes {
    let value = this.get("_paymentSystemOwner");
    return value!.toBytes();
  }

  set _paymentSystemOwner(value: Bytes) {
    this.set("_paymentSystemOwner", Value.fromBytes(value));
  }

  get _paymentSystemUID(): Bytes {
    let value = this.get("_paymentSystemUID");
    return value!.toBytes();
  }

  set _paymentSystemUID(value: Bytes) {
    this.set("_paymentSystemUID", Value.fromBytes(value));
  }

  get _timestamp(): BigInt | null {
    let value = this.get("_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("_timestamp");
    } else {
      this.set("_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class OrderBook extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("_paymentSystemOwner", Value.fromBytes(Bytes.empty()));
    this.set("_paymentSystemUID", Value.fromBytes(Bytes.empty()));
    this.set("_orderBookUID", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OrderBook entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OrderBook must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OrderBook", id.toString(), this);
    }
  }

  static load(id: string): OrderBook | null {
    return changetype<OrderBook | null>(store.get("OrderBook", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get _paymentSystemOwner(): Bytes {
    let value = this.get("_paymentSystemOwner");
    return value!.toBytes();
  }

  set _paymentSystemOwner(value: Bytes) {
    this.set("_paymentSystemOwner", Value.fromBytes(value));
  }

  get _paymentSystemUID(): Bytes {
    let value = this.get("_paymentSystemUID");
    return value!.toBytes();
  }

  set _paymentSystemUID(value: Bytes) {
    this.set("_paymentSystemUID", Value.fromBytes(value));
  }

  get _orderBookUID(): Bytes {
    let value = this.get("_orderBookUID");
    return value!.toBytes();
  }

  set _orderBookUID(value: Bytes) {
    this.set("_orderBookUID", Value.fromBytes(value));
  }

  get _timestamp(): BigInt | null {
    let value = this.get("_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("_timestamp");
    } else {
      this.set("_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get orders(): Array<string> {
    let value = this.get("orders");
    return value!.toStringArray();
  }

  set orders(value: Array<string>) {
    this.set("orders", Value.fromStringArray(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("_seller", Value.fromBytes(Bytes.empty()));
    this.set("_customer", Value.fromBytes(Bytes.empty()));
    this.set("_orderID", Value.fromBigInt(BigInt.zero()));
    this.set("_amount", Value.fromBigInt(BigInt.zero()));
    this.set("_status", Value.fromBigInt(BigInt.zero()));
    this.set("order", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Order entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Order must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Order", id.toString(), this);
    }
  }

  static load(id: string): Order | null {
    return changetype<Order | null>(store.get("Order", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get _seller(): Bytes {
    let value = this.get("_seller");
    return value!.toBytes();
  }

  set _seller(value: Bytes) {
    this.set("_seller", Value.fromBytes(value));
  }

  get _customer(): Bytes {
    let value = this.get("_customer");
    return value!.toBytes();
  }

  set _customer(value: Bytes) {
    this.set("_customer", Value.fromBytes(value));
  }

  get _orderID(): BigInt {
    let value = this.get("_orderID");
    return value!.toBigInt();
  }

  set _orderID(value: BigInt) {
    this.set("_orderID", Value.fromBigInt(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _status(): BigInt {
    let value = this.get("_status");
    return value!.toBigInt();
  }

  set _status(value: BigInt) {
    this.set("_status", Value.fromBigInt(value));
  }

  get _timestamp(): BigInt | null {
    let value = this.get("_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("_timestamp");
    } else {
      this.set("_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get order(): string {
    let value = this.get("order");
    return value!.toString();
  }

  set order(value: string) {
    this.set("order", Value.fromString(value));
  }
}
