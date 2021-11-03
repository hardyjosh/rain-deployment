/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TierUtilTestInterface extends ethers.utils.Interface {
  functions: {
    "tierAtBlockFromReport(uint256,uint256)": FunctionFragment;
    "tierBlock(uint256,uint8)": FunctionFragment;
    "truncateTiersAbove(uint256,uint8)": FunctionFragment;
    "updateBlocksForTierRange(uint256,uint8,uint8,uint256)": FunctionFragment;
    "updateReportWithTierAtBlock(uint256,uint8,uint8,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tierAtBlockFromReport",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tierBlock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "truncateTiersAbove",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBlocksForTierRange",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReportWithTierAtBlock",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "tierAtBlockFromReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tierBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "truncateTiersAbove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBlocksForTierRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReportWithTierAtBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export class TierUtilTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TierUtilTestInterface;

  functions: {
    tierAtBlockFromReport(
      report_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    tierBlock(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    truncateTiersAbove(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateBlocksForTierRange(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateReportWithTierAtBlock(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  tierAtBlockFromReport(
    report_: BigNumberish,
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  tierBlock(
    report_: BigNumberish,
    tier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  truncateTiersAbove(
    report_: BigNumberish,
    tier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateBlocksForTierRange(
    report_: BigNumberish,
    startTier_: BigNumberish,
    endTier_: BigNumberish,
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateReportWithTierAtBlock(
    report_: BigNumberish,
    startTier_: BigNumberish,
    endTier_: BigNumberish,
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    tierAtBlockFromReport(
      report_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    tierBlock(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truncateTiersAbove(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateBlocksForTierRange(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateReportWithTierAtBlock(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    tierAtBlockFromReport(
      report_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierBlock(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truncateTiersAbove(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateBlocksForTierRange(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateReportWithTierAtBlock(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tierAtBlockFromReport(
      report_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tierBlock(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    truncateTiersAbove(
      report_: BigNumberish,
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateBlocksForTierRange(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateReportWithTierAtBlock(
      report_: BigNumberish,
      startTier_: BigNumberish,
      endTier_: BigNumberish,
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
