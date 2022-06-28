function createLink(QR)
{
    let QRlink = document.getElementById('QRlink');
    QRlink.setAttribute('href', QR);
}

function generateQR(data)
{
    let QR = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + data;
    document.getElementById('QR_code_image').src = QR; 
    createLink(QR); 
}

let generate_QR_code_button = document.getElementById('Generate_QR_code'); 
generate_QR_code_button.addEventListener('click', function() {
    let data = document.getElementById('data').value;
    if(data.length == 0)
    {
        alert('Please enter the data');
    }
    else
        generateQR(data);
});