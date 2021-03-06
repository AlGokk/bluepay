// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OrderBookCreated extends ethereum.Event {
  get params(): OrderBookCreated__Params {
    return new OrderBookCreated__Params(this);
  }
}

export class OrderBookCreated__Params {
  _event: OrderBookCreated;

  constructor(event: OrderBookCreated) {
    this._event = event;
  }

  get _paymentSystemOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _paymentSystemUID(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get orderBookUID(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PaymentSystemCreated extends ethereum.Event {
  get params(): PaymentSystemCreated__Params {
    return new PaymentSystemCreated__Params(this);
  }
}

export class PaymentSystemCreated__Params {
  _event: PaymentSystemCreated;

  constructor(event: PaymentSystemCreated) {
    this._event = event;
  }

  get _paymentSystemOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _paymentSystemUID(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get param2(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BlueberryPayFactory__createPaymentSystemResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class BlueberryPayFactory extends ethereum.SmartContract {
  static bind(address: Address): BlueberryPayFactory {
    return new BlueberryPayFactory("BlueberryPayFactory", address);
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allMerchants(param0: BigInt): Address {
    let result = super.call("allMerchants", "allMerchants(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_allMerchants(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "allMerchants",
      "allMerchants(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createPaymentSystem(
    _paymentSystemOwner: Address,
    _paymentID: BigInt
  ): BlueberryPayFactory__createPaymentSystemResult {
    let result = super.call(
      "createPaymentSystem",
      "createPaymentSystem(address,uint256):(address,address)",
      [
        ethereum.Value.fromAddress(_paymentSystemOwner),
        ethereum.Value.fromUnsignedBigInt(_paymentID)
      ]
    );

    return new BlueberryPayFactory__createPaymentSystemResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_createPaymentSystem(
    _paymentSystemOwner: Address,
    _paymentID: BigInt
  ): ethereum.CallResult<BlueberryPayFactory__createPaymentSystemResult> {
    let result = super.tryCall(
      "createPaymentSystem",
      "createPaymentSystem(address,uint256):(address,address)",
      [
        ethereum.Value.fromAddress(_paymentSystemOwner),
        ethereum.Value.fromUnsignedBigInt(_paymentID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BlueberryPayFactory__createPaymentSystemResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  feeTo(): Address {
    let result = super.call("feeTo", "feeTo():(address)", []);

    return result[0].toAddress();
  }

  try_feeTo(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeTo", "feeTo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeToSetter(): Address {
    let result = super.call("feeToSetter", "feeToSetter():(address)", []);

    return result[0].toAddress();
  }

  try_feeToSetter(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeToSetter", "feeToSetter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOrderBook(param0: Address): Address {
    let result = super.call("getOrderBook", "getOrderBook(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_getOrderBook(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getOrderBook",
      "getOrderBook(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPaymentSystem(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "getPaymentSystem",
      "getPaymentSystem(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_getPaymentSystem(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPaymentSystem",
      "getPaymentSystem(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  initCodeHashMerchant(): Bytes {
    let result = super.call(
      "initCodeHashMerchant",
      "initCodeHashMerchant():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_initCodeHashMerchant(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "initCodeHashMerchant",
      "initCodeHashMerchant():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  initCodeHashOrderBook(): Bytes {
    let result = super.call(
      "initCodeHashOrderBook",
      "initCodeHashOrderBook():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_initCodeHashOrderBook(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "initCodeHashOrderBook",
      "initCodeHashOrderBook():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  mediator(): Address {
    let result = super.call("mediator", "mediator():(address)", []);

    return result[0].toAddress();
  }

  try_mediator(): ethereum.CallResult<Address> {
    let result = super.tryCall("mediator", "mediator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _feeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _WETH(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePaymentSystemCall extends ethereum.Call {
  get inputs(): CreatePaymentSystemCall__Inputs {
    return new CreatePaymentSystemCall__Inputs(this);
  }

  get outputs(): CreatePaymentSystemCall__Outputs {
    return new CreatePaymentSystemCall__Outputs(this);
  }
}

export class CreatePaymentSystemCall__Inputs {
  _call: CreatePaymentSystemCall;

  constructor(call: CreatePaymentSystemCall) {
    this._call = call;
  }

  get _paymentSystemOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _paymentID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreatePaymentSystemCall__Outputs {
  _call: CreatePaymentSystemCall;

  constructor(call: CreatePaymentSystemCall) {
    this._call = call;
  }

  get paymentSystemUID(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get orderBookUID(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}

export class SetFeeToCall extends ethereum.Call {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get _feeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetFeeToSetterCall extends ethereum.Call {
  get inputs(): SetFeeToSetterCall__Inputs {
    return new SetFeeToSetterCall__Inputs(this);
  }

  get outputs(): SetFeeToSetterCall__Outputs {
    return new SetFeeToSetterCall__Outputs(this);
  }
}

export class SetFeeToSetterCall__Inputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToSetterCall__Outputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }
}

export class SetMediatorCall extends ethereum.Call {
  get inputs(): SetMediatorCall__Inputs {
    return new SetMediatorCall__Inputs(this);
  }

  get outputs(): SetMediatorCall__Outputs {
    return new SetMediatorCall__Outputs(this);
  }
}

export class SetMediatorCall__Inputs {
  _call: SetMediatorCall;

  constructor(call: SetMediatorCall) {
    this._call = call;
  }

  get _mediator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMediatorCall__Outputs {
  _call: SetMediatorCall;

  constructor(call: SetMediatorCall) {
    this._call = call;
  }
}
