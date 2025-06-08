let skor_akhir = 0;
let jumlah_benar = 0;

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

let kolomJawaban5 = document.getElementById("kolomjawaban5");
let tombolJawaban5 = document.getElementById('cekjawaban5');

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
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi1_3 = document.getElementById('opsi1_3');

  if (opsi1_3.checked == true) {
    if (j1 == true) {
      hasilJawaban1.innerHTML = 'Beutôi';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j1 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
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


//Periksa jawaban no. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi2_1 = document.getElementById('opsi2_1');

  if (opsi2_1.checked == true) {
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
  let input3_1 = document.getElementById('input3_1');
  let input3_2 = document.getElementById('input3_2');

  if (input3_1.value == 7 && input3_2.value == 11) {
    if (j3 == true) {
      document.getElementById("jawaban3").innerHTML = 'Beutôi';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      document.getElementById("jawaban3").innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  } else {
    if (j3 == true) {
      document.getElementById("jawaban3").innerHTML = 'Salah';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
    } else {
      document.getElementById("jawaban3").innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  }
  
})

//Perisksa Jawaban No. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi4_3 = document.getElementById('opsi4_3');

  if (opsi4_3.checked == true) {
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
  let input5_1 = document.getElementById('input5_1');
  let input5_2 = document.getElementById('input5_2');

  if (input5_1.value == 3 && input5_2.value == 5) {
    if (j5 == true) {
      document.getElementById("jawaban5").innerHTML = 'Beutôi';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      document.getElementById("jawaban5").innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  } else {
    if (j5 == true) {
      document.getElementById("jawaban5").innerHTML = 'Salah';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      document.getElementById("jawaban5").innerHTML = '';
      tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
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
  let opsi7_1 = document.getElementById('opsi7_1');

  if (opsi7_1.checked == true) {
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
  let opsi8_2 = document.getElementById('opsi8_2');

  if (opsi8_2.checked == true) {
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
  let isian9 = document.getElementById('isian9');

  if (isian9.value == 7) {
    if (j9 == true) {
      hasilJawaban9.innerHTML = 'Beutôi';
      tombolJawaban9.innerHTML = 'Tôp Jawaban';
      j9 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
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
  let input10_1 = document.getElementById('input10_1');

  if (input10_1.value == 89) {
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


