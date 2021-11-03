/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TrustReentrant,
  TrustReentrantInterface,
} from "../TrustReentrant";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
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
        name: "account_",
        type: "address",
      },
    ],
    name: "addFreezable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Trust",
        name: "trustContract_",
        type: "address",
      },
    ],
    name: "addReentrantTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b908401528151919291620000629160039162000358565b5080516200007890600490602084019062000358565b50506005805460ff1916601217905550620000946006620000ad565b620000a73366038d7ea4c68000620000c3565b620003f4565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166200011f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200012d60008383620001d2565b62000149816002546200028660201b6200090f1790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200017c9183906200090f62000286821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b620001ea838383620002e860201b6200098a1760201c565b6001600160a01b038316158015906200021057506007546001600160a01b038481169116145b156200028157600760009054906101000a90046001600160a01b03166001600160a01b03166379c4985c6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200026757600080fd5b505af11580156200027c573d6000803e3d6000fd5b505050505b505050565b600082820183811015620002e1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b620003008383836200028160201b620007bf1760201c565b6001600160a01b03821660009081526006602052604090205460ff161562000281576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039b57805160ff1916838001178555620003cb565b82800160010185558215620003cb579182015b82811115620003cb578251825591602001919060010190620003ae565b50620003d9929150620003dd565b5090565b5b80821115620003d95760008155600101620003de565b61122b80620004046000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806348ea30da116100b2578063902d55a511610081578063a457c2d711610066578063a457c2d7146103f5578063a9059cbb1461042e578063dd62ed3e1461046757610136565b8063902d55a5146103e557806395d89b41146103ed57610136565b806348ea30da146103135780635bb9058b1461034657806370a082311461037957806379cc6790146103ac57610136565b80632e0f26251161010957806339509351116100ee578063395093511461028857806342966c68146102c157806348422faa146102e057610136565b80632e0f262514610262578063313ce5671461028057610136565b806306fdde031461013b578063095ea7b3146101b857806318160ddd1461020557806323b872dd1461021f575b600080fd5b6101436104a2565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017d578181015183820152602001610165565b50505050905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f1600480360360408110156101ce57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610556565b604080519115158252519081900360200190f35b61020d610573565b60408051918252519081900360200190f35b6101f16004803603606081101561023557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610579565b61026a61061a565b6040805160ff9092168252519081900360200190f35b61026a61061f565b6101f16004803603604081101561029e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610628565b6102de600480360360208110156102d757600080fd5b5035610683565b005b6101f1600480360360208110156102f657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610697565b6102de6004803603602081101561032957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106ac565b6102de6004803603602081101561035c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106f3565b61020d6004803603602081101561038f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610742565b6102de600480360360408110156103c257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561076a565b61020d6107c4565b6101436107cf565b6101f16004803603604081101561040b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561084e565b6101f16004803603604081101561044457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108c3565b61020d6004803603604081101561047d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166108d7565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b5050505050905090565b600061056a610563610a2a565b8484610a2e565b50600192915050565b60025490565b6000610586848484610b75565b61061084610592610a2a565b61060b8560405180606001604052806028815260200161111b6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906105dd610a2a565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190610d45565b610a2e565b5060019392505050565b600681565b60055460ff1690565b600061056a610635610a2a565b8461060b8560016000610646610a2a565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549061090f565b61069461068e610a2a565b82610df6565b50565b60066020526000908152604090205460ff1681565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff16600090815260066020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60006107a1826040518060600160405280602481526020016111436024913961079a86610795610a2a565b6108d7565b9190610d45565b90506107b5836107af610a2a565b83610a2e565b6107bf8383610df6565b505050565b66038d7ea4c6800081565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054c5780601f106105215761010080835404028352916020019161054c565b600061056a61085b610a2a565b8461060b856040518060600160405280602581526020016111d16025913960016000610885610a2a565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190610d45565b600061056a6108d0610a2a565b8484610b75565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561098357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6109958383836107bf565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604090205460ff16156107bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610a9a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806111ad6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806110d36022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610be1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806111886025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061108e6023913960400191505060405180910390fd5b610c58838383610f40565b610ca2816040518060600160405280602681526020016110f56026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190610d45565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610cde908261090f565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610dee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610db3578181015183820152602001610d9b565b50505050905090810190601f168015610de05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610e62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806111676021913960400191505060405180910390fd5b610e6e82600083610f40565b610eb8816040518060600160405280602281526020016110b16022913973ffffffffffffffffffffffffffffffffffffffff85166000908152602081905260409020549190610d45565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254610eeb9082611016565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610f4b83838361098a565b73ffffffffffffffffffffffffffffffffffffffff831615801590610f8a575060075473ffffffffffffffffffffffffffffffffffffffff8481169116145b156107bf57600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166379c4985c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610ff957600080fd5b505af115801561100d573d6000803e3d6000fd5b50505050505050565b60008282111561108757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212202e7696e440928a8685123c5110f048670ab4fad38d59a10820964227459b03a464736f6c634300060c0033";

export class TrustReentrant__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrustReentrant> {
    return super.deploy(overrides || {}) as Promise<TrustReentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrustReentrant {
    return super.attach(address) as TrustReentrant;
  }
  connect(signer: Signer): TrustReentrant__factory {
    return super.connect(signer) as TrustReentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustReentrantInterface {
    return new utils.Interface(_abi) as TrustReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustReentrant {
    return new Contract(address, _abi, signerOrProvider) as TrustReentrant;
  }
}
