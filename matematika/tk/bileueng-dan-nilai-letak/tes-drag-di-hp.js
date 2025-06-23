function suaraJawabanBenar() {
    let suara = document.getElementById("suara-jawaban-benar");
    suara.currentTime = 0; // Reset waktu jika ingin bisa diklik berulang
    suara.play();
}

function suaraJawabanSalah() {
    let suara = document.getElementById("suara-jawaban-salah");
    suara.currentTime = 0; // Reset waktu jika ingin bisa diklik berulang
    suara.play();
}

//Perisksa Jawaban No. 6

//Saat gambar di-drag & di-drop pada kotak jawaban
let counter6 = 0;
let kotakGambarDrag6 = document.querySelector('.kotak-gambar-drag6');
let gambarDrag6 = document.querySelector('.kotak-gambar-drag6 img');
let dropZone6 = document.getElementById('drop-zone6');
let selected6;
let gambarDrop6 = [];
let hapusDrop6 = document.getElementById('hapusDrop6');
let spaceSoal6 = document.getElementById('space-soal-6');
let cekJawaban6 = document.getElementById('cekJawaban6')
let tandaSudahPenuh6 = document.createElement("div");
let hasilJawaban6 = document.getElementById('hasilJawaban6');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
// gambarDrag6.addEventListener('dragstart', function(e) {
//     selected6 = e.target;
//     e.dataTransfer.setData('soal', '6'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
// })

// // Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
// dropZone6.addEventListener('dragover', function(e) {
//     e.preventDefault();
// })
    
// dropZone6.addEventListener('drop', function(e) {

//     // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
//     if (e.dataTransfer.getData('soal') !== '6') return;
    
//     //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
//     if (counter6 == 8) {
    
//         tandaSudahPenuh6.setAttribute("id", "kotak-soal-2-penuh");
//         tandaSudahPenuh6.innerHTML = "<b>Ka Peunoh</b>";

//         spaceSoal6.replaceWith(tandaSudahPenuh6);
//     }

//     //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
//     if (counter6 < 8) {
//         //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
//         counter6++;

//         // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
//         let divBaru6 = document.createElement('div');
//         divBaru6.style.width = '100px';
//         divBaru6.style.display = 'inline-block';
//         divBaru6.draggable = false;
        
//         // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
//         // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
//         let clonedSelected6 = selected6.cloneNode(true);
//         divBaru6.appendChild(clonedSelected6);
//         clonedSelected6.draggable = false;

//         gambarDrop6[counter6-1] = clonedSelected6;
    
//         //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
//         dropZone6.appendChild(divBaru6);
//     }
// })

// //Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
// hapusDrop6.addEventListener('click', function() {

//     let gambarTerakhirDivBaru6 = dropZone6.lastElementChild;

//     if (gambarDrop6.length > 0) {
    
//         dropZone6.removeChild(gambarTerakhirDivBaru6);
//         gambarDrop6.pop();
//         counter6--;

//     }

//     gambarTerakhirDivBaru6 = dropZone6.lastElementChild;

//     if (counter6 < 8) {
//         tandaSudahPenuh6.replaceWith(spaceSoal6);
//     }
    
// })

// //Saat tombol 'Cek Jawaban' di-klik
// cekJawaban6.addEventListener('click', function() {

//     if (counter6 == 0) {
//         hasilJawaban6.innerHTML = 'Kotak Mantöng Soh';
//     } else if (counter6 == 6) {
//         suaraJawabanBenar();
//         hasilJawaban6.innerHTML = 'Beutôi';
//         hasilJawaban6.style.fontSize = '16.5px';
//         hasilJawaban6.style.color = 'green';
//         skor_akhir = skor_akhir+10;
//         jumlah_benar = jumlah_benar+1;
//     } else {
//         suaraJawabanSalah();
//         hasilJawaban6.innerHTML = 'Salah';
//         hasilJawaban6.style.fontSize = '16.5px';
//         hasilJawaban6.style.color = 'red';
//     }
    
// })









// DENGAN HP

// Tambah event listener untuk "touchstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag6.addEventListener('touchstart', function(e) {
    selected6 = e.target;
    console.log(e);
})

// Tambah event listener untuk "touchmove" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag6.addEventListener('touchmove', function(e) {
    selected6 = e.target;
    console.log(e);
})

// Tambah event listener untuk "touchend" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag6.addEventListener('touchend', function(e) {
    selected6 = e.target;
    console.log(e);
})


