
// Usage: node . [seed phrase]
//    eg: node . candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

const ethers = require('ethers')


if (process.argv.length < 3) {
	console.log('Usage: node . <seed phrase> \n'+
				'   eg: node . candy maple cake sugar pudding cream honey rich smooth crumble sweet treat')
	process.exit(0)
}

let seedWords = []
;[,,...seedWords] = process.argv
const mnemonic = seedWords.join(' ')

const wallet = ethers.Wallet.fromMnemonic(mnemonic)

console.log(wallet)

