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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__getOwnershipDataResultValue0Struct extends ethereum.Tuple {
  get addr(): Address {
    return this[0].toAddress();
  }

  get startTimestamp(): BigInt {
    return this[1].toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  amountForDevs(): i32 {
    let result = super.call("amountForDevs", "amountForDevs():(uint16)", []);

    return result[0].toI32();
  }

  try_amountForDevs(): ethereum.CallResult<i32> {
    let result = super.tryCall("amountForDevs", "amountForDevs():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentDevMintAmount(): i32 {
    let result = super.call(
      "currentDevMintAmount",
      "currentDevMintAmount():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_currentDevMintAmount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "currentDevMintAmount",
      "currentDevMintAmount():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCurrentSaleMode(): i32 {
    let result = super.call(
      "getCurrentSaleMode",
      "getCurrentSaleMode():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_getCurrentSaleMode(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getCurrentSaleMode",
      "getCurrentSaleMode():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getOwnershipData(
    tokenId: BigInt
  ): Contract__getOwnershipDataResultValue0Struct {
    let result = super.call(
      "getOwnershipData",
      "getOwnershipData(uint256):((address,uint64))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return changetype<Contract__getOwnershipDataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getOwnershipData(
    tokenId: BigInt
  ): ethereum.CallResult<Contract__getOwnershipDataResultValue0Struct> {
    let result = super.tryCall(
      "getOwnershipData",
      "getOwnershipData(uint256):((address,uint64))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contract__getOwnershipDataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  limit1(): i32 {
    let result = super.call("limit1", "limit1():(uint8)", []);

    return result[0].toI32();
  }

  try_limit1(): ethereum.CallResult<i32> {
    let result = super.tryCall("limit1", "limit1():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  limit2(): i32 {
    let result = super.call("limit2", "limit2():(uint8)", []);

    return result[0].toI32();
  }

  try_limit2(): ethereum.CallResult<i32> {
    let result = super.tryCall("limit2", "limit2():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextOwnerToExplicitlySet(): BigInt {
    let result = super.call(
      "nextOwnerToExplicitlySet",
      "nextOwnerToExplicitlySet():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nextOwnerToExplicitlySet(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextOwnerToExplicitlySet",
      "nextOwnerToExplicitlySet():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numberMinted(owner: Address): BigInt {
    let result = super.call("numberMinted", "numberMinted(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_numberMinted(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberMinted",
      "numberMinted(address):(uint256)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  preSalePrice(): BigInt {
    let result = super.call("preSalePrice", "preSalePrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_preSalePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("preSalePrice", "preSalePrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  preSaleStartTime(): BigInt {
    let result = super.call(
      "preSaleStartTime",
      "preSaleStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_preSaleStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "preSaleStartTime",
      "preSaleStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  raffleSalePrice(): BigInt {
    let result = super.call(
      "raffleSalePrice",
      "raffleSalePrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_raffleSalePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "raffleSalePrice",
      "raffleSalePrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  raffleSaleStartTime(): BigInt {
    let result = super.call(
      "raffleSaleStartTime",
      "raffleSaleStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_raffleSaleStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "raffleSaleStartTime",
      "raffleSaleStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  reservedSalePrice(): BigInt {
    let result = super.call(
      "reservedSalePrice",
      "reservedSalePrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_reservedSalePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reservedSalePrice",
      "reservedSalePrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  reservedSaleStartTime(): BigInt {
    let result = super.call(
      "reservedSaleStartTime",
      "reservedSaleStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_reservedSaleStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reservedSaleStartTime",
      "reservedSaleStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  reveal(): boolean {
    let result = super.call("reveal", "reveal():(bool)", []);

    return result[0].toBoolean();
  }

  try_reveal(): ethereum.CallResult<boolean> {
    let result = super.tryCall("reveal", "reveal():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  saleEnabled(): boolean {
    let result = super.call("saleEnabled", "saleEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_saleEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("saleEnabled", "saleEnabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  verifySigner(signature: Bytes, signer: Address): boolean {
    let result = super.call(
      "verifySigner",
      "verifySigner(bytes,address):(bool)",
      [ethereum.Value.fromBytes(signature), ethereum.Value.fromAddress(signer)]
    );

    return result[0].toBoolean();
  }

  try_verifySigner(
    signature: Bytes,
    signer: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifySigner",
      "verifySigner(bytes,address):(bool)",
      [ethereum.Value.fromBytes(signature), ethereum.Value.fromAddress(signer)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _baseURIString(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _placeholder(): string {
    return this._call.inputValues[1].value.toString();
  }

  get maxBatchSize_(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get collectionSize_(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get amountForDevs_(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class DevMintCall extends ethereum.Call {
  get inputs(): DevMintCall__Inputs {
    return new DevMintCall__Inputs(this);
  }

  get outputs(): DevMintCall__Outputs {
    return new DevMintCall__Outputs(this);
  }
}

export class DevMintCall__Inputs {
  _call: DevMintCall;

  constructor(call: DevMintCall) {
    this._call = call;
  }

  get quantity(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class DevMintCall__Outputs {
  _call: DevMintCall;

  constructor(call: DevMintCall) {
    this._call = call;
  }
}

export class PreSaleMintCall extends ethereum.Call {
  get inputs(): PreSaleMintCall__Inputs {
    return new PreSaleMintCall__Inputs(this);
  }

  get outputs(): PreSaleMintCall__Outputs {
    return new PreSaleMintCall__Outputs(this);
  }
}

export class PreSaleMintCall__Inputs {
  _call: PreSaleMintCall;

  constructor(call: PreSaleMintCall) {
    this._call = call;
  }

  get quantity(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class PreSaleMintCall__Outputs {
  _call: PreSaleMintCall;

  constructor(call: PreSaleMintCall) {
    this._call = call;
  }
}

export class RaffleSaleMintCall extends ethereum.Call {
  get inputs(): RaffleSaleMintCall__Inputs {
    return new RaffleSaleMintCall__Inputs(this);
  }

  get outputs(): RaffleSaleMintCall__Outputs {
    return new RaffleSaleMintCall__Outputs(this);
  }
}

export class RaffleSaleMintCall__Inputs {
  _call: RaffleSaleMintCall;

  constructor(call: RaffleSaleMintCall) {
    this._call = call;
  }

  get quantity(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class RaffleSaleMintCall__Outputs {
  _call: RaffleSaleMintCall;

  constructor(call: RaffleSaleMintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ReservedSaleMintCall extends ethereum.Call {
  get inputs(): ReservedSaleMintCall__Inputs {
    return new ReservedSaleMintCall__Inputs(this);
  }

  get outputs(): ReservedSaleMintCall__Outputs {
    return new ReservedSaleMintCall__Outputs(this);
  }
}

export class ReservedSaleMintCall__Inputs {
  _call: ReservedSaleMintCall;

  constructor(call: ReservedSaleMintCall) {
    this._call = call;
  }

  get quantity(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ReservedSaleMintCall__Outputs {
  _call: ReservedSaleMintCall;

  constructor(call: ReservedSaleMintCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetAmountForDevsCall extends ethereum.Call {
  get inputs(): SetAmountForDevsCall__Inputs {
    return new SetAmountForDevsCall__Inputs(this);
  }

  get outputs(): SetAmountForDevsCall__Outputs {
    return new SetAmountForDevsCall__Outputs(this);
  }
}

export class SetAmountForDevsCall__Inputs {
  _call: SetAmountForDevsCall;

  constructor(call: SetAmountForDevsCall) {
    this._call = call;
  }

  get _amountForDevs(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetAmountForDevsCall__Outputs {
  _call: SetAmountForDevsCall;

  constructor(call: SetAmountForDevsCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetLimitsCall extends ethereum.Call {
  get inputs(): SetLimitsCall__Inputs {
    return new SetLimitsCall__Inputs(this);
  }

  get outputs(): SetLimitsCall__Outputs {
    return new SetLimitsCall__Outputs(this);
  }
}

export class SetLimitsCall__Inputs {
  _call: SetLimitsCall;

  constructor(call: SetLimitsCall) {
    this._call = call;
  }

  get _limit1(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _limit2(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class SetLimitsCall__Outputs {
  _call: SetLimitsCall;

  constructor(call: SetLimitsCall) {
    this._call = call;
  }
}

export class SetPlaceHolderURICall extends ethereum.Call {
  get inputs(): SetPlaceHolderURICall__Inputs {
    return new SetPlaceHolderURICall__Inputs(this);
  }

  get outputs(): SetPlaceHolderURICall__Outputs {
    return new SetPlaceHolderURICall__Outputs(this);
  }
}

export class SetPlaceHolderURICall__Inputs {
  _call: SetPlaceHolderURICall;

  constructor(call: SetPlaceHolderURICall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetPlaceHolderURICall__Outputs {
  _call: SetPlaceHolderURICall;

  constructor(call: SetPlaceHolderURICall) {
    this._call = call;
  }
}

export class SetPreSalePriceCall extends ethereum.Call {
  get inputs(): SetPreSalePriceCall__Inputs {
    return new SetPreSalePriceCall__Inputs(this);
  }

  get outputs(): SetPreSalePriceCall__Outputs {
    return new SetPreSalePriceCall__Outputs(this);
  }
}

export class SetPreSalePriceCall__Inputs {
  _call: SetPreSalePriceCall;

  constructor(call: SetPreSalePriceCall) {
    this._call = call;
  }

  get _preSalePrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPreSalePriceCall__Outputs {
  _call: SetPreSalePriceCall;

  constructor(call: SetPreSalePriceCall) {
    this._call = call;
  }
}

export class SetRaffleSalePriceCall extends ethereum.Call {
  get inputs(): SetRaffleSalePriceCall__Inputs {
    return new SetRaffleSalePriceCall__Inputs(this);
  }

  get outputs(): SetRaffleSalePriceCall__Outputs {
    return new SetRaffleSalePriceCall__Outputs(this);
  }
}

export class SetRaffleSalePriceCall__Inputs {
  _call: SetRaffleSalePriceCall;

  constructor(call: SetRaffleSalePriceCall) {
    this._call = call;
  }

  get _raffleSalePrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRaffleSalePriceCall__Outputs {
  _call: SetRaffleSalePriceCall;

  constructor(call: SetRaffleSalePriceCall) {
    this._call = call;
  }
}

export class SetReservedSalePriceCall extends ethereum.Call {
  get inputs(): SetReservedSalePriceCall__Inputs {
    return new SetReservedSalePriceCall__Inputs(this);
  }

  get outputs(): SetReservedSalePriceCall__Outputs {
    return new SetReservedSalePriceCall__Outputs(this);
  }
}

export class SetReservedSalePriceCall__Inputs {
  _call: SetReservedSalePriceCall;

  constructor(call: SetReservedSalePriceCall) {
    this._call = call;
  }

  get _reservedSalePrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetReservedSalePriceCall__Outputs {
  _call: SetReservedSalePriceCall;

  constructor(call: SetReservedSalePriceCall) {
    this._call = call;
  }
}

export class SetRevealCall extends ethereum.Call {
  get inputs(): SetRevealCall__Inputs {
    return new SetRevealCall__Inputs(this);
  }

  get outputs(): SetRevealCall__Outputs {
    return new SetRevealCall__Outputs(this);
  }
}

export class SetRevealCall__Inputs {
  _call: SetRevealCall;

  constructor(call: SetRevealCall) {
    this._call = call;
  }

  get _reveal(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetRevealCall__Outputs {
  _call: SetRevealCall;

  constructor(call: SetRevealCall) {
    this._call = call;
  }
}

export class SetSignersCall extends ethereum.Call {
  get inputs(): SetSignersCall__Inputs {
    return new SetSignersCall__Inputs(this);
  }

  get outputs(): SetSignersCall__Outputs {
    return new SetSignersCall__Outputs(this);
  }
}

export class SetSignersCall__Inputs {
  _call: SetSignersCall;

  constructor(call: SetSignersCall) {
    this._call = call;
  }

  get _presaleSigner1(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _presaleSigner2(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _raffleSaleSigner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _reservedSaleSigner(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SetSignersCall__Outputs {
  _call: SetSignersCall;

  constructor(call: SetSignersCall) {
    this._call = call;
  }
}

export class StartPreSaleAtCall extends ethereum.Call {
  get inputs(): StartPreSaleAtCall__Inputs {
    return new StartPreSaleAtCall__Inputs(this);
  }

  get outputs(): StartPreSaleAtCall__Outputs {
    return new StartPreSaleAtCall__Outputs(this);
  }
}

export class StartPreSaleAtCall__Inputs {
  _call: StartPreSaleAtCall;

  constructor(call: StartPreSaleAtCall) {
    this._call = call;
  }

  get startTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StartPreSaleAtCall__Outputs {
  _call: StartPreSaleAtCall;

  constructor(call: StartPreSaleAtCall) {
    this._call = call;
  }
}

export class StartRaffleSaleAtCall extends ethereum.Call {
  get inputs(): StartRaffleSaleAtCall__Inputs {
    return new StartRaffleSaleAtCall__Inputs(this);
  }

  get outputs(): StartRaffleSaleAtCall__Outputs {
    return new StartRaffleSaleAtCall__Outputs(this);
  }
}

export class StartRaffleSaleAtCall__Inputs {
  _call: StartRaffleSaleAtCall;

  constructor(call: StartRaffleSaleAtCall) {
    this._call = call;
  }

  get startTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StartRaffleSaleAtCall__Outputs {
  _call: StartRaffleSaleAtCall;

  constructor(call: StartRaffleSaleAtCall) {
    this._call = call;
  }
}

export class StartReservedSaleAtCall extends ethereum.Call {
  get inputs(): StartReservedSaleAtCall__Inputs {
    return new StartReservedSaleAtCall__Inputs(this);
  }

  get outputs(): StartReservedSaleAtCall__Outputs {
    return new StartReservedSaleAtCall__Outputs(this);
  }
}

export class StartReservedSaleAtCall__Inputs {
  _call: StartReservedSaleAtCall;

  constructor(call: StartReservedSaleAtCall) {
    this._call = call;
  }

  get startTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StartReservedSaleAtCall__Outputs {
  _call: StartReservedSaleAtCall;

  constructor(call: StartReservedSaleAtCall) {
    this._call = call;
  }
}

export class ToggleSaleCall extends ethereum.Call {
  get inputs(): ToggleSaleCall__Inputs {
    return new ToggleSaleCall__Inputs(this);
  }

  get outputs(): ToggleSaleCall__Outputs {
    return new ToggleSaleCall__Outputs(this);
  }
}

export class ToggleSaleCall__Inputs {
  _call: ToggleSaleCall;

  constructor(call: ToggleSaleCall) {
    this._call = call;
  }

  get _enable(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class ToggleSaleCall__Outputs {
  _call: ToggleSaleCall;

  constructor(call: ToggleSaleCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawMoneyCall extends ethereum.Call {
  get inputs(): WithdrawMoneyCall__Inputs {
    return new WithdrawMoneyCall__Inputs(this);
  }

  get outputs(): WithdrawMoneyCall__Outputs {
    return new WithdrawMoneyCall__Outputs(this);
  }
}

export class WithdrawMoneyCall__Inputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }
}

export class WithdrawMoneyCall__Outputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }
}
