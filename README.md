# Mnemonic to Ethereum Private Key and Address 

#### Usage

```
node . <seed phrase>
```

eg: 

```
node . candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
```


#### Output

```
Wallet {
  signingKey: 
   SigningKey {
     mnemonic: 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat',
     path: 'm/2147483692\'/2147483708\'/2147483648\'/0/0',
     privateKey: '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3',
     keyPair: 
      KeyPair {
        privateKey: '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3',
        publicKey: '0x04af80b90d25145da28c583359beb47b21796b2fe1a23c1511e443e7a64dfdb27d7434c380f0aa4c500e220aa1a9d068514b1ff4d5019e624e7ba1efe82b340a59',
        compressedPublicKey: '0x03af80b90d25145da28c583359beb47b21796b2fe1a23c1511e443e7a64dfdb27d',
        publicKeyBytes: [Array] },
     publicKey: '0x04af80b90d25145da28c583359beb47b21796b2fe1a23c1511e443e7a64dfdb27d7434c380f0aa4c500e220aa1a9d068514b1ff4d5019e624e7ba1efe82b340a59',
     address: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57' },
  provider: undefined }
  ```
