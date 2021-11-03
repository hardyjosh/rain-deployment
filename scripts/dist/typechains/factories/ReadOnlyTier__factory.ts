/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ReadOnlyTier, ReadOnlyTierInterface } from "../ReadOnlyTier";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum ITier.Tier",
        name: "startTier",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "enum ITier.Tier",
        name: "endTier",
        type: "uint8",
      },
    ],
    name: "TierChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "report",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum ITier.Tier",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "setTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ReadOnlyTier__factory {
  static readonly abi = _abi;
  static createInterface(): ReadOnlyTierInterface {
    return new utils.Interface(_abi) as ReadOnlyTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReadOnlyTier {
    return new Contract(address, _abi, signerOrProvider) as ReadOnlyTier;
  }
}
