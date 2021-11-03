/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RedeemableERC20Pool,
  RedeemableERC20PoolInterface,
} from "../RedeemableERC20Pool";

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
  "0x61026060405263ffffffff6101608181526101808290526101a08290526101c08290526101e0829052610200829052610220829052610240919091526200004b9060019060086200089a565b503480156200005957600080fd5b5060405162002c2338038062002c238339810160408190526200007c91620009a9565b600062000088620006f1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506305f5e10081608001511015620001065760405162461bcd60e51b8152600401620000fd9062000ddb565b60405180910390fd5b8060c001518160a001511015620001315760405162461bcd60e51b8152600401620000fd9062000e12565b6060808201516001600160601b031990821b81166080908152604084015190921b1660c0908152908201805160e0525190820151620001719190620006f5565b6101205260c08101516101405260e0810151620001a25760405162461bcd60e51b8152600401620000fd9062000ce3565b60e081015160a0526040805160028082526060808301845292602083019080368337019050509050816040015181600081518110620001dd57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508160600151816001815181106200021057fe5b6001600160a01b03929092166020928302919091019091015260408051600280825260608281019093528160200160208202803683370190505090508260800151816000815181106200025f57fe5b60200260200101818152505082606001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002a957600080fd5b505afa158015620002be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e4919062000a5d565b81600181518110620002f257fe5b6020026020010181815250506000816001815181106200030e57fe5b602002602001015111620003365760405162461bcd60e51b8152600401620000fd9062000e8a565b6040805160028082526060808301845292602083019080368337019050509050670de0b6b3a7640000816000815181106200036d57fe5b6020026020010181815250506200039384608001518560a00151620006f560201b60201c565b81600181518110620003a157fe5b602002602001018181525050600084600001516001600160a01b0316634420002b86602001516040518060c00160405280604051806040016040528060048152602001630523230560e41b81525081526020016040518060400160405280601381526020017f52656465656d61626c654552433230506f6f6c000000000000000000000000008152508152602001888152602001878152602001868152602001620f4240670de0b6b3a7640000816200045657fe5b0490526040805160c081018252600080825260208201819052600182840181905260608301829052608083015260a082015290516001600160e01b031960e086901b168152620004ac9392919060040162000b80565b602060405180830381600087803b158015620004c757600080fd5b505af1158015620004dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000502919062000968565b6001600160601b0319606082901b16610100526040808701516080880151915163095ea7b360e01b81529293506001600160a01b03169163095ea7b391620005509185919060040162000c5c565b602060405180830381600087803b1580156200056b57600080fd5b505af115801562000580573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005a6919062000987565b620005c55760405162461bcd60e51b8152600401620000fd9062000eb0565b84606001516001600160a01b031663095ea7b38287606001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200061757600080fd5b505afa1580156200062c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000652919062000a5d565b6040518363ffffffff1660e01b81526004016200067192919062000c5c565b602060405180830381600087803b1580156200068c57600080fd5b505af1158015620006a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006c7919062000987565b620006e65760405162461bcd60e51b8152600401620000fd9062000d0f565b505050505062000ef2565b3390565b60008062000733846200071f670de0b6b3a764000086620007d160201b62000ffb1790919060201c565b6200081160201b6200104f1790919060201c565b9050670de0b6b3a7640000811015620007605760405162461bcd60e51b8152600401620000fd9062000da4565b6200078281670de0b6b3a76400006200084760201b6200109b1790919060201c565b620007a7670de0b6b3a7640000806032026200086f60201b620010da1790919060201c565b1015620007c85760405162461bcd60e51b8152600401620000fd9062000c75565b90505b92915050565b600082620007e257506000620007cb565b82820282848281620007f057fe5b0414620007c85760405162461bcd60e51b8152600401620000fd9062000e49565b6000808211620008355760405162461bcd60e51b8152600401620000fd9062000d6d565b8183816200083f57fe5b049392505050565b600082820183811015620007c85760405162461bcd60e51b8152600401620000fd9062000cac565b600082821115620008945760405162461bcd60e51b8152600401620000fd9062000d36565b50900390565b6001830191839082156200092b5791602002820160005b83821115620008f757835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302620008b1565b8015620009295782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620008f7565b505b50620009399291506200093d565b5090565b5b808211156200093957805463ffffffff191681556001016200093e565b8051620007cb8162000ed9565b6000602082840312156200097a578081fd5b8151620007c88162000ed9565b60006020828403121562000999578081fd5b81518015158114620007c8578182fd5b6000610100808385031215620009bd578182fd5b604051908101906001600160401b0382118183101715620009dc578283fd5b81604052620009ec85856200095b565b8152620009fd85602086016200095b565b602082015262000a1185604086016200095b565b604082015262000a2585606086016200095b565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006020828403121562000a6f578081fd5b5051919050565b6000815180845260208085019450808401835b8381101562000ab05781516001600160a01b03168752958201959082019060010162000a89565b509495945050505050565b6000815180845260208085019450808401835b8381101562000ab05781518752958201959082019060010162000ace565b60008151808452815b8181101562000b135760208185018101518683018201520162000af5565b8181111562000b255782602083870101525b50601f01601f19169290920160200192915050565b80511515825260208101511515602083015260408101511515604083015260608101511515606083015260808101511515608083015260a0810151151560a08301525050565b6001600160a01b038416815261010060208201819052835160c0838301526000919062000bb26101c085018262000aec565b915050602085015160ff19808584030161012086015262000bd4838362000aec565b925060408701519150808584030161014086015262000bf4838362000a76565b925060608701519150808584030161016086015262000c14838362000abb565b92506080870151915080858403016101808601525062000c35828262000abb565b60a08701516101a0860152925062000c54915050604083018462000b3a565b949350505050565b6001600160a01b03929092168252602082015260400190565b60208082526014908201527f4d41585f5745494748545f56414c554154494f4e000000000000000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b602080825260129082015271182faa2920a224a723afa22aa920aa24a7a760711b604082015260600190565b6020808252600d908201526c544f4b454e5f415050524f564560981b604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b60208082526014908201527f4d494e5f5745494748545f56414c554154494f4e000000000000000000000000604082015260600190565b60208082526014908201527f524553455256455f494e49545f4d494e494d554d000000000000000000000000604082015260600190565b60208082526014908201527f4d494e5f494e495449414c5f56414c5554494f4e000000000000000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252600c908201526b0544f4b454e5f494e49545f360a41b604082015260600190565b6020808252600f908201526e524553455256455f415050524f564560881b604082015260600190565b6001600160a01b038116811462000eef57600080fd5b50565b60805160601c60a05160c05160601c60e0516101005160601c6101205161014051611c9362000f90600039806103e35250806102ea528061062a525080610368528061069e528061075152806109175280610a835280610b0c5280610b495250806107c55250806107e952806108db5280610dc15280610e5d5250806102c652806105af525080610a475280610c9c5280610fd95250611c936000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063bb06997211610081578063e52ecbfb11610066578063e52ecbfb14610236578063f2fde38b1461023e578063fc0c546a1461025157610151565b8063bb06997214610226578063cd3293de1461022e57610151565b80638da5cb5b116100b25780638da5cb5b146102035780639923c94b1461020b578063b45ba7181461021e57610151565b8063715018a6146101f157806381e45d9a146101fb57610151565b80633fd8108e116101245780634ea2cb19116101095780634ea2cb19146101d95780636ba85bd6146101e15780636d002347146101e957610151565b80633fd8108e146101a457806345bdfa8a146101b957610151565b8063055ad42e1461015657806318fd663f1461017457806324ee2f4d1461018957806334c1df7514610191575b600080fd5b61015e610259565b60405161016b91906117ee565b60405180910390f35b61017c6102c4565b60405161016b9190611bb4565b61017c6102e8565b61015e61019f366004611630565b61030c565b6101ac610366565b60405161016b9190611782565b6101cc6101c73660046115f1565b61038a565b60405161016b9190611bec565b61017c6103d2565b61017c6103da565b61017c6103e1565b6101f9610405565b005b6101cc6104f0565b6101ac610514565b6101cc6102193660046116e0565b610530565b6101f961055d565b61017c6107c3565b6101ac6107e7565b6101f961080b565b6101f961024c3660046115b9565b610e8a565b6101ac610fd7565b604080516101008101918290526000916102bf91906001906008908286855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161027857905050505050504361030c565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000805b60088110156103595783816008811061032557fe5b602002015163ffffffff168363ffffffff1610156103515780600881111561034957fe5b915050610360565b600101610310565b5060085b90505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008082600881111561039957fe5b116103a557600061035d565b8260018360088111156103b457fe5b03600881106103bf57fe5b60200201602081019061035d9190611710565b6305f5e10081565b620f424081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61040d61111c565b73ffffffffffffffffffffffffffffffffffffffff1661042b610514565b73ffffffffffffffffffffffffffffffffffffffff1614610481576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611ab4565b60405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6001816008811061053d57fe5b60089182820401919006600402915054906101000a900463ffffffff1681565b600080610568610259565b600881111561057357fe5b146105aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611955565b6000437f00000000000000000000000000000000000000000000000000000000000000000190506105da43611120565b6105e681600101611120565b6040805160028082526060808301845292602083019080368337019050509050670de0b6b3a76400008160008151811061061c57fe5b6020026020010181815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061065657fe5b60209081029190910101526040517fc3391d2700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c3391d27906106e4906b033b2e3c9fd0803ce8000000906000908190600401611bd6565b600060405180830381600087803b1580156106fe57600080fd5b505af1158015610712573d6000803e3d6000fd5b50506040517f246bc19b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016925063246bc19b915061078c908490439087906004016117c9565b600060405180830381600087803b1580156107a657600080fd5b505af11580156107ba573d6000803e3d6000fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61081361111c565b73ffffffffffffffffffffffffffffffffffffffff16610831610514565b73ffffffffffffffffffffffffffffffffffffffff161461087e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611ab4565b600280610889610259565b600881111561089457fe5b146108cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611955565b6108d443611120565b6000610a3e7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082317f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b64ef17b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097b57600080fd5b505afa15801561098f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b391906115d5565b6040518263ffffffff1660e01b81526004016109cf9190611782565b60206040518083038186803b1580156109e757600080fd5b505afa1580156109fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1f91906116f8565b610a38620f42406b033b2e3c9fd0803ce8000000610ffb565b9061104f565b90506000610ae77f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082317f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b64ef17b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097b57600080fd5b90506000610b0882610b0268056bc75e2d6310000086611296565b90611296565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b02f0b73827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ba09190611782565b60206040518083038186803b158015610bb857600080fd5b505afa158015610bcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf091906116f8565b604080516002808252606082018352939092039290602083019080368337019050506040518363ffffffff1660e01b8152600401610c2f929190611bbd565b600060405180830381600087803b158015610c4957600080fd5b505af1158015610c5d573d6000803e3d6000fd5b50506040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692506342966c68915082906370a0823190610cdb903090600401611782565b60206040518083038186803b158015610cf357600080fd5b505afa158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b91906116f8565b6040518263ffffffff1660e01b8152600401610d479190611bb4565b600060405180830381600087803b158015610d6157600080fd5b505af1158015610d75573d6000803e3d6000fd5b50505050610e84610d84610514565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610df6903090600401611782565b60206040518083038186803b158015610e0e57600080fd5b505afa158015610e22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4691906116f8565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691906112ad565b50505050565b610e9261111c565b73ffffffffffffffffffffffffffffffffffffffff16610eb0610514565b73ffffffffffffffffffffffffffffffffffffffff1614610efd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611ab4565b73ffffffffffffffffffffffffffffffffffffffff8116610f4a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104789061188a565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008261100a57506000610360565b8282028284828161101757fe5b041461035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611a57565b600080821161108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611a20565b81838161109357fe5b049392505050565b60008282018381101561035d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610478906118e7565b600082821115611116576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104789061198c565b50900390565b3390565b8063ffffffff164363ffffffff161115611166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611853565b63ffffffff818116106111a5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104789061191e565b60006111af610259565b60088111156111ba57fe5b9050600181600881106111c957fe5b60088104919091015460079091166004026101000a900463ffffffff9081161461121f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611ae9565b61122882611353565b816001826008811061123657fe5b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508163ffffffff167f260aac5b840edc27b89fdf50e91311a413363a400959466e1049e6d071b8cee260405160405180910390a25050565b6000818310156112a6578161035d565b5090919050565b61134e8363a9059cbb60e01b84846040516024016112cc9291906117a3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261137b565b505050565b61135c81611378565b6003611366610259565b600881111561137157fe5b1061137857fe5b50565b60606113dd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114319092919063ffffffff16565b80519091501561134e57808060200190518101906113fb91906116c0565b61134e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611b57565b6060611440848460008561144a565b90505b9392505050565b606082471015611486576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610478906119c3565b61148f8561154c565b6114c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047890611b20565b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516114ef9190611766565b60006040518083038185875af1925050503d806000811461152c576040519150601f19603f3d011682016040523d82523d6000602084013e611531565b606091505b5091509150611541828286611552565b979650505050505050565b3b151590565b60608315611561575081611443565b8251156115715782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104789190611802565b803563ffffffff8116811461036057600080fd5b6000602082840312156115ca578081fd5b813561035d81611c29565b6000602082840312156115e6578081fd5b815161035d81611c29565b6000806101208385031215611604578081fd5b610100830184811115611615578182fd5b8392503560098110611625578182fd5b809150509250929050565b6000806101208385031215611643578182fd5b83601f840112611651578182fd5b60405161010080820182811067ffffffffffffffff82111715611672578485fd5b6040528401818587831115611685578586fd5b855b60088110156116af5761169a89836115a5565b83526020928301929190910190600101611687565b509294505035905061162581611c4b565b6000602082840312156116d1578081fd5b8151801515811461035d578182fd5b6000602082840312156116f1578081fd5b5035919050565b600060208284031215611709578081fd5b5051919050565b600060208284031215611721578081fd5b813561035d81611c4b565b6000815180845260208085019450808401835b8381101561175b5781518752958201959082019060010161173f565b509495945050505050565b60008251611778818460208701611bfd565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6000606082526117dc606083018661172c565b60208301949094525060400152919050565b60208101600983106117fc57fe5b91905290565b6000602082528251806020840152611821816040850160208701611bfd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6020808252600f908201527f4e4558545f424c4f434b5f504153540000000000000000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f4e4558545f424c4f434b5f554e494e495449414c495a45440000000000000000604082015260600190565b60208082526009908201527f4241445f50484153450000000000000000000000000000000000000000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600e908201527f4e4558545f424c4f434b5f534554000000000000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600083825260406020830152611440604083018461172c565b9283526020830191909152604082015260600190565b63ffffffff91909116815260200190565b60005b83811015611c18578181015183820152602001611c00565b83811115610e845750506000910152565b73ffffffffffffffffffffffffffffffffffffffff8116811461137857600080fd5b63ffffffff8116811461137857600080fdfea2646970667358221220dc59623ab3cfb867fa405cc6e0a7f8ee3280bf032024a2d7259d6a3d1b3fa3dc64736f6c634300060c0033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(config_, overrides || {});
  }
  attach(address: string): RedeemableERC20Pool {
    return super.attach(address) as RedeemableERC20Pool;
  }
  connect(signer: Signer): RedeemableERC20Pool__factory {
    return super.connect(signer) as RedeemableERC20Pool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemableERC20PoolInterface {
    return new utils.Interface(_abi) as RedeemableERC20PoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20Pool {
    return new Contract(address, _abi, signerOrProvider) as RedeemableERC20Pool;
  }
}
