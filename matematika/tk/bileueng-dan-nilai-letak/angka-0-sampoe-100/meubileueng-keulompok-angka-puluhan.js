let kolomJawaban1 = document.getElementById("kolomjawaban1");
let tombolJawaban1 = document.getElementById('cekjawaban1');
let hasilJawaban1 = document.getElementById('jawaban1');

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

//Periksa jawaban no. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi1_3 = document.getElementById('opsi1_3');

  if (opsi1_3.checked == true) {
    if (j1 == true) {
      hasilJawaban1.innerHTML = 'Beutôi';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j1 = false;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
      j1 = true;
    }
  } else {
    if (j1 == true) {
      hasilJawaban1.innerHTML = 'Salah';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j1 = false;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
      j1 = true;
    }
  }
})

//Perisksa Jawaban No. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi2_1 = document.getElementById('opsi2_1');

  if (opsi2_1.checked == true) {
    if (j2 == true) {
      hasilJawaban2.innerHTML = 'Beutôi';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
    } else {
      hasilJawaban2.innerHTML = '';
      tombolJawaban2.innerHTML = 'Peuréksa Jawaban';
      j2 = true;
    }
  } else {
    if (j2 == true) {
      hasilJawaban2.innerHTML = 'Salah';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
    } else {
      hasilJawaban2.innerHTML = '';
      tombolJawaban2.innerHTML = 'Peuréksa Jawaban';
      j2 = true;
    }
  }
})


//Periksa jawaban no. 3

//Saat gambar di-drag & di-drop pada kotak jawaban

let counter3 = 0;
let kotakGambarDrag3 = document.querySelector('.kotak-gambar-drag3');
let gambarDrag3 = document.querySelector('.kotak-gambar-drag3 img');
let dropZone3 = document.getElementById('drop-zone3');
let selected3;
let gambarDrop3 = [];
let hapusDrop3 = document.getElementById('hapusDrop3');
let spaceSoal3 = document.getElementById('space-soal-3');
let cekJawaban3 = document.getElementById('cekJawaban3')
let tandaSudahPenuh3 = document.createElement("div");
let hasilJawaban3 = document.getElementById('hasilJawaban3');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag3.addEventListener('dragstart', function(e) {
    selected3 = e.target;
    e.dataTransfer.setData('soal', '3'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone3.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone3.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '3') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter3 == 8) {
    
        tandaSudahPenuh3.setAttribute("id", "kotak-soal-3-penuh");
        tandaSudahPenuh3.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal3.replaceWith(tandaSudahPenuh3);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter3 < 8) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter3++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru3 = document.createElement('div');
        divBaru3.style.width = '100px';
        divBaru3.style.display = 'inline-block';
        divBaru3.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected3 = selected3.cloneNode(true);
        divBaru3.appendChild(clonedSelected3);
        clonedSelected3.draggable = false;

        gambarDrop3[counter3-1] = clonedSelected3;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
        dropZone3.appendChild(divBaru3);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop3.addEventListener('click', function() {

    let gambarTerakhirDivBaru3 = dropZone3.lastElementChild;

    if (gambarDrop3.length > 0) {
    
        dropZone3.removeChild(gambarTerakhirDivBaru3);
        gambarDrop3.pop();
        counter3--;

    }

    gambarTerakhirDivBaru3 = dropZone3.lastElementChild;

    if (counter3 < 8) {
        tandaSudahPenuh3.replaceWith(spaceSoal3);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban3.addEventListener('click', function() {

    if (counter3 == 0) {
        hasilJawaban3.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter3 == 4) {
        hasilJawaban3.innerHTML = '<b>Beutôi</b>';
    } else {
        hasilJawaban3.innerHTML = '<b>Salah</b>';
    }
    
})