//DI BAWAH INI UNTUK SOAL NO. 1

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
    if (counter1 == 10) {
    
        tandaSudahPenuh1.setAttribute("id", "kotak-soal-1-penuh");
        tandaSudahPenuh1.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal1.replaceWith(tandaSudahPenuh1);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter1 < 10) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter1++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru1 = document.createElement('div');
        divBaru1.style.width = '75px';
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

    if (counter1 < 10) {
        tandaSudahPenuh1.replaceWith(spaceSoal1);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban1.addEventListener('click', function() {

    if (counter1 == 0) {
        hasilJawaban1.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter1 == 7) {
        hasilJawaban1.innerHTML = '<b>Beutôi</b>';
        hasilJawaban1.style.fontSize = '20px'; 
        hasilJawaban1.style.color = 'green'; 
    } else {
        hasilJawaban1.innerHTML = '<b>Salah</b>';
        hasilJawaban1.style.fontSize = '20px'; 
        hasilJawaban1.style.color = 'red';
    }
    
})


//DI BAWAH INI UNTUK SOAL NO. 2 -- ALGORIMTA DARI SINTAKSNYA SAMA PERSIS SEPERTI SEBELUMNYA

//Saat gambar di-drag & di-drop pada kotak jawaban

let counter2 = 0;
let kotakGambarDrag2 = document.querySelector('.kotak-gambar-drag2');
let gambarDrag2 = document.querySelector('.kotak-gambar-drag2 img');
let dropZone2 = document.getElementById('drop-zone2');
let selected2;
let gambarDrop2 = [];
let hapusDrop2 = document.getElementById('hapusDrop2');
let spaceSoal2 = document.getElementById('space-soal-2');
let cekJawaban2 = document.getElementById('cekJawaban2')
let tandaSudahPenuh2 = document.createElement("div");
let hasilJawaban2 = document.getElementById('hasilJawaban2');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag2.addEventListener('dragstart', function(e) {
    selected2 = e.target;
    e.dataTransfer.setData('soal', '2'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone2.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone2.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '2') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter2 == 10) {
    
        tandaSudahPenuh2.setAttribute("id", "kotak-soal-2-penuh");
        tandaSudahPenuh2.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal2.replaceWith(tandaSudahPenuh3);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter2 < 10) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter2++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru2 = document.createElement('div');
        divBaru2.style.width = '100px';
        divBaru2.style.display = 'inline-block';
        divBaru2.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected2 = selected2.cloneNode(true);
        divBaru2.appendChild(clonedSelected2);
        clonedSelected2.draggable = false;

        gambarDrop2[counter2-1] = clonedSelected2;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone2
        dropZone2.appendChild(divBaru2);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop2.addEventListener('click', function() {

    let gambarTerakhirDivBaru2 = dropZone2.lastElementChild;

    if (gambarDrop2.length > 0) {
    
        dropZone2.removeChild(gambarTerakhirDivBaru2);
        gambarDrop2.pop();
        counter2--;

    }

    gambarTerakhirDivBaru2 = dropZone2.lastElementChild;

    if (counter2 < 10) {
        tandaSudahPenuh2.replaceWith(spaceSoal2);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban2.addEventListener('click', function() {

    if (counter2 == 0) {
        hasilJawaban2.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter2 == 4) {
        hasilJawaban2.innerHTML = '<b>Beutôi</b>';
        hasilJawaban2.style.fontSize = '20px'; 
        hasilJawaban2.style.color = 'green';
    } else {
        hasilJawaban2.innerHTML = '<b>Salah</b>';
        hasilJawaban2.style.fontSize = '20px'; 
        hasilJawaban2.style.color = 'red';
    }
    
})


//DI BAWAH INI UNTUK SOAL NO. 3 -- ALGORIMTA DARI SINTAKSNYA SAMA PERSIS SEPERTI SEBELUMNYA

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
    if (counter3 == 10) {
    
        tandaSudahPenuh3.setAttribute("id", "kotak-soal-3-penuh");
        tandaSudahPenuh3.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal3.replaceWith(tandaSudahPenuh3);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter3 < 10) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter3++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru3 = document.createElement('div');
        divBaru3.style.width = '75px';
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

    if (counter3 < 10) {
        tandaSudahPenuh3.replaceWith(spaceSoal3);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban3.addEventListener('click', function() {

    if (counter3 == 0) {
        hasilJawaban3.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter3 == 9) {
        hasilJawaban3.innerHTML = '<b>Beutôi</b>';
        hasilJawaban3.style.fontSize = '20px'; 
        hasilJawaban3.style.color = 'green';
    } else {
        hasilJawaban3.innerHTML = '<b>Salah</b>';
        hasilJawaban3.style.fontSize = '20px'; 
        hasilJawaban3.style.color = 'red';
    }
    
})