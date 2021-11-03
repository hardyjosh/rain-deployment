/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SeedERC20ForceSendEther,
  SeedERC20ForceSendEtherInterface,
} from "../SeedERC20ForceSendEther";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "contract SeedERC20",
        name: "seedERC20Contract_",
        type: "address",
      },
    ],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060988061001e6000396000f3fe608060405260043610601e5760003560e01c8062f55d9d146026576024565b36602457005b005b348015603157600080fd5b50602460048036036020811015604657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff168080fffea2646970667358221220e6d78f8a038df5a22a0157fa889d2d88f6036def10fb39cef278cc3b0a0cf4eb64736f6c634300060c0033";

export class SeedERC20ForceSendEther__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SeedERC20ForceSendEther> {
    return super.deploy(overrides || {}) as Promise<SeedERC20ForceSendEther>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SeedERC20ForceSendEther {
    return super.attach(address) as SeedERC20ForceSendEther;
  }
  connect(signer: Signer): SeedERC20ForceSendEther__factory {
    return super.connect(signer) as SeedERC20ForceSendEther__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeedERC20ForceSendEtherInterface {
    return new utils.Interface(_abi) as SeedERC20ForceSendEtherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeedERC20ForceSendEther {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SeedERC20ForceSendEther;
  }
}
