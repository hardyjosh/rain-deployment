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

interface PhasedInterface extends ethers.utils.Interface {
  functions: {
    "UNINITIALIZED()": FunctionFragment;
    "blockNumberForPhase(uint32[8],uint8)": FunctionFragment;
    "currentPhase()": FunctionFragment;
    "phaseAtBlockNumber(uint32[8],uint32)": FunctionFragment;
    "phaseBlocks(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "UNINITIALIZED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockNumberForPhase",
    values: [
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentPhase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "phaseAtBlockNumber",
    values: [
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "phaseBlocks",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "UNINITIALIZED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockNumberForPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseAtBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseBlocks",
    data: BytesLike
  ): Result;

  events: {
    "PhaseShiftScheduled(uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PhaseShiftScheduled"): EventFragment;
}

export type PhaseShiftScheduledEvent = TypedEvent<
  [number] & { newPhaseBlock_: number }
>;

export class Phased extends BaseContract {
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

  interface: PhasedInterface;

  functions: {
    UNINITIALIZED(overrides?: CallOverrides): Promise<[number]>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    currentPhase(overrides?: CallOverrides): Promise<[number]>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  UNINITIALIZED(overrides?: CallOverrides): Promise<number>;

  blockNumberForPhase(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  currentPhase(overrides?: CallOverrides): Promise<number>;

  phaseAtBlockNumber(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  callStatic: {
    UNINITIALIZED(overrides?: CallOverrides): Promise<number>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    currentPhase(overrides?: CallOverrides): Promise<number>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "PhaseShiftScheduled(uint32)"(
      newPhaseBlock_?: BigNumberish | null
    ): TypedEventFilter<[number], { newPhaseBlock_: number }>;

    PhaseShiftScheduled(
      newPhaseBlock_?: BigNumberish | null
    ): TypedEventFilter<[number], { newPhaseBlock_: number }>;
  };

  estimateGas: {
    UNINITIALIZED(overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UNINITIALIZED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
