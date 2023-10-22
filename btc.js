'use stricit';
/*
function rnd256() {
    const bytes = new Uint8Array(32);

    // load cryptographically random bytes into array
    window.crypto.getRandomValues(bytes);

    // convert byte array to hexademical representation
    const bytesHex = bytes.reduce((o, v) => o + ('00' + v.toString(16)).slice(-2), '');

    // convert hexademical value to a decimal string
    //return BigInt('0x' + bytesHex).toString(10);
    return '0x' + bytesHex;
}
//console.log(rnd256());
//0x4558a44767ffcc126a56d1d044ba1975e16e29b0c77f6090418b10eaa79b89d9

function generatePrivateKey() {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
  
    let hexString = '';
    for (let i = 0; i < array.length; i++) {
      hexString += array[i].toString(16).padStart(8, '0');
    }
  
    //let privateKey = '5' + hexString.substring(1, 65);
    //let privateKey = 'K' + hexString.substring(1, 65);
    //let privateKey = 'L' + hexString.substring(1, 65);
  
    return privateKey;
}
  
let privateKey = generatePrivateKey();
console.log(`BTC Private Key (starting with '5'): 0x${privateKey}`);
*/

// https://github.com/jprichardson/procbits.com/blob/master/articles/2013/08/generating-a-bitcoin-address-with-javascript.md

// https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/addresses.spec.ts

import { ECPairFactory } from 'ecpair';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';

//import { hash160 } from './crypto.js';
//import { ripemd160 } from '@noble/hashes/ripemd160';
//import { sha256 } from '@noble/hashes/sha256';

const ECPair = ECPairFactory(ecc);

const keyPair = ECPair.makeRandom();
console.log("keyPair:", keyPair);

console.log("publicKey hash1:", new Uint8Array(keyPair.publicKey));

//hash160
//console.log("publicKey hash2:", Buffer.from((0, ripemd160)((0, sha256)(new Uint8Array(keyPair.publicKey)))));

const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

console.log("address:", address);

//export default { keyPair: keyPair }

// https://blockchain.info/rawaddr/1c9e575bd34227e02db7b8f8da8fd30b3980da68

//Buffer.from(bs58check.decode(a.address));
//const pkh = bcrypto.hash160(a.pubkey);