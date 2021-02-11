const Matrix = require("./matrix");
const RedeNeural = require("./RedeNeural");

var rna = new RedeNeural(2, 3, 1);

// XOR

dataset = {
  inputs: [
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
  outputs: [[0], [1], [1], [0]],
};
// var train = true;
// while (train) {
for (var i = 0; i < 100; i++) {
  var index = Math.floor(Math.random(4));
  rna.train(dataset.inputs[index], dataset.outputs[index]);
}

if (rna.predict([0, 0])[0] < 0.04 && rna.predict([1, 0])[0] > 0.98) {
  traind = false;

  console.log("terminou");
  console.log("[1,0]: Saída: " + rna.predict([1, 0])[0]);
}
// }
