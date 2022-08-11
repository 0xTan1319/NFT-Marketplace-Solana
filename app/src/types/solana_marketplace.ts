export type SolanaMarketplace = {
  "version": "0.1.0",
  "name": "solana_marketplace",
  "instructions": [
    {
      "name": "setup",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonceConfig",
          "type": "u8"
        },
        {
          "name": "tradeFeeRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeFeeRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "toggleFreezeProgram",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initTokenAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "tokenSetup",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "toggleFreezeToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "applyOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "acceptOffer",
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "countSells",
            "type": "u64"
          },
          {
            "name": "tradeFeeRate",
            "type": "u64"
          },
          {
            "name": "sellId",
            "type": "u64"
          },
          {
            "name": "offerId",
            "type": "u64"
          },
          {
            "name": "freezeProgram",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenType",
            "type": "u8"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "freeze",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sell",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "ownerTokenVault",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftVault",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "u8"
          },
          {
            "name": "offerCount",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "offer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "sellId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "offerPrice",
            "type": "u64"
          },
          {
            "name": "priceType",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PermissionError",
      "msg": "Permission Error, E1000"
    },
    {
      "code": 6001,
      "name": "FreezeProgramError",
      "msg": "The contract frozen, E1001"
    },
    {
      "code": 6002,
      "name": "FreezeTokenError",
      "msg": "The token frozen, E1002"
    },
    {
      "code": 6003,
      "name": "NFTLockedError",
      "msg": "NFT Locked, E1003"
    },
    {
      "code": 6004,
      "name": "InvalidRequestError",
      "msg": "Invalid Request, E1004"
    },
    {
      "code": 6005,
      "name": "TradeNotAvailableError",
      "msg": "Trade not available, E1005"
    },
    {
      "code": 6006,
      "name": "NoMemberError",
      "msg": "Not exist member, E1006"
    },
    {
      "code": 6007,
      "name": "InsufficientSolAmountError",
      "msg": "Not enough SOL, E1007"
    },
    {
      "code": 6008,
      "name": "InsufficientTokenAmountError",
      "msg": "Not enough Token, E1008"
    },
    {
      "code": 6009,
      "name": "InsufficientMinAmountError",
      "msg": "The amount is small than min price, E1009"
    },
    {
      "code": 6010,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner, E1010"
    },
    {
      "code": 6011,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid, E1011"
    },
    {
      "code": 6012,
      "name": "MetadataDoesntExist",
      "msg": "Metadata doesn't exist, E1012"
    },
    {
      "code": 6013,
      "name": "PublicKeyMismatch",
      "msg": "PublicKeyMismatch, E1013"
    },
    {
      "code": 6014,
      "name": "UninitializedAccount",
      "msg": "UninitializedAccount, E1014"
    },
    {
      "code": 6015,
      "name": "NoPayerPresent",
      "msg": "No payer present on this txn, E1015"
    },
    {
      "code": 6016,
      "name": "InvalidTokenAmount",
      "msg": "Invalid token amount, E1016"
    }
  ]
};

export const IDL: SolanaMarketplace = {
  "version": "0.1.0",
  "name": "solana_marketplace",
  "instructions": [
    {
      "name": "setup",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonceConfig",
          "type": "u8"
        },
        {
          "name": "tradeFeeRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeFeeRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "toggleFreezeProgram",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initTokenAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "tokenSetup",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "toggleFreezeToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeSell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "applyOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "acceptOffer",
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTokenWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sell",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "used by anchor for init of the token"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "sellId",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "countSells",
            "type": "u64"
          },
          {
            "name": "tradeFeeRate",
            "type": "u64"
          },
          {
            "name": "sellId",
            "type": "u64"
          },
          {
            "name": "offerId",
            "type": "u64"
          },
          {
            "name": "freezeProgram",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenType",
            "type": "u8"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "freeze",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sell",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "ownerTokenVault",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftVault",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "u8"
          },
          {
            "name": "offerCount",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "offer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "sellId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "offerPrice",
            "type": "u64"
          },
          {
            "name": "priceType",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PermissionError",
      "msg": "Permission Error, E1000"
    },
    {
      "code": 6001,
      "name": "FreezeProgramError",
      "msg": "The contract frozen, E1001"
    },
    {
      "code": 6002,
      "name": "FreezeTokenError",
      "msg": "The token frozen, E1002"
    },
    {
      "code": 6003,
      "name": "NFTLockedError",
      "msg": "NFT Locked, E1003"
    },
    {
      "code": 6004,
      "name": "InvalidRequestError",
      "msg": "Invalid Request, E1004"
    },
    {
      "code": 6005,
      "name": "TradeNotAvailableError",
      "msg": "Trade not available, E1005"
    },
    {
      "code": 6006,
      "name": "NoMemberError",
      "msg": "Not exist member, E1006"
    },
    {
      "code": 6007,
      "name": "InsufficientSolAmountError",
      "msg": "Not enough SOL, E1007"
    },
    {
      "code": 6008,
      "name": "InsufficientTokenAmountError",
      "msg": "Not enough Token, E1008"
    },
    {
      "code": 6009,
      "name": "InsufficientMinAmountError",
      "msg": "The amount is small than min price, E1009"
    },
    {
      "code": 6010,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner, E1010"
    },
    {
      "code": 6011,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid, E1011"
    },
    {
      "code": 6012,
      "name": "MetadataDoesntExist",
      "msg": "Metadata doesn't exist, E1012"
    },
    {
      "code": 6013,
      "name": "PublicKeyMismatch",
      "msg": "PublicKeyMismatch, E1013"
    },
    {
      "code": 6014,
      "name": "UninitializedAccount",
      "msg": "UninitializedAccount, E1014"
    },
    {
      "code": 6015,
      "name": "NoPayerPresent",
      "msg": "No payer present on this txn, E1015"
    },
    {
      "code": 6016,
      "name": "InvalidTokenAmount",
      "msg": "Invalid token amount, E1016"
    }
  ]
};
