'use stricit';

import * as tf from '@tensorflow/tfjs';

// private Uint8Array 32 [5, 16, 75, 141, 123, 203, 73, 137, 163, 243, 162, 233, 116, 89, 124, 84, 176, 13, 204, 53, 206, 2, 226, 41, 229, 131, 153, 124, 154, 36, 240, 89]
// public  Uint8Array 33 [2, 211, 158, 64, 165, 31, 121, 182, 51, 183, 123, 29, 70, 34, 149, 56, 42, 166, 217, 203, 74, 47, 199, 153, 77, 80, 147, 34, 213, 121, 110, 77, 105]
// p2pkh   Uint8Array 25 [0, 184, 142, 163, 73, 186, 250, 212, 160, 15, 0, 17, 102, 168, 39, 171, 7, 127, 105, 198, 122, 154, 25, 109, 156]

const privkey = tf.tensor([5, 16, 75, 141, 123, 203, 73, 137, 163, 243, 162, 233, 116, 89, 124, 84, 176, 13, 204, 53, 206, 2, 226, 41, 229, 131, 153, 124, 154, 36, 240, 89])
const address = tf.tensor([0, 184, 142, 163, 73, 186, 250, 212, 160, 15, 0, 17, 102, 168, 39, 171, 7, 127, 105, 198, 122, 154, 25, 109, 156])

//privateKey.array().then(array => console.log(array))
//privateKey.data().then(data => console.log(data))

/*
import * as bs58 from 'bs58'
const p2pkh = '1HprCwyqJQPBvLg76pM98dRe44k9SvSugX'
const bytes = bs58.decode(p2pkh)
console.log(bytes)
*/