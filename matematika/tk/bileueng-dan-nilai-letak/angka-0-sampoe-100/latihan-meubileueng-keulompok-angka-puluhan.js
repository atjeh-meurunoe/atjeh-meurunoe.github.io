let kolomJawaban1 = document.getElementById("kolomjawaban1");
let tombolJawaban1 = document.getElementById('cekjawaban1');
let hasilJawaban1 = document.getElementById('jawaban1');

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

let kolomJawaban3 = document.getElementById("kolomjawaban3");
let tombolJawaban3 = document.getElementById('cekjawaban3');
let hasilJawaban3 = document.getElementById('jawaban3');

let kolomJawaban4 = document.getElementById("kolomjawaban4");
let tombolJawaban4 = document.getElementById('cekjawaban4');
let hasilJawaban4 = document.getElementById('jawaban4');

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

//Perisksa Jawaban No. 3
let j3 = true;

kolomJawaban3.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi3_1 = document.getElementById('opsi3_1');

  if (opsi3_1.checked == true) {
    if (j3 == true) {
      hasilJawaban3.innerHTML = 'Beutôi';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  } else {
    if (j3 == true) {
      hasilJawaban3.innerHTML = 'Salah';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  }
})

//Perisksa Jawaban No. 2
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi4_2 = document.getElementById('opsi4_2');

  if (opsi4_2.checked == true) {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Beutôi';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
    } else {
      hasilJawaban4.innerHTML = '';
      tombolJawaban4.innerHTML = 'Peuréksa Jawaban';
      j4 = true;
    }
  } else {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Salah';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
    } else {
      hasilJawaban4.innerHTML = '';
      tombolJawaban4.innerHTML = 'Peuréksa Jawaban';
      j4 = true;
    }
  }
})


//Periksa jawaban no. 5

//Saat gambar di-drag & di-drop pada kotak jawaban

let counter5 = 0;
let kotakGambarDrag5 = document.querySelector('.kotak-gambar-drag5');
let gambarDrag5 = document.querySelector('.kotak-gambar-drag5 img');
let dropZone5 = document.getElementById('drop-zone5');
let selected5;
let gambarDrop5 = [];
let hapusDrop5 = document.getElementById('hapusDrop5');
let spaceSoal5 = document.getElementById('space-soal-5');
let cekJawaban5 = document.getElementById('cekJawaban5')
let tandaSudahPenuh5 = document.createElement("div");
let hasilJawaban5 = document.getElementById('hasilJawaban5');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag5.addEventListener('dragstart', function(e) {
    selected5 = e.target;
    e.dataTransfer.setData('soal', '5'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone5.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone5.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '5') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter5 == 8) {
    
        tandaSudahPenuh5.setAttribute("id", "kotak-soal-5-penuh");
        tandaSudahPenuh5.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal5.replaceWith(tandaSudahPenuh5);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter5 < 8) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter5++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru5 = document.createElement('div');
        divBaru5.style.width = '100px';
        divBaru5.style.display = 'inline-block';
        divBaru5.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected5 = selected5.cloneNode(true);
        divBaru5.appendChild(clonedSelected5);
        clonedSelected5.draggable = false;

        gambarDrop5[counter5-1] = clonedSelected5;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
        dropZone5.appendChild(divBaru5);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop5.addEventListener('click', function() {

    let gambarTerakhirDivBaru5 = dropZone5.lastElementChild;

    if (gambarDrop5.length > 0) {
    
        dropZone5.removeChild(gambarTerakhirDivBaru5);
        gambarDrop5.pop();
        counter5--;

    }

    gambarTerakhirDivBaru5 = dropZone5.lastElementChild;

    if (counter5 < 8) {
        tandaSudahPenuh5.replaceWith(spaceSoal5);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban5.addEventListener('click', function() {

    if (counter5 == 0) {
        hasilJawaban5.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter5 == 6) {
        hasilJawaban5.innerHTML = '<b>Beutôi</b>';
    } else {
        hasilJawaban5.innerHTML = '<b>Salah</b>';
    }
    
})