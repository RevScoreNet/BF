import * as bs58 from 'bs58'

// private Uint8Array [5, 16, 75, 141, 123, 203, 73, 137, 163, 243, 162, 233, 116, 89, 124, 84, 176, 13, 204, 53, 206, 2, 226, 41, 229, 131, 153, 124, 154, 36, 240, 89]
// public  Uint8Array [2, 211, 158, 64, 165, 31, 121, 182, 51, 183, 123, 29, 70, 34, 149, 56, 42, 166, 217, 203, 74, 47, 199, 153, 77, 80, 147, 34, 213, 121, 110, 77, 105]
// p2pkh   1HprCwyqJQPBvLg76pM98dRe44k9SvSugX

const address = '1HprCwyqJQPBvLg76pM98dRe44k9SvSugX'
const bytes = bs58.decode(address)
// See uint8array-tools package for helpful hex encoding/decoding/compare tools
console.log(bytes)
console.log(Buffer.from(new Uint8Array([2, 211, 158, 64, 165, 31, 121, 182, 51, 183, 123, 29, 70, 34, 149, 56, 42, 166, 217, 203, 74, 47, 199, 153, 77, 80, 147, 34, 213, 121, 110, 77, 105])).toString('hex'))
// address 02d39e40a51f79b633b77b1d462295382aa6d9cb4a2fc7994d509322d5796e4d69
//[0, 184, 142, 163, 73, 186, 250, 212, 160, 15, 0, 17, 102, 168, 39, 171, 7, 127, 105, 198, 122, 154, 25, 109, 156]
//00b88ea349bafad4a00f001166a827ab077f69c67a9a196d9c


// https://blockchain.info/q/addressbalance/1HprCwyqJQPBvLg76pM98dRe44k9SvSugX

/*
There are many types of valid bitcoin addresses, but they all fall into one of the following three categories.

Addresses starting with a “1”. These are known as Legacy, or P2PKH (Pay-to-pubkey-hash) addresses.
Addresses starting with a “3”. These are known as P2SH (Pay-to-script-hash) addresses. There are many types of this format, but the most common is known as “Wrapped Segwit”.
Addresses starting with a “bc1”. These are known as “Bech32” or “Native Segwit”. These also include the newest type of address called “Taproot”, which Cash App supports sending to. Cash App uses these for deposits.

Cash App allows withdrawals to all valid address formats. For customer deposits, Cash App uses P2WPKH Segwit addresses.
*/

// https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html