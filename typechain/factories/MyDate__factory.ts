/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyDate, MyDateInterface } from "../MyDate";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getDay",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
    ],
    name: "getDaysInMonth",
    outputs: [
      {
        internalType: "uint8",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getMonth",
    outputs: [
      {
        internalType: "uint8",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getYear",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
    ],
    name: "isLeapYear",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
    ],
    name: "leapYearsBefore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "hour",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "minute",
        type: "uint8",
      },
    ],
    name: "toTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "hour",
        type: "uint8",
      },
    ],
    name: "toTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
    ],
    name: "toTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "hour",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "minute",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "second",
        type: "uint8",
      },
    ],
    name: "toTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611351806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806392d663131161006657806392d6631314610193578063a324ad24146101c3578063a6f0e577146101f3578063b199993714610223578063b238ad0e146102535761009e565b806362ba9687146100a357806365c72840146100d35780637f791833146101035780638c8d98a0146101335780639054bdec14610163575b600080fd5b6100bd60048036038101906100b89190610e37565b610283565b6040516100ca919061100e565b60405180910390f35b6100ed60048036038101906100e89190610f37565b61029f565b6040516100fa9190611029565b60405180910390f35b61011d60048036038101906101189190610dd4565b6102b5565b60405161012a919061100e565b60405180910390f35b61014d60048036038101906101489190610d85565b6102d0565b60405161015a919061100e565b60405180910390f35b61017d60048036038101906101789190610eae565b6102eb565b60405161018a919061100e565b60405180910390f35b6101ad60048036038101906101a89190610f37565b61086a565b6040516101ba9190610ff3565b60405180910390f35b6101dd60048036038101906101d89190610f37565b610981565b6040516101ea9190611029565b60405180910390f35b61020d60048036038101906102089190610d5c565b610997565b60405161021a9190610fd8565b60405180910390f35b61023d60048036038101906102389190610f37565b610a06565b60405161024a919061100e565b60405180910390f35b61026d60048036038101906102689190610f60565b610a5a565b60405161027a9190611029565b60405180910390f35b6000610294868686868660006102eb565b905095945050505050565b60006102aa82610b26565b604001519050919050565b60006102c6858585856000806102eb565b9050949350505050565b60006102e284848460008060006102eb565b90509392505050565b6000806107b290505b8761ffff168161ffff16101561034f5761030d81610997565b15610329576301e28500826103229190611044565b915061033c565b6301e13380826103399190611044565b91505b8080610347906111f2565b9150506102f4565b610357610ccf565b601f816000600c8110610393577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff16815250506103ad89610997565b1561040457601d816001600c81106103ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050610452565b601c816001600c8110610440577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff16815250505b601f816002600c811061048e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816003600c81106104db577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816004600c8110610528577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816005600c8110610575577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816006600c81106105c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816007600c811061060f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816008600c811061065c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816009600c81106106a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e81600a600c81106106f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f81600b600c8110610743577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050600191505b8760ff168261ffff1610156107e757806001836107769190611125565b61ffff16600c81106107b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160ff16620151806107c791906110cb565b836107d29190611044565b925081806107df906111f2565b925050610759565b6001876107f4919061118d565b60ff166201518061080591906110cb565b836108109190611044565b92508560ff16610e1061082391906110cb565b8361082e9190611044565b92508460ff16603c61084091906110cb565b8361084b9190611044565b92508360ff168361085c9190611044565b925050509695505050505050565b600080600090506000806301e1338085610884919061109a565b6107b261ffff166108959190611044565b91506108a66107b261ffff16610a06565b6108b38361ffff16610a06565b6108bd9190611159565b9050806301e285006108cf91906110cb565b836108da9190611044565b9250806107b2836108eb9190611125565b61ffff166108f99190611159565b6301e1338061090891906110cb565b836109139190611044565b92505b848311156109765761093360018361092e9190611125565b610997565b1561094f576301e28500836109489190611159565b9250610962565b6301e133808361095f9190611159565b92505b60018261096f9190611125565b9150610916565b819350505050919050565b600061098c82610b26565b602001519050919050565b6000806004836109a79190611247565b61ffff16146109b95760009050610a01565b60006064836109c89190611247565b61ffff16146109da5760019050610a01565b6000610190836109ea9190611247565b61ffff16146109fc5760009050610a01565b600190505b919050565b6000600182610a159190611159565b915061019082610a25919061109a565b606483610a32919061109a565b600484610a3f919061109a565b610a499190611159565b610a539190611044565b9050919050565b600060018360ff161480610a71575060038360ff16145b80610a7f575060058360ff16145b80610a8d575060078360ff16145b80610a9b575060088360ff16145b80610aa95750600a8360ff16145b80610ab75750600c8360ff16145b15610ac557601f9050610b20565b60048360ff161480610ada575060068360ff16145b80610ae8575060098360ff16145b80610af65750600b8360ff16145b15610b0457601e9050610b20565b610b0d82610997565b15610b1b57601d9050610b20565b601c90505b92915050565b610b2e610cf2565b60008080610b3b8561086a565b846000019061ffff16908161ffff1681525050610b5d6107b261ffff16610a06565b610b6e856000015161ffff16610a06565b610b789190611159565b9150816301e28500610b8a91906110cb565b83610b959190611044565b9250816107b28560000151610baa9190611125565b61ffff16610bb89190611159565b6301e13380610bc791906110cb565b83610bd29190611044565b92506000600191505b600c8260ff1611610c5257610bf4828660000151610a5a565b60ff1662015180610c0591906110cb565b9050858482610c149190611044565b1115610c315781856020019060ff16908160ff1681525050610c52565b8084610c3d9190611044565b93508180610c4a9061121d565b925050610bdb565b600191505b610c6985602001518660000151610a5a565b60ff168260ff1611610cc657858462015180610c859190611044565b1115610ca25781856040019060ff16908160ff1681525050610cc6565b6201518084610cb19190611044565b93508180610cbe9061121d565b925050610c57565b50505050919050565b604051806101800160405280600c90602082028036833780820191505090505090565b6040518060600160405280600061ffff168152602001600060ff168152602001600060ff1681525090565b600081359050610d2c816112d6565b92915050565b600081359050610d41816112ed565b92915050565b600081359050610d5681611304565b92915050565b600060208284031215610d6e57600080fd5b6000610d7c84828501610d1d565b91505092915050565b600080600060608486031215610d9a57600080fd5b6000610da886828701610d1d565b9350506020610db986828701610d47565b9250506040610dca86828701610d47565b9150509250925092565b60008060008060808587031215610dea57600080fd5b6000610df887828801610d1d565b9450506020610e0987828801610d47565b9350506040610e1a87828801610d47565b9250506060610e2b87828801610d47565b91505092959194509250565b600080600080600060a08688031215610e4f57600080fd5b6000610e5d88828901610d1d565b9550506020610e6e88828901610d47565b9450506040610e7f88828901610d47565b9350506060610e9088828901610d47565b9250506080610ea188828901610d47565b9150509295509295909350565b60008060008060008060c08789031215610ec757600080fd5b6000610ed589828a01610d1d565b9650506020610ee689828a01610d47565b9550506040610ef789828a01610d47565b9450506060610f0889828a01610d47565b9350506080610f1989828a01610d47565b92505060a0610f2a89828a01610d47565b9150509295509295509295565b600060208284031215610f4957600080fd5b6000610f5784828501610d32565b91505092915050565b60008060408385031215610f7357600080fd5b6000610f8185828601610d47565b9250506020610f9285828601610d1d565b9150509250929050565b610fa5816111c1565b82525050565b610fb4816111cd565b82525050565b610fc3816111db565b82525050565b610fd2816111e5565b82525050565b6000602082019050610fed6000830184610f9c565b92915050565b60006020820190506110086000830184610fab565b92915050565b60006020820190506110236000830184610fba565b92915050565b600060208201905061103e6000830184610fc9565b92915050565b600061104f826111db565b915061105a836111db565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561108f5761108e611278565b5b828201905092915050565b60006110a5826111db565b91506110b0836111db565b9250826110c0576110bf6112a7565b5b828204905092915050565b60006110d6826111db565b91506110e1836111db565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561111a57611119611278565b5b828202905092915050565b6000611130826111cd565b915061113b836111cd565b92508282101561114e5761114d611278565b5b828203905092915050565b6000611164826111db565b915061116f836111db565b92508282101561118257611181611278565b5b828203905092915050565b6000611198826111e5565b91506111a3836111e5565b9250828210156111b6576111b5611278565b5b828203905092915050565b60008115159050919050565b600061ffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006111fd826111cd565b915061ffff82141561121257611211611278565b5b600182019050919050565b6000611228826111e5565b915060ff82141561123c5761123b611278565b5b600182019050919050565b6000611252826111cd565b915061125d836111cd565b92508261126d5761126c6112a7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6112df816111cd565b81146112ea57600080fd5b50565b6112f6816111db565b811461130157600080fd5b50565b61130d816111e5565b811461131857600080fd5b5056fea2646970667358221220ea060114af7adbb25a4f4e29165e769eb06f5df84675584de4646f4fd2a3b4fd64736f6c63430008040033";

export class MyDate__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyDate> {
    return super.deploy(overrides || {}) as Promise<MyDate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyDate {
    return super.attach(address) as MyDate;
  }
  connect(signer: Signer): MyDate__factory {
    return super.connect(signer) as MyDate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyDateInterface {
    return new utils.Interface(_abi) as MyDateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyDate {
    return new Contract(address, _abi, signerOrProvider) as MyDate;
  }
}
