let skor_akhir = 0;
let jumlah_benar = 0;

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

let kolomJawaban3 = document.getElementById("kolomjawaban3");
let tombolJawaban3 = document.getElementById('cekjawaban3');
let hasilJawaban3 = document.getElementById('jawaban3');

let kolomJawaban4 = document.getElementById("kolomjawaban4");
let tombolJawaban4 = document.getElementById('cekjawaban4');
let hasilJawaban4 = document.getElementById('jawaban4');

let kolomJawaban5 = document.getElementById("kolomjawaban5");
let tombolJawaban5 = document.getElementById('cekjawaban5');
let hasilJawaban5 = document.getElementById('jawaban5');

let kolomJawaban7 = document.getElementById("kolomjawaban7");
let tombolJawaban7 = document.getElementById('cekjawaban7');
let hasilJawaban7 = document.getElementById('jawaban7');

let kolomJawaban8 = document.getElementById("kolomjawaban8");
let tombolJawaban8 = document.getElementById('cekjawaban8');
let hasilJawaban8 = document.getElementById('jawaban8');

let kolomJawaban9 = document.getElementById("kolomjawaban9");
let tombolJawaban9 = document.getElementById('cekjawaban9');
let hasilJawaban9 = document.getElementById('jawaban9');

let kolomJawaban10 = document.getElementById("kolomjawaban10");
let tombolJawaban10 = document.getElementById('cekjawaban10');
let hasilJawaban10 = document.getElementById('jawaban10');



//Periksa jawaban no. 1

//Saat gambar di-drag & di-drop pada kotak jawaban

let counter1 = 0;
let kotakGambarDrag1 = document.querySelector('.kotak-gambar-drag1');
let gambarDrag1 = document.querySelector('.kotak-gambar-drag1 img');
let dropZone1 = document.getElementById('drop-zone1');
let selected1;
let gambarDrop1 = [];
let hapusDrop1 = document.getElementById('hapusDrop1');
let spaceSoal1 = document.getElementById('space-soal-1');
let cekJawaban1 = document.getElementById('cekJawaban1')
let tandaSudahPenuh1 = document.createElement("div");
let hasilJawaban1 = document.getElementById('hasilJawaban1');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag1.addEventListener('dragstart', function(e) {
    selected1 = e.target;
    e.dataTransfer.setData('soal', '1'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone1.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone1.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '1') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter1 == 8) {
    
        tandaSudahPenuh1.setAttribute("id", "kotak-soal-1-penuh");
        tandaSudahPenuh1.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal1.replaceWith(tandaSudahPenuh1);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter1 < 8) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter1++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru1 = document.createElement('div');
        divBaru1.style.width = '100px';
        divBaru1.style.display = 'inline-block';
        divBaru1.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected1 = selected1.cloneNode(true);
        divBaru1.appendChild(clonedSelected1);
        clonedSelected1.draggable = false;

        gambarDrop1[counter1-1] = clonedSelected1;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
        dropZone1.appendChild(divBaru1);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop1.addEventListener('click', function() {

    let gambarTerakhirDivBaru1 = dropZone1.lastElementChild;

    if (gambarDrop1.length > 0) {
    
        dropZone1.removeChild(gambarTerakhirDivBaru1);
        gambarDrop1.pop();
        counter1--;

    }

    gambarTerakhirDivBaru1 = dropZone1.lastElementChild;

    if (counter1 < 8) {
        tandaSudahPenuh1.replaceWith(spaceSoal1);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban1.addEventListener('click', function() {

    if (counter1 == 0) {
        hasilJawaban1.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter1 == 7) {
        hasilJawaban1.innerHTML = '<b>Beutôi</b>';
        skor_akhir = skor_akhir+10;
        jumlah_benar = jumlah_benar+1;
    } else {
        hasilJawaban1.innerHTML = '<b>Salah</b>';
    }
    
})


//Periksa jawaban no. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi2_2 = document.getElementById('opsi2_2');

  if (opsi2_2.checked == true) {
    if (j2 == true) {
      hasilJawaban2.innerHTML = 'Beutôi';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
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
  let isian3 = document.getElementById('isian3');

  if (isian3.value == 8) {
    if (j3 == true) {
      hasilJawaban3.innerHTML = 'Beutôi';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
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

//Perisksa Jawaban No. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi4_1 = document.getElementById('opsi4_1');

  if (opsi4_1.checked == true) {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Beutôi';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
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

//Perisksa Jawaban No. 5
let j5 = true;

kolomJawaban5.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi5_1 = document.getElementById('opsi5_1');

  if (opsi5_1.checked == true) {
    if (j5 == true) {
      hasilJawaban5.innerHTML = 'Beutôi';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  } else {
    if (j5 == true) {
      hasilJawaban5.innerHTML = 'Salah';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  }
})

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
gambarDrag6.addEventListener('dragstart', function(e) {
    selected6 = e.target;
    e.dataTransfer.setData('soal', '6'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone6.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone6.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '6') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter6 == 8) {
    
        tandaSudahPenuh6.setAttribute("id", "kotak-soal-2-penuh");
        tandaSudahPenuh6.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal6.replaceWith(tandaSudahPenuh6);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter6 < 8) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter6++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru6 = document.createElement('div');
        divBaru6.style.width = '100px';
        divBaru6.style.display = 'inline-block';
        divBaru6.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected6 = selected6.cloneNode(true);
        divBaru6.appendChild(clonedSelected6);
        clonedSelected6.draggable = false;

        gambarDrop6[counter6-1] = clonedSelected6;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
        dropZone6.appendChild(divBaru6);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop6.addEventListener('click', function() {

    let gambarTerakhirDivBaru6 = dropZone6.lastElementChild;

    if (gambarDrop6.length > 0) {
    
        dropZone6.removeChild(gambarTerakhirDivBaru6);
        gambarDrop6.pop();
        counter6--;

    }

    gambarTerakhirDivBaru6 = dropZone6.lastElementChild;

    if (counter6 < 8) {
        tandaSudahPenuh6.replaceWith(spaceSoal6);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban6.addEventListener('click', function() {

    if (counter6 == 0) {
        hasilJawaban6.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter6 == 6) {
        hasilJawaban6.innerHTML = '<b>Beutôi</b>';
        skor_akhir = skor_akhir+10;
        jumlah_benar = jumlah_benar+1;
    } else {
        hasilJawaban6.innerHTML = '<b>Salah</b>';
    }
    
})

//Perisksa Jawaban No. 7
let j7 = true;

kolomJawaban7.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi7_3 = document.getElementById('opsi7_3');

  if (opsi7_3.checked == true) {
    if (j7 == true) {
      hasilJawaban7.innerHTML = 'Beutôi';
      tombolJawaban7.innerHTML = 'Tôp Jawaban';
      j7 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban7.innerHTML = '';
      tombolJawaban7.innerHTML = 'Peuréksa Jawaban';
      j7 = true;
    }
  } else {
    if (j7 == true) {
      hasilJawaban7.innerHTML = 'Salah';
      tombolJawaban7.innerHTML = 'Tôp Jawaban';
      j7 = false;
    } else {
      hasilJawaban7.innerHTML = '';
      tombolJawaban7.innerHTML = 'Peuréksa Jawaban';
      j7 = true;
    }
  }
})

//Perisksa Jawaban No. 8
let j8 = true;

kolomJawaban8.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi8_1 = document.getElementById('opsi8_1');

  if (opsi8_1.checked == true) {
    if (j8 == true) {
      hasilJawaban8.innerHTML = 'Beutôi';
      tombolJawaban8.innerHTML = 'Tôp Jawaban';
      j8 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban8.innerHTML = '';
      tombolJawaban8.innerHTML = 'Peuréksa Jawaban';
      j8 = true;
    }
  } else {
    if (j8 == true) {
      hasilJawaban8.innerHTML = 'Salah';
      tombolJawaban8.innerHTML = 'Tôp Jawaban';
      j8 = false;
    } else {
      hasilJawaban8.innerHTML = '';
      tombolJawaban8.innerHTML = 'Peuréksa Jawaban';
      j8 = true;
    }
  }
})

//Perisksa Jawaban No. 9
let j9 = true;

kolomJawaban9.addEventListener('submit', function(event) {
  event.preventDefault();
  let input9_1 = document.getElementById('input9_1');
  let input9_2 = document.getElementById('input9_2');

  if (input9_1.value == 35 && input9_2.value == 39) {
    if (j9 == true) {
      hasilJawaban9.innerHTML = 'Beutôi';
      tombolJawaban9.innerHTML = 'Tôp Jawaban';
      j9 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban9.innerHTML = '';
      tombolJawaban9.innerHTML = 'Peuréksa Jawaban';
      j9 = true;
    }
  } else {
    if (j9 == true) {
      hasilJawaban9.innerHTML = 'Salah';
      tombolJawaban9.innerHTML = 'Tôp Jawaban';
      j9 = false;
    } else {
      hasilJawaban9.innerHTML = '';
      tombolJawaban9.innerHTML = 'Peuréksa Jawaban';
      j9 = true;
    }
  }
})

//Periksa jawaban no. 10
let j10 = true;

kolomJawaban10.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi10_1 = document.getElementById('opsi10_1');

  if (opsi10_1.checked == true) {
    if (j10 == true) {
      hasilJawaban10.innerHTML = 'Beutôi';
      tombolJawaban10.innerHTML = 'Tôp Jawaban';
      j10 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban10.innerHTML = '';
      tombolJawaban10.innerHTML = 'Peuréksa Jawaban';
      j10 = true;
    }
  } else {
    if (j10 == true) {
      hasilJawaban10.innerHTML = 'Salah';
      tombolJawaban10.innerHTML = 'Tôp Jawaban';
      j10 = false;
    } else {
      hasilJawaban10.innerHTML = '';
      tombolJawaban10.innerHTML = 'Peuréksa Jawaban';
      j10 = true;
    }
  }
  
})


let kolomNilai = document.getElementById("kolomnilai");
let tombolNilai = document.getElementById('ceknilai');
let hasilNilai = document.getElementById('nilai');

//Periksa jumlah benar dan nilai (skor) akhir
let j_nilai = true;

kolomNilai.addEventListener('submit', function(event) {
  event.preventDefault();

  if (j_nilai == true) {
    hasilNilai.innerHTML = skor_akhir;
    tombolNilai.innerHTML = 'Tôp Hasil';
    j_nilai = false;
  } else {
    hasilNilai.innerHTML = '';
    tombolNilai.innerHTML = 'Cek Nilai';
    j_nilai = true;
  }
  
})


