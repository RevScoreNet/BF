'use stricit';

//import {fc} from './fc.js'

//const init = new fc({a: 'b'})
//console.log(init);
//alert(init.str({test: "abcd"}))

/*
import * as tf from '@tensorflow/tfjs';

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
});
*/

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

import ECPairFactory from 'ecpair';
//import * as bitcoin from '../..';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);

const keyPair = ECPair.makeRandom();
console.log("keyPair:", keyPair);

//const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });