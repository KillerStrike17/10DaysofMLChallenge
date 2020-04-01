const webcamElement = document.getElementById('webcam');
const classifier = knnClassifier.create();

let net;
var dict = {'Horlicks':10,'Bottle':100,'Mobile':10000,'Headphone':500,'Noobject':0};
var checkout = 0

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Create an object from Tensorflow.js data API which could capture image 
  // from the web camera as Tensor.
  const webcam = await tf.data.webcam(webcamElement);

  // Reads an image from the webcam and associates it with a specific class
  // index.
  const addExample = async classId => {
    // Capture an image from the web camera.
    const img = await webcam.capture();

    // Get the intermediate activation of MobileNet 'conv_preds' and pass that
    // to the KNN classifier.
    const activation = net.infer(img, 'conv_preds');

    // Pass the intermediate activation to the classifier.
    classifier.addExample(activation, classId);

    // Dispose the tensor to release the memory.
    img.dispose();
  };

  // When clicking a button, add an example for that class.
  document.getElementById('Horlicks').addEventListener('click', () => addExample(0));
  document.getElementById('Bottle').addEventListener('click', () => addExample(1));
  document.getElementById('Mobile').addEventListener('click', () => addExample(2));
  document.getElementById('Headphones').addEventListener('click', () => addExample(3));
  document.getElementById('Noobject').addEventListener('click', () => addExample(4));
  document.getElementById('Checkout').addEventListener('click', () => console.log("Total Cost: ",checkout));
  document.getElementById('reset').addEventListener('click', () => checkout = 0);
  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture();

      // Get the activation from mobilenet from the webcam.
      const activation = net.infer(img, 'conv_preds');
      // Get the most likely class and confidence from the classifier module.
      const result = await classifier.predictClass(activation);

      const classes = ['Horlicks', 'Bottle', 'Mobile','Headphone','Noobject'];

      document.getElementById('console').innerText = `
        prediction: ${classes[result.label]}\n
        probability: ${result.confidences[result.label]}\n
        cost: ${dict[classes[result.label]]}\n
        checkout: ${checkout}\n
      `;
      checkout = checkout + dict[classes[result.label]];

      // Dispose the tensor to release the memory.
      img.dispose();
    }
    await sleep(2000);
    await tf.nextFrame();
    // /yield sleep(2000);
    console.log('Pausing Model');
  }
}

app();