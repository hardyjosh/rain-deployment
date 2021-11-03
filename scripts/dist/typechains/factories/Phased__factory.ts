/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Phased, PhasedInterface } from "../Phased";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "newPhaseBlock_",
        type: "uint32",
      },
    ],
    name: "PhaseShiftScheduled",
    type: "event",
  },
  {
    inputs: [],
    name: "UNINITIALIZED",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[8]",
        name: "phaseBlocks_",
        type: "uint32[8]",
      },
      {
        internalType: "enum Phase",
        name: "phase_",
        type: "uint8",
      },
    ],
    name: "blockNumberForPhase",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPhase",
    outputs: [
      {
        internalType: "enum Phase",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[8]",
        name: "phaseBlocks_",
        type: "uint32[8]",
      },
      {
        internalType: "uint32",
        name: "blockNumber_",
        type: "uint32",
      },
    ],
    name: "phaseAtBlockNumber",
    outputs: [
      {
        internalType: "enum Phase",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "phaseBlocks",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Phased__factory {
  static readonly abi = _abi;
  static createInterface(): PhasedInterface {
    return new utils.Interface(_abi) as PhasedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Phased {
    return new Contract(address, _abi, signerOrProvider) as Phased;
  }
}
