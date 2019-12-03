import * as mobilenet from '@tensorflow-models/mobilenet';
import '@babel/polyfill'

const img = document.getElementById('img');

async function classify(){
// Load the model.
const model = await mobilenet.load();

// Classify the image.
const predictions = await model.classify(img);

console.log('Predictions: ');
console.log(predictions);
}

classify()
