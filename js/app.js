let encryptKey = document.getElementById("encryptKey");
let decryptKey = document.getElementById("decryptKey");
let encryptedMsg = document.getElementById("encryptedMsg");

const input = document.getElementById("inputMsg");
const output = document.getElementById("outputMsg");

encryptKey.value = 1;
decryptKey.value = 1;

input.addEventListener("input", updateOutput);
encryptKey.addEventListener("input", updateOutput);
decryptKey.addEventListener("input", updateOutput);

function updateOutput() {
    let inputValue = input.value;
    let encryptKeyValue = parseInt(encryptKey.value);
    let decryptKeyValue = parseInt(decryptKey.value);

    if (encryptKeyValue < 1) {
        encryptKeyValue = 1;
        encryptKey.value = 1;
    }

    if (decryptKeyValue < 1) {
        decryptKeyValue = 1;
        decryptKey.value = 1;
    }

    encrypt(inputValue, encryptKeyValue);
}

function encrypt(msg, key) {
    let encryptedText = "";

    for (let x = 0; x < msg.length; x++) {
        let asciiOfX = msg.charCodeAt(x);


        let nextAsciiOfX = (asciiOfX  + key) % 128;

        let encryptedX = String.fromCharCode(nextAsciiOfX);

        encryptedText += encryptedX;
    }

    let encryptedMsgText = encryptedText;

    decrypt(encryptedMsgText, parseInt(decryptKey.value));
}

function decrypt(msg, key) {
    let decryptedText = "";

    for (let x = 0; x < msg.length; x++) {
        let asciiOfX = msg.charCodeAt(x);

        let prevAsciiOfX = (128 + asciiOfX - key) % 128;

        let decryptedX = String.fromCharCode(prevAsciiOfX);

        decryptedText += decryptedX;
    }

    let decryptedMsgText = decryptedText;

    updateData(decryptedMsgText, msg);
}

function updateData(decryptedMsgText, encryptedMsgText) {
    output.value = decryptedMsgText;
    encryptedMsg.innerHTML = encryptedMsgText;
}
