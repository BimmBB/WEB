function hitung() {
    var bil1 = parseFloat(document.getElementById('bil1').value);
    var bil2 = parseFloat(document.getElementById('bil2').value);

    if (!isNaN(bil1) && !isNaN(bil2)) {
        var hasil = bil1 + bil2;
        document.getElementById('hasil').innerText = "Hasil: " + hasil;
    } else {
        document.getElementById('hasil').innerText = "Mohon masukkan angka yang valid";
    }
}

function reset() {
    document.getElementById('bil1').value = '';
    document.getElementById('bil2').value = '';
    document.getElementById('hasil').innerText = "Hasil: 0";
}
