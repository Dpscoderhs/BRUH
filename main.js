function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7umes6Ok9/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}