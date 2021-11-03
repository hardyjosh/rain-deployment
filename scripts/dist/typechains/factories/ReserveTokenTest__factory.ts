/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReserveTokenTest,
  ReserveTokenTestInterface,
} from "../ReserveTokenTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    name: "INITIAL_MINT",
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
        name: "address_",
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
    name: "purge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "removeFreezable",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b908401528151919291620000629160039162000300565b5080516200007890600490602084019062000300565b505060058054601260ff1990911617905550620000b933620000b3633b9aca00670de0b6b3a7640000620000bf602090811b6200082717901c565b62000126565b6200039c565b600082620000d05750600062000120565b82820282848281620000de57fe5b04146200011d5760405162461bcd60e51b8152600401808060200182810382526021815260200180620014a26021913960400191505060405180910390fd5b90505b92915050565b6001600160a01b03821662000182576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001906000838362000235565b620001ac81600254620002a560201b620008a11790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001df918390620008a1620002a5821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b03821615806200026557506001600160a01b03821660009081526006602052604090205460ff16155b620002a0576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b505050565b6000828201838110156200011d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200034357805160ff191683800117855562000373565b8280016001018555821562000373579182015b828111156200037357825182559160200191906001019062000356565b506200038192915062000385565b5090565b5b8082111562000381576000815560010162000386565b6110f680620003ac6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb14610367578063ca7df92c146103a0578063dd62ed3e146103a8578063ea49e9a2146103e357610100565b806370a08231146102eb57806370f0c3511461031e57806395d89b4114610326578063a457c2d71461032e57610100565b8063313ce567116100d3578063313ce5671461022c578063395093511461024a57806348422faa146102835780635bb9058b146102b657610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101cf57806323b872dd146101e9575b600080fd5b61010d610416565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104ca565b604080519115158252519081900360200190f35b6101d76104e8565b60408051918252519081900360200190f35b6101bb600480360360608110156101ff57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104ee565b61023461058f565b6040805160ff9092168252519081900360200190f35b6101bb6004803603604081101561026057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610598565b6101bb6004803603602081101561029957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105f3565b6102e9600480360360208110156102cc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610608565b005b6101d76004803603602081101561030157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610657565b6102e961067f565b61010d610693565b6101bb6004803603604081101561034457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610712565b6101bb6004803603604081101561037d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610787565b6101d761079b565b6101d7600480360360408110156103be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107a3565b6102e9600480360360208110156103f957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107db565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104c05780601f10610495576101008083540402835291602001916104c0565b820191906000526020600020905b8154815290600101906020018083116104a357829003601f168201915b5050505050905090565b60006104de6104d7610915565b8484610919565b5060015b92915050565b60025490565b60006104fb848484610a60565b61058584610507610915565b6105808560405180606001604052806028815260200161100a6028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260016020526040812090610552610915565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190610c30565b610919565b5060019392505050565b60055460ff1690565b60006104de6105a5610915565b8461058085600160006105b6610915565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c1681529252902054906108a1565b60066020526000908152604090205460ff1681565b73ffffffffffffffffffffffffffffffffffffffff16600090815260066020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6106913361068c33610657565b610ce1565b565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104c05780601f10610495576101008083540402835291602001916104c0565b60006104de61071f610915565b846105808560405180606001604052806025815260200161109c6025913960016000610749610915565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190610c30565b60006104de610794610915565b8484610a60565b633b9aca0081565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b73ffffffffffffffffffffffffffffffffffffffff16600090815260066020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600082610836575060006104e2565b8282028284828161084357fe5b041461089a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610fe96021913960400191505060405180910390fd5b9392505050565b60008282018381101561089a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610985576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110786024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610fa16022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610acc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110536025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610f5c6023913960400191505060405180910390fd5b610b43838383610e2b565b610b8d81604051806060016040528060268152602001610fc36026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190610c30565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610bc990826108a1565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610cd9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c9e578181015183820152602001610c86565b50505050905090810190601f168015610ccb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610d4d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806110326021913960400191505060405180910390fd5b610d5982600083610e2b565b610da381604051806060016040528060228152602001610f7f6022913973ffffffffffffffffffffffffffffffffffffffff85166000908152602081905260409020549190610c30565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254610dd69082610ee4565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b73ffffffffffffffffffffffffffffffffffffffff82161580610e74575073ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604090205460ff16155b610edf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b505050565b600082821115610f5557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207a01cc6d9c2c4858223f935e6ad0d8f43828424cbcc1b2f10b5d4fae56d73fa164736f6c634300060c0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";

export class ReserveTokenTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReserveTokenTest> {
    return super.deploy(overrides || {}) as Promise<ReserveTokenTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveTokenTest {
    return super.attach(address) as ReserveTokenTest;
  }
  connect(signer: Signer): ReserveTokenTest__factory {
    return super.connect(signer) as ReserveTokenTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveTokenTestInterface {
    return new utils.Interface(_abi) as ReserveTokenTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveTokenTest {
    return new Contract(address, _abi, signerOrProvider) as ReserveTokenTest;
  }
}
