function generateWiFiQR(ssid, password, encryption) {
    var wifiConfig = `WIFI:S:${ssid};T:${encryption};P:${password};;`;
    new QRCode(document.getElementById("qrcode"), {
        text: wifiConfig,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.H
    });
}

var ssid = "smart";
var password = "qawsedrf@2023";
var encryption = "WPA";  // Set to "WPA", "WEP", or "none" based on your encryption type

generateWiFiQR(ssid, password, encryption);