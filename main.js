let genetateButton = document.querySelector(".info-card__button");
let inputLink = document.querySelector(".info-card__website-link");
let inputSize = document.querySelector(".info-card__size");
let inputCheckBox = document.querySelector(".info__darck-background");

let qrCodeContainer = document.querySelector(".app__qr-code");
let qrCodeImage = document.querySelector(".qr-code__image");
let downloadButton = document.querySelector(".qr-code__button");

genetateButton.addEventListener('click', (e) => {
    e.preventDefault();

    //empty the qrCodeImage
    qrCodeImage.innerHTML = '';
    qrCodeContainer.classList.add('app__qr-code--hide');

    if (inputLink.value == '') {
        window.alert('Please enter the link');
    }
    else {

        let qrcode = new QRCode(qrCodeImage, {
            text: inputLink.value,
            width: inputSize.value,
            height: inputSize.value,
            colorDark: inputCheckBox.checked?"#ffffff":"#000000",
            colorLight: inputCheckBox.checked?"#000000":"#ffffff"
        });

        qrCodeContainer.classList.remove('app__qr-code--hide');
    }

})

downloadButton.addEventListener('click', (e) => {
    downloadButton.href = qrCodeImage.querySelector('img').src;
    downloadButton.download = `Qr-code ${inputSize.value}x${inputSize.value} `;
})


