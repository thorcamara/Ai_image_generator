const apiKey = "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";

const maxImages = 4;
let selectedImageNumber = null;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function disableGenerateButton() {
  document.getElementById("generate").disabled = true;
}