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
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi1_3 = document.getElementById('opsi1_3');

  if (opsi1_3.checked == true) {
    if (j1 == true) {
      suaraJawabanBenar(); 
      hasilJawaban1.innerHTML = 'Beutôi';
      hasilJawaban1.style.fontSize = '16.5px';
      hasilJawaban1.style.color = 'green';
      tombolJawaban1.innerHTML = '<b>Tôp Jawaban</b>';
      j1 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = '<b>Peuréksa Jawaban</b>';
      j1 = true;
    }
  } else {
    if (j1 == true) {
      suaraJawabanSalah();
      hasilJawaban1.innerHTML = 'Salah';
      hasilJawaban1.style.fontSize = '16.5px';
      hasilJawaban1.style.color = 'red';
      tombolJawaban1.innerHTML = '<b>Tôp Jawaban</b>';
      j1 = false;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban2.innerHTML = 'Beutôi';
      hasilJawaban2.style.fontSize = '16.5px';
      hasilJawaban2.style.color = 'green';
      tombolJawaban2.innerHTML = '<b>Tôp Jawaban</b>';
      j2 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban2.innerHTML = '';
      tombolJawaban2.innerHTML = '<b>Peuréksa Jawaban</b>';
      j2 = true;
    }
  } else {
    if (j2 == true) {
      suaraJawabanSalah();
      hasilJawaban2.innerHTML = 'Salah';
      hasilJawaban2.style.fontSize = '16.5px';
      hasilJawaban2.style.color = 'red';
      tombolJawaban2.innerHTML = '<b>Tôp Jawaban</b>';
      j2 = false;
    } else {
      hasilJawaban2.innerHTML = '';
      tombolJawaban2.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban3.innerHTML = 'Beutôi';
      hasilJawaban3.style.fontSize = '16.5px';
      hasilJawaban3.style.color = 'green';
      tombolJawaban3.innerHTML = '<b>Tôp Jawaban</b>';
      j3 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = '<b>Peuréksa Jawaban</b>';
      j3 = true;
    }
  } else {
    if (j3 == true) {
      suaraJawabanSalah();
      hasilJawaban3.innerHTML = 'Salah';
      hasilJawaban3.style.fontSize = '16.5px';
      hasilJawaban3.style.color = 'red';
      tombolJawaban3.innerHTML = '<b>Tôp Jawaban</b>';
      j3 = false;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban4.innerHTML = 'Beutôi';
      hasilJawaban4.style.fontSize = '16.5px';
      hasilJawaban4.style.color = 'green';
      tombolJawaban4.innerHTML = '<b>Tôp Jawaban</b>';
      j4 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban4.innerHTML = '';
      tombolJawaban4.innerHTML = '<b>Peuréksa Jawaban</b>';
      j4 = true;
    }
  } else {
    if (j4 == true) {
      suaraJawabanSalah();
      hasilJawaban4.innerHTML = 'Salah';
      hasilJawaban4.style.fontSize = '16.5px';
      hasilJawaban4.style.color = 'red';
      tombolJawaban4.innerHTML = '<b>Tôp Jawaban</b>';
      j4 = false;
    } else {
      hasilJawaban4.innerHTML = '';
      tombolJawaban4.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban5.innerHTML = 'Beutôi';
      hasilJawaban5.style.fontSize = '16.5px';
      hasilJawaban5.style.color = 'green';
      tombolJawaban5.innerHTML = '<b>Tôp Jawaban</b>';
      j5 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = '<b>Peuréksa Jawaban</b>';
      j5 = true;
    }
  } else {
    if (j5 == true) {
      suaraJawabanSalah();
      hasilJawaban5.innerHTML = 'Salah';
      hasilJawaban5.style.fontSize = '16.5px';
      hasilJawaban5.style.color = 'red';
      tombolJawaban5.innerHTML = '<b>Tôp Jawaban</b>';
      j5 = false;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = '<b>Peuréksa Jawaban</b>';
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
        hasilJawaban6.innerHTML = 'Kotak Mantöng Soh';
    } else if (counter6 == 6) {
        suaraJawabanBenar(); 
        hasilJawaban6.innerHTML = 'Beutôi';
        hasilJawaban6.style.fontSize = '16.5px';
        hasilJawaban6.style.color = 'green';
        skor_akhir = skor_akhir+10;
        jumlah_benar = jumlah_benar+1;
    } else {
        suaraJawabanSalah();
        hasilJawaban6.innerHTML = 'Salah';
        hasilJawaban6.style.fontSize = '16.5px';
        hasilJawaban6.style.color = 'red';
    }
    
})

//Perisksa Jawaban No. 7
let j7 = true;

kolomJawaban7.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi7_1 = document.getElementById('opsi7_1');

  if (opsi7_1.checked == true) {
    if (j7 == true) {
      suaraJawabanBenar(); 
      hasilJawaban7.innerHTML = 'Beutôi';
      hasilJawaban7.style.fontSize = '16.5px';
      hasilJawaban7.style.color = 'green';
      tombolJawaban7.innerHTML = '<b>Tôp Jawaban</b>';
      j7 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban7.innerHTML = '';
      tombolJawaban7.innerHTML = '<b>Peuréksa Jawaban</b>';
      j7 = true;
    }
  } else {
    if (j7 == true) {
      suaraJawabanSalah();
      hasilJawaban7.innerHTML = 'Salah';
      hasilJawaban7.style.fontSize = '16.5px';
      hasilJawaban7.style.color = 'red';
      tombolJawaban7.innerHTML = '<b>Tôp Jawaban</b>';
      j7 = false;
    } else {
      hasilJawaban7.innerHTML = '';
      tombolJawaban7.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban8.innerHTML = 'Beutôi';
      hasilJawaban8.style.fontSize = '16.5px';
      hasilJawaban8.style.color = 'green';
      tombolJawaban8.innerHTML = '<b>Tôp Jawaban</b>';
      j8 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban8.innerHTML = '';
      tombolJawaban8.innerHTML = '<b>Peuréksa Jawaban</b>';
      j8 = true;
    }
  } else {
    if (j8 == true) {
      suaraJawabanSalah();
      hasilJawaban8.innerHTML = 'Salah';
      hasilJawaban8.style.fontSize = '16.5px';
      hasilJawaban8.style.color = 'red';
      tombolJawaban8.innerHTML = '<b>Tôp Jawaban</b>';
      j8 = false;
    } else {
      hasilJawaban8.innerHTML = '';
      tombolJawaban8.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban9.innerHTML = 'Beutôi';
      hasilJawaban9.style.fontSize = '16.5px';
      hasilJawaban9.style.color = 'green';
      tombolJawaban9.innerHTML = '<b>Tôp Jawaban</b>';
      j9 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = '<b>Peuréksa Jawaban</b>';
      j9 = true;
    }
  } else {
    if (j9 == true) {
      suaraJawabanSalah();
      hasilJawaban9.innerHTML = 'Salah';
      hasilJawaban9.style.fontSize = '16.5px';
      hasilJawaban9.style.color = 'red';
      tombolJawaban9.innerHTML = '<b>Tôp Jawaban</b>';
      j9 = false;
    } else {
      hasilJawaban9.innerHTML = '';
      tombolJawaban9.innerHTML = '<b>Peuréksa Jawaban</b>';
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
      suaraJawabanBenar(); 
      hasilJawaban10.innerHTML = 'Beutôi';
      hasilJawaban10.style.fontSize = '16.5px';
      hasilJawaban10.style.color = 'green';
      tombolJawaban10.innerHTML = '<b>Tôp Jawaban</b>';
      j10 = false;
      skor_akhir = skor_akhir+10;
      jumlah_benar = jumlah_benar+1;
    } else {
      hasilJawaban10.innerHTML = '';
      tombolJawaban10.innerHTML = '<b>Peuréksa Jawaban</b>';
      j10 = true;
    }
  } else {
    if (j10 == true) {
      suaraJawabanSalah();
      hasilJawaban10.innerHTML = 'Salah';
      hasilJawaban10.style.fontSize = '16.5px';
      hasilJawaban10.style.color = 'red';
      tombolJawaban10.innerHTML = '<b>Tôp Jawaban</b>';
      j10 = false;
    } else {
      hasilJawaban10.innerHTML = '';
      tombolJawaban10.innerHTML = '<b>Peuréksa Jawaban</b>';
      j10 = true;
    }
  }
  
})


let kolomNilai = document.getElementById("kolomnilai");
let tombolNilai = document.getElementById('ceknilai');
let hasilNilai = document.getElementById('nilai');

//Periksa jumlah benar dan nilai (skor) akhir

//ADA KELEMAHAN DARI SISTEM CEK NILAI YANG BISA MENAMBAH NILAI JIKA TOMBOL BENAR DI-KLIK LEBIH DARI 1x
let j_nilai = true;

kolomNilai.addEventListener('submit', function(event) {
  event.preventDefault();

  if (j_nilai == true) {
    hasilNilai.innerHTML = skor_akhir;
    tombolNilai.innerHTML = '<b>Tôp Hasil</b>';
    j_nilai = false;
  } else {
    hasilNilai.innerHTML = '';
    tombolNilai.innerHTML = '<b>Cek Nilai</b>';
    j_nilai = true;
  }
  
})


