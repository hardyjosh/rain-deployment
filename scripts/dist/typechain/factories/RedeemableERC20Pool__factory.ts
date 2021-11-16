/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RedeemableERC20Pool } from "../RedeemableERC20Pool";

export class RedeemableERC20Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    config_: {
      crpFactory: string;
      balancerFactory: string;
      reserve: string;
      token: string;
      reserveInit: BigNumberish;
      initialValuation: BigNumberish;
      finalValuation: BigNumberish;
      minimumTradingDuration: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<RedeemableERC20Pool> {
    return super.deploy(
      config_,
      overrides || {}
    ) as Promise<RedeemableERC20Pool>;
  }
  getDeployTransaction(
    config_: {
      crpFactory: string;
      balancerFactory: string;
      reserve: string;
      token: string;
      reserveInit: BigNumberish;
      initialValuation: BigNumberish;
      finalValuation: BigNumberish;
      minimumTradingDuration: BigNumberish;
    },
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(config_, overrides || {});
  }
  attach(address: string): RedeemableERC20Pool {
    return super.attach(address) as RedeemableERC20Pool;
  }
  connect(signer: Signer): RedeemableERC20Pool__factory {
    return super.connect(signer) as RedeemableERC20Pool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20Pool {
    return new Contract(address, _abi, signerOrProvider) as RedeemableERC20Pool;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "crpFactory",
            type: "address",
          },
          {
            internalType: "address",
            name: "balancerFactory",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "contract RedeemableERC20",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserveInit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialValuation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finalValuation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumTradingDuration",
            type: "uint256",
          },
        ],
        internalType: "struct RedeemableERC20PoolConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
    name: "MIN_BALANCER_POOL_BALANCE",
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
    name: "MIN_RESERVE_INIT",
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
    name: "crp",
    outputs: [
      {
        internalType: "contract IConfigurableRightsPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "finalValuation",
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
    name: "finalWeight",
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
    name: "minimumTradingDuration",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerEndDutchAuction",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserve",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveInit",
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
    name: "startDutchAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract RedeemableERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61026060405263ffffffff6101608181526101808290526101a08290526101c08290526101e0829052610200829052610220829052610240919091526200004b90600190600862000937565b503480156200005957600080fd5b5060405162002c4138038062002c418339810160408190526200007c9162000a46565b600062000088620006f1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506305f5e10081608001511015620001065760405162461bcd60e51b8152600401620000fd9062000e1f565b60405180910390fd5b8060c001518160a001511015620001315760405162461bcd60e51b8152600401620000fd9062000e56565b6060808201516001600160601b031990821b81166080908152604084015190921b1660c0908152908201805160e0525190820151620001719190620006f5565b6101205260c08101516101405260e0810151620001a25760405162461bcd60e51b8152600401620000fd9062000d95565b60e081015160a0526040805160028082526060808301845292602083019080368337019050509050816040015181600081518110620001dd57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508160600151816001815181106200021057fe5b6001600160a01b03929092166020928302919091019091015260408051600280825260608281019093528160200160208202803683370190505090508260800151816000815181106200025f57fe5b60200260200101818152505082606001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002a957600080fd5b505afa158015620002be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e4919062000afa565b81600181518110620002f257fe5b6020026020010181815250506000816001815181106200030e57fe5b602002602001015111620003365760405162461bcd60e51b8152600401620000fd9062000ece565b6040805160028082526060808301845292602083019080368337019050509050670de0b6b3a7640000816000815181106200036d57fe5b6020026020010181815250506200039384608001518560a00151620006f560201b60201c565b81600181518110620003a157fe5b602002602001018181525050600084600001516001600160a01b0316634420002b86602001516040518060c00160405280604051806040016040528060048152602001630523230560e41b81525081526020016040518060400160405280601381526020017f52656465656d61626c654552433230506f6f6c000000000000000000000000008152508152602001888152602001878152602001868152602001620f4240670de0b6b3a7640000816200045657fe5b0490526040805160c081018252600080825260208201819052600182840181905260608301829052608083015260a082015290516001600160e01b031960e086901b168152620004ac9392919060040162000c1d565b602060405180830381600087803b158015620004c757600080fd5b505af1158015620004dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000502919062000a05565b6001600160601b0319606082901b16610100526040808701516080880151915163095ea7b360e01b81529293506001600160a01b03169163095ea7b391620005509185919060040162000cf9565b602060405180830381600087803b1580156200056b57600080fd5b505af115801562000580573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005a6919062000a24565b620005c55760405162461bcd60e51b8152600401620000fd9062000ef4565b84606001516001600160a01b031663095ea7b38287606001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200061757600080fd5b505afa1580156200062c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000652919062000afa565b6040518363ffffffff1660e01b81526004016200067192919062000cf9565b602060405180830381600087803b1580156200068c57600080fd5b505af1158015620006a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006c7919062000a24565b620006e65760405162461bcd60e51b8152600401620000fd9062000dc1565b505050505062000f36565b3390565b60008062000733846200071f670de0b6b3a764000086620007d160201b62000fb61790919060201c565b6200081160201b6200100a1790919060201c565b9050670de0b6b3a7640000811015620007605760405162461bcd60e51b8152600401620000fd9062000de8565b6200078281670de0b6b3a76400006200085b60201b6200104c1790919060201c565b620007a7670de0b6b3a7640000806032026200088360201b6200108b1790919060201c565b1015620007c85760405162461bcd60e51b8152600401620000fd9062000d27565b90505b92915050565b600082620007e257506000620007cb565b82820282848281620007f057fe5b0414620007c85760405162461bcd60e51b8152600401620000fd9062000e8d565b6000620007c883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620008cd60201b60201c565b600082820183811015620007c85760405162461bcd60e51b8152600401620000fd9062000d5e565b6000620007c883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506200090860201b60201c565b60008183620008f15760405162461bcd60e51b8152600401620000fd919062000d12565b506000838581620008fe57fe5b0495945050505050565b600081848411156200092f5760405162461bcd60e51b8152600401620000fd919062000d12565b505050900390565b600183019183908215620009c85791602002820160005b838211156200099457835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026200094e565b8015620009c65782816101000a81549063ffffffff021916905560040160208160030104928301926001030262000994565b505b50620009d6929150620009da565b5090565b5b80821115620009d657805463ffffffff19168155600101620009db565b8051620007cb8162000f1d565b60006020828403121562000a17578081fd5b8151620007c88162000f1d565b60006020828403121562000a36578081fd5b81518015158114620007c8578182fd5b600061010080838503121562000a5a578182fd5b604051908101906001600160401b038211818310171562000a79578283fd5b8160405262000a898585620009f8565b815262000a9a8560208601620009f8565b602082015262000aae8560408601620009f8565b604082015262000ac28560608601620009f8565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006020828403121562000b0c578081fd5b5051919050565b6000815180845260208085019450808401835b8381101562000b4d5781516001600160a01b03168752958201959082019060010162000b26565b509495945050505050565b6000815180845260208085019450808401835b8381101562000b4d5781518752958201959082019060010162000b6b565b60008151808452815b8181101562000bb05760208185018101518683018201520162000b92565b8181111562000bc25782602083870101525b50601f01601f19169290920160200192915050565b80511515825260208101511515602083015260408101511515604083015260608101511515606083015260808101511515608083015260a0810151151560a08301525050565b6001600160a01b038416815261010060208201819052835160c0838301526000919062000c4f6101c085018262000b89565b915050602085015160ff19808584030161012086015262000c71838362000b89565b925060408701519150808584030161014086015262000c91838362000b13565b925060608701519150808584030161016086015262000cb1838362000b58565b92506080870151915080858403016101808601525062000cd2828262000b58565b60a08701516101a0860152925062000cf1915050604083018462000bd7565b949350505050565b6001600160a01b03929092168252602082015260400190565b600060208252620007c8602083018462000b89565b60208082526014908201527f4d41585f5745494748545f56414c554154494f4e000000000000000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b602080825260129082015271182faa2920a224a723afa22aa920aa24a7a760711b604082015260600190565b6020808252600d908201526c544f4b454e5f415050524f564560981b604082015260600190565b60208082526014908201527f4d494e5f5745494748545f56414c554154494f4e000000000000000000000000604082015260600190565b60208082526014908201527f524553455256455f494e49545f4d494e494d554d000000000000000000000000604082015260600190565b60208082526014908201527f4d494e5f494e495449414c5f56414c5554494f4e000000000000000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252600c908201526b0544f4b454e5f494e49545f360a41b604082015260600190565b6020808252600f908201526e524553455256455f415050524f564560881b604082015260600190565b6001600160a01b038116811462000f3357600080fd5b50565b60805160601c60a05160c05160601c60e0516101005160601c6101205161014051611c6d62000fd4600039806103e35250806102ea52806106135250806103685280610687528061073a52806108e95280610a555280610ade5280610b1b5250806107ae5250806107d252806108ad5280610d935280610e2f5250806102c65280610598525080610a195280610c6e5280610f945250611c6d6000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063bb06997211610081578063e52ecbfb11610066578063e52ecbfb14610236578063f2fde38b1461023e578063fc0c546a1461025157610151565b8063bb06997214610226578063cd3293de1461022e57610151565b80638da5cb5b116100b25780638da5cb5b146102035780639923c94b1461020b578063b45ba7181461021e57610151565b8063715018a6146101f157806381e45d9a146101fb57610151565b80633fd8108e116101245780634ea2cb19116101095780634ea2cb19146101d95780636ba85bd6146101e15780636d002347146101e957610151565b80633fd8108e146101a457806345bdfa8a146101b957610151565b8063055ad42e1461015657806318fd663f1461017457806324ee2f4d1461018957806334c1df7514610191575b600080fd5b61015e610259565b60405161016b9190611836565b60405180910390f35b61017c6102c4565b60405161016b9190611b8e565b61017c6102e8565b61015e61019f366004611678565b61030c565b6101ac610366565b60405161016b91906117ca565b6101cc6101c7366004611639565b61038a565b60405161016b9190611bc6565b61017c6103d2565b61017c6103da565b61017c6103e1565b6101f9610405565b005b6101cc6104d9565b6101ac6104fd565b6101cc610219366004611728565b610519565b6101f9610546565b61017c6107ac565b6101ac6107d0565b6101f96107f4565b6101f961024c366004611601565b610e5c565b6101ac610f92565b604080516101008101918290526000916102bf91906001906008908286855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161027857905050505050504361030c565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000805b60088110156103595783816008811061032557fe5b602002015163ffffffff168363ffffffff1610156103515780600881111561034957fe5b915050610360565b600101610310565b5060085b90505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008082600881111561039957fe5b116103a557600061035d565b8260018360088111156103b457fe5b03600881106103bf57fe5b60200201602081019061035d9190611758565b6305f5e10081565b620f424081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61040d6110cd565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461046a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611a8e565b60405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6001816008811061052657fe5b60089182820401919006600402915054906101000a900463ffffffff1681565b600080610551610259565b600881111561055c57fe5b14610593576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104619061199d565b6000437f00000000000000000000000000000000000000000000000000000000000000000190506105c3436110d1565b6105cf816001016110d1565b6040805160028082526060808301845292602083019080368337019050509050670de0b6b3a76400008160008151811061060557fe5b6020026020010181815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061063f57fe5b60209081029190910101526040517fc3391d2700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c3391d27906106cd906b033b2e3c9fd0803ce8000000906000908190600401611bb0565b600060405180830381600087803b1580156106e757600080fd5b505af11580156106fb573d6000803e3d6000fd5b50506040517f246bc19b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016925063246bc19b915061077590849043908790600401611811565b600060405180830381600087803b15801561078f57600080fd5b505af11580156107a3573d6000803e3d6000fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6107fc6110cd565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611a8e565b60028061085b610259565b600881111561086657fe5b1461089d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104619061199d565b6108a6436110d1565b6000610a107f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082317f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b64ef17b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561094d57600080fd5b505afa158015610961573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610985919061161d565b6040518263ffffffff1660e01b81526004016109a191906117ca565b60206040518083038186803b1580156109b957600080fd5b505afa1580156109cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f19190611740565b610a0a620f42406b033b2e3c9fd0803ce8000000610fb6565b9061100a565b90506000610ab97f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082317f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b64ef17b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561094d57600080fd5b90506000610ada82610ad468056bc75e2d6310000086611247565b90611247565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b02f0b73827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b7291906117ca565b60206040518083038186803b158015610b8a57600080fd5b505afa158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190611740565b604080516002808252606082018352939092039290602083019080368337019050506040518363ffffffff1660e01b8152600401610c01929190611b97565b600060405180830381600087803b158015610c1b57600080fd5b505af1158015610c2f573d6000803e3d6000fd5b50506040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692506342966c68915082906370a0823190610cad9030906004016117ca565b60206040518083038186803b158015610cc557600080fd5b505afa158015610cd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfd9190611740565b6040518263ffffffff1660e01b8152600401610d199190611b8e565b600060405180830381600087803b158015610d3357600080fd5b505af1158015610d47573d6000803e3d6000fd5b50505050610e56610d566104fd565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610dc89030906004016117ca565b60206040518083038186803b158015610de057600080fd5b505afa158015610df4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e189190611740565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016919061125e565b50505050565b610e646110cd565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610eb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611a8e565b73ffffffffffffffffffffffffffffffffffffffff8116610f05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610461906118d2565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000081565b600082610fc557506000610360565b82820282848281610fd257fe5b041461035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611a31565b600061035d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611304565b60008282018381101561035d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104619061192f565b600061035d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611357565b3390565b8063ffffffff164363ffffffff161115611117576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104619061189b565b63ffffffff81811610611156576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611966565b6000611160610259565b600881111561116b57fe5b90506001816008811061117a57fe5b60088104919091015460079091166004026101000a900463ffffffff908116146111d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611ac3565b6111d98261139d565b81600182600881106111e757fe5b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508163ffffffff167f260aac5b840edc27b89fdf50e91311a413363a400959466e1049e6d071b8cee260405160405180910390a25050565b600081831015611257578161035d565b5090919050565b6112ff8363a9059cbb60e01b848460405160240161127d9291906117eb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526113c5565b505050565b6000818361133f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610461919061184a565b50600083858161134b57fe5b049150505b9392505050565b60008184841115611395576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610461919061184a565b505050900390565b6113a6816113c2565b60036113b0610259565b60088111156113bb57fe5b106113c257fe5b50565b6060611427826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661147b9092919063ffffffff16565b8051909150156112ff57808060200190518101906114459190611708565b6112ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611b31565b606061148a8484600085611492565b949350505050565b6060824710156114ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610461906119d4565b6114d785611594565b61150d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046190611afa565b600060608673ffffffffffffffffffffffffffffffffffffffff16858760405161153791906117ae565b60006040518083038185875af1925050503d8060008114611574576040519150601f19603f3d011682016040523d82523d6000602084013e611579565b606091505b509150915061158982828661159a565b979650505050505050565b3b151590565b606083156115a9575081611350565b8251156115b95782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610461919061184a565b803563ffffffff8116811461036057600080fd5b600060208284031215611612578081fd5b813561035d81611c03565b60006020828403121561162e578081fd5b815161035d81611c03565b600080610120838503121561164c578081fd5b61010083018481111561165d578182fd5b839250356009811061166d578182fd5b809150509250929050565b600080610120838503121561168b578182fd5b83601f840112611699578182fd5b60405161010080820182811067ffffffffffffffff821117156116ba578485fd5b60405284018185878311156116cd578586fd5b855b60088110156116f7576116e289836115ed565b835260209283019291909101906001016116cf565b509294505035905061166d81611c25565b600060208284031215611719578081fd5b8151801515811461035d578182fd5b600060208284031215611739578081fd5b5035919050565b600060208284031215611751578081fd5b5051919050565b600060208284031215611769578081fd5b813561035d81611c25565b6000815180845260208085019450808401835b838110156117a357815187529582019590820190600101611787565b509495945050505050565b600082516117c0818460208701611bd7565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6000606082526118246060830186611774565b60208301949094525060400152919050565b602081016009831061184457fe5b91905290565b6000602082528251806020840152611869816040850160208701611bd7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6020808252600f908201527f4e4558545f424c4f434b5f504153540000000000000000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f4e4558545f424c4f434b5f554e494e495449414c495a45440000000000000000604082015260600190565b60208082526009908201527f4241445f50484153450000000000000000000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600e908201527f4e4558545f424c4f434b5f534554000000000000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60008382526040602083015261148a6040830184611774565b9283526020830191909152604082015260600190565b63ffffffff91909116815260200190565b60005b83811015611bf2578181015183820152602001611bda565b83811115610e565750506000910152565b73ffffffffffffffffffffffffffffffffffffffff811681146113c257600080fd5b63ffffffff811681146113c257600080fdfea2646970667358221220f35e93d5195a01a42616ad732697358e2cca10b349a0e49b76a662231f49a80d64736f6c634300060c0033";
