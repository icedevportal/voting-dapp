const myBallot = {
    "_format": "hh-sol-artifact-1",
    "contractName": "MyBallot",
    "sourceName": "contracts/Voting.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "ActiveBallotId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "addVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ballot",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winningCandidateId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "candidatesCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "endVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "candidateId",
            "type": "uint256"
          }
        ],
        "name": "getCandidateNameById",
        "outputs": [
          {
            "internalType": "string",
            "name": "_candidateName",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "candidateId",
            "type": "uint256"
          }
        ],
        "name": "getCandidateVoteById",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_candidateVote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "hasVoted",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "isCandidate",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "isVoter",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "candidateId",
            "type": "uint256"
          }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "winningCandidateId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "winningVoteCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060018081905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061112c806100676000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80638da5cb5b1161008c578063b922394611610066578063b922394614610294578063e79427341461029e578063f413177c146102cf578063f4ab9adf146102ed576100e9565b80638da5cb5b146102165780639ae3eb7814610234578063ae0a937f14610264576100e9565b806343859632116100c8578063438596321461016a578063462e91ec1461019a5780635d64d552146101b65780635e8d23e9146101e6576100e9565b8062b74c45146100ee5780630121b93f1461011e578063361b0f801461013a575b600080fd5b61010860048036038101906101039190610d21565b610309565b6040516101159190610e1a565b60405180910390f35b61013860048036038101906101339190610cf8565b610338565b005b610154600480360381019061014f9190610cf8565b6105e4565b6040516101619190610e57565b60405180910390f35b610184600480360381019061017f9190610d21565b610654565b6040516101919190610e1a565b60405180910390f35b6101b460048036038101906101af9190610cb7565b610683565b005b6101d060048036038101906101cb9190610d5d565b61079a565b6040516101dd9190610e1a565b60405180910390f35b61020060048036038101906101fb9190610cf8565b6107c9565b60405161020d9190610e57565b60405180910390f35b61021e6107e1565b60405161022b9190610dff565b60405180910390f35b61024e60048036038101906102499190610cf8565b610805565b60405161025b9190610e57565b60405180910390f35b61027e60048036038101906102799190610cf8565b61081d565b60405161028b9190610e35565b60405180910390f35b61029c610916565b005b6102b860048036038101906102b39190610cf8565b610989565b6040516102c6929190610e72565b60405180910390f35b6102d76109ad565b6040516102e49190610e57565b60405180910390f35b61030760048036038101906103029190610c8e565b6109b3565b005b60066020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6000600260006001548152602001908152602001600020905060066000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103ba57600080fd5b60056000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561042457600080fd5b6001816000018381548110610462577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020160008282546104829190610f18565b92505081905550600360006001548152602001908152602001600020548160000183815481106104db577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201541115610575578160046000600154815260200190815260200160002081905550806000018281548110610549577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154600360006001548152602001908152602001600020819055505b600160056000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080600260006001548152602001908152602001600020905080600001838154811061063a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154915050919050565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106db57600080fd5b600060026000600154815260200190815260200160002090506000604051806060016040528083600301548152602001848152602001600081525090508160000181908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101908051906020019061076c929190610b59565b50604082015181600201555050600182600301600082825461078e9190610f18565b92505081905550505050565b60076020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b606060006002600060015481526020019081526020016000209050806000018381548110610874577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600101805461089090610ff8565b80601f01602080910402602001604051908101604052809291908181526020018280546108bc90610ff8565b80156109095780601f106108de57610100808354040283529160200191610909565b820191906000526020600020905b8154815290600101906020018083116108ec57829003601f168201915b5050505050915050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461096e57600080fd5b60018060008282546109809190610f18565b92505081905550565b60026020528060005260406000206000915090508060020154908060030154905082565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a0b57600080fd5b60006002600060015481526020019081526020016000209050600060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600015158152509050600160066000600154815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555081600101819080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff0219169083151502179055505050505050565b828054610b6590610ff8565b90600052602060002090601f016020900481019282610b875760008555610bce565b82601f10610ba057805160ff1916838001178555610bce565b82800160010185558215610bce579182015b82811115610bcd578251825591602001919060010190610bb2565b5b509050610bdb9190610bdf565b5090565b5b80821115610bf8576000816000905550600101610be0565b5090565b6000610c0f610c0a84610ecc565b610e9b565b905082815260208101848484011115610c2757600080fd5b610c32848285610fb6565b509392505050565b600081359050610c49816110c8565b92915050565b600082601f830112610c6057600080fd5b8135610c70848260208601610bfc565b91505092915050565b600081359050610c88816110df565b92915050565b600060208284031215610ca057600080fd5b6000610cae84828501610c3a565b91505092915050565b600060208284031215610cc957600080fd5b600082013567ffffffffffffffff811115610ce357600080fd5b610cef84828501610c4f565b91505092915050565b600060208284031215610d0a57600080fd5b6000610d1884828501610c79565b91505092915050565b60008060408385031215610d3457600080fd5b6000610d4285828601610c79565b9250506020610d5385828601610c3a565b9150509250929050565b60008060408385031215610d7057600080fd5b6000610d7e85828601610c79565b9250506020610d8f85828601610c79565b9150509250929050565b610da281610f6e565b82525050565b610db181610f80565b82525050565b6000610dc282610efc565b610dcc8185610f07565b9350610ddc818560208601610fc5565b610de5816110b7565b840191505092915050565b610df981610fac565b82525050565b6000602082019050610e146000830184610d99565b92915050565b6000602082019050610e2f6000830184610da8565b92915050565b60006020820190508181036000830152610e4f8184610db7565b905092915050565b6000602082019050610e6c6000830184610df0565b92915050565b6000604082019050610e876000830185610df0565b610e946020830184610df0565b9392505050565b6000604051905081810181811067ffffffffffffffff82111715610ec257610ec1611088565b5b8060405250919050565b600067ffffffffffffffff821115610ee757610ee6611088565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610f2382610fac565b9150610f2e83610fac565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f6357610f6261102a565b5b828201905092915050565b6000610f7982610f8c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fe3578082015181840152602081019050610fc8565b83811115610ff2576000848401525b50505050565b6000600282049050600182168061101057607f821691505b6020821081141561102457611023611059565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110d181610f6e565b81146110dc57600080fd5b50565b6110e881610fac565b81146110f357600080fd5b5056fea2646970667358221220678f3c54d913de4f1c920359be863451833a0a333e1f07d820034819d8acee7364736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100e95760003560e01c80638da5cb5b1161008c578063b922394611610066578063b922394614610294578063e79427341461029e578063f413177c146102cf578063f4ab9adf146102ed576100e9565b80638da5cb5b146102165780639ae3eb7814610234578063ae0a937f14610264576100e9565b806343859632116100c8578063438596321461016a578063462e91ec1461019a5780635d64d552146101b65780635e8d23e9146101e6576100e9565b8062b74c45146100ee5780630121b93f1461011e578063361b0f801461013a575b600080fd5b61010860048036038101906101039190610d21565b610309565b6040516101159190610e1a565b60405180910390f35b61013860048036038101906101339190610cf8565b610338565b005b610154600480360381019061014f9190610cf8565b6105e4565b6040516101619190610e57565b60405180910390f35b610184600480360381019061017f9190610d21565b610654565b6040516101919190610e1a565b60405180910390f35b6101b460048036038101906101af9190610cb7565b610683565b005b6101d060048036038101906101cb9190610d5d565b61079a565b6040516101dd9190610e1a565b60405180910390f35b61020060048036038101906101fb9190610cf8565b6107c9565b60405161020d9190610e57565b60405180910390f35b61021e6107e1565b60405161022b9190610dff565b60405180910390f35b61024e60048036038101906102499190610cf8565b610805565b60405161025b9190610e57565b60405180910390f35b61027e60048036038101906102799190610cf8565b61081d565b60405161028b9190610e35565b60405180910390f35b61029c610916565b005b6102b860048036038101906102b39190610cf8565b610989565b6040516102c6929190610e72565b60405180910390f35b6102d76109ad565b6040516102e49190610e57565b60405180910390f35b61030760048036038101906103029190610c8e565b6109b3565b005b60066020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6000600260006001548152602001908152602001600020905060066000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103ba57600080fd5b60056000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561042457600080fd5b6001816000018381548110610462577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020160008282546104829190610f18565b92505081905550600360006001548152602001908152602001600020548160000183815481106104db577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201541115610575578160046000600154815260200190815260200160002081905550806000018281548110610549577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154600360006001548152602001908152602001600020819055505b600160056000600154815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080600260006001548152602001908152602001600020905080600001838154811061063a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154915050919050565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106db57600080fd5b600060026000600154815260200190815260200160002090506000604051806060016040528083600301548152602001848152602001600081525090508160000181908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101908051906020019061076c929190610b59565b50604082015181600201555050600182600301600082825461078e9190610f18565b92505081905550505050565b60076020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b606060006002600060015481526020019081526020016000209050806000018381548110610874577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600101805461089090610ff8565b80601f01602080910402602001604051908101604052809291908181526020018280546108bc90610ff8565b80156109095780601f106108de57610100808354040283529160200191610909565b820191906000526020600020905b8154815290600101906020018083116108ec57829003601f168201915b5050505050915050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461096e57600080fd5b60018060008282546109809190610f18565b92505081905550565b60026020528060005260406000206000915090508060020154908060030154905082565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a0b57600080fd5b60006002600060015481526020019081526020016000209050600060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600015158152509050600160066000600154815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555081600101819080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff0219169083151502179055505050505050565b828054610b6590610ff8565b90600052602060002090601f016020900481019282610b875760008555610bce565b82601f10610ba057805160ff1916838001178555610bce565b82800160010185558215610bce579182015b82811115610bcd578251825591602001919060010190610bb2565b5b509050610bdb9190610bdf565b5090565b5b80821115610bf8576000816000905550600101610be0565b5090565b6000610c0f610c0a84610ecc565b610e9b565b905082815260208101848484011115610c2757600080fd5b610c32848285610fb6565b509392505050565b600081359050610c49816110c8565b92915050565b600082601f830112610c6057600080fd5b8135610c70848260208601610bfc565b91505092915050565b600081359050610c88816110df565b92915050565b600060208284031215610ca057600080fd5b6000610cae84828501610c3a565b91505092915050565b600060208284031215610cc957600080fd5b600082013567ffffffffffffffff811115610ce357600080fd5b610cef84828501610c4f565b91505092915050565b600060208284031215610d0a57600080fd5b6000610d1884828501610c79565b91505092915050565b60008060408385031215610d3457600080fd5b6000610d4285828601610c79565b9250506020610d5385828601610c3a565b9150509250929050565b60008060408385031215610d7057600080fd5b6000610d7e85828601610c79565b9250506020610d8f85828601610c79565b9150509250929050565b610da281610f6e565b82525050565b610db181610f80565b82525050565b6000610dc282610efc565b610dcc8185610f07565b9350610ddc818560208601610fc5565b610de5816110b7565b840191505092915050565b610df981610fac565b82525050565b6000602082019050610e146000830184610d99565b92915050565b6000602082019050610e2f6000830184610da8565b92915050565b60006020820190508181036000830152610e4f8184610db7565b905092915050565b6000602082019050610e6c6000830184610df0565b92915050565b6000604082019050610e876000830185610df0565b610e946020830184610df0565b9392505050565b6000604051905081810181811067ffffffffffffffff82111715610ec257610ec1611088565b5b8060405250919050565b600067ffffffffffffffff821115610ee757610ee6611088565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610f2382610fac565b9150610f2e83610fac565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f6357610f6261102a565b5b828201905092915050565b6000610f7982610f8c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fe3578082015181840152602081019050610fc8565b83811115610ff2576000848401525b50505050565b6000600282049050600182168061101057607f821691505b6020821081141561102457611023611059565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110d181610f6e565b81146110dc57600080fd5b50565b6110e881610fac565b81146110f357600080fd5b5056fea2646970667358221220678f3c54d913de4f1c920359be863451833a0a333e1f07d820034819d8acee7364736f6c63430008000033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
export default myBallot;