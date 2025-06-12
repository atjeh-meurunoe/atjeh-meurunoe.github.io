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
    if (counter2 == 8) {
    
        tandaSudahPenuh2.setAttribute("id", "kotak-soal-2-penuh");
        tandaSudahPenuh2.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal2.replaceWith(tandaSudahPenuh2);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter2 < 8) {
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

    if (counter2 < 8) {
        tandaSudahPenuh2.replaceWith(spaceSoal2);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban2.addEventListener('click', function() {

    if (counter2 == 0) {
        hasilJawaban2.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter2 == 4) {
        hasilJawaban2.innerHTML = '<b>Beutôi</b>';
    } else {
        hasilJawaban2.innerHTML = '<b>Salah</b>';
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
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone3
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
    } else {
        hasilJawaban3.innerHTML = '<b>Salah</b>';
    }
    
})



//DI BAWAH INI UNTUK SOAL NO. 4 -- ALGORIMTA DARI SINTAKSNYA SAMA PERSIS SEPERTI SEBELUMNYA

//Saat gambar di-drag & di-drop pada kotak jawaban

let counter4 = 0;
let kotakGambarDrag4 = document.querySelector('.kotak-gambar-drag4');
let gambarDrag4 = document.querySelector('.kotak-gambar-drag4 img');
let dropZone4 = document.getElementById('drop-zone4');
let selected4;
let gambarDrop4 = [];
let hapusDrop4 = document.getElementById('hapusDrop4');
let spaceSoal4 = document.getElementById('space-soal-4');
let cekJawaban4 = document.getElementById('cekJawaban4')
let tandaSudahPenuh4 = document.createElement("div");
let hasilJawaban4 = document.getElementById('hasilJawaban4');

// Tambah event listener untuk "dragstart" pada gambar yang ada di dalam kotakGambarDrag
gambarDrag4.addEventListener('dragstart', function(e) {
    selected4 = e.target;
    e.dataTransfer.setData('soal', '4'); // Set data sembarang untuk mengecek apakah sumber gambar dari soal terkait
})

// Tambah event listener untuk "dragover" dan "drop" hanya sekali (maksud?)
dropZone4.addEventListener('dragover', function(e) {
    e.preventDefault();
})
    
dropZone4.addEventListener('drop', function(e) {

    // Pastikan gambarnya merupakan gambar pada pertanyaan terkait sebelum 'drop' diizinkan
    if (e.dataTransfer.getData('soal') !== '4') return;
    
    //Jika counter sudah mencapai 10, maka tampilkan tulisan "ka peunoh" atau "sudah penuh"
    if (counter4 == 8) {
    
        tandaSudahPenuh4.setAttribute("id", "kotak-soal-4-penuh");
        tandaSudahPenuh4.innerHTML = "<b>Ka Peunoh</b>";

        spaceSoal4.replaceWith(tandaSudahPenuh4);
    }

    //Jika jumlah gambar di kotak drop < 10 maka jalankan fungsi drag and drop sebagaimana mestinya
    if (counter4 < 8) {
        //Tracking (hitung sudah berapa kali aksi drag & drop dilakukan)
        counter4++;

        // Buat <div> baru untuk menambahkan (append) gambar yang diseleksi ke dalam <div> tersebut
        let divBaru4 = document.createElement('div');
        divBaru4.style.width = '100px';
        divBaru4.style.display = 'inline-block';
        divBaru4.draggable = false;
        
        // Clone gambar yang telah diseleksi tersebut untuk kemudian hasilnya ditambahkan ke <div> yang sudah dibuat sebelumnya
        // hasil kloning dari gambar yang diseleksi tidak bisa di-drag lagi nantinya, sementara pada 'selected', draggable masih bernilai 'true')
        let clonedSelected4 = selected4.cloneNode(true);
        divBaru4.appendChild(clonedSelected4);
        clonedSelected4.draggable = false;

        gambarDrop4[counter4-1] = clonedSelected4;
    
        //tambakan (append) <div> yang sudah mengandung gambar kloningan tersebut ke dalam dropZone1
        dropZone4.appendChild(divBaru4);
    }
})

//Saat tombol remove ditekan, maka hapus 1 elemen array dari gambarDrop
hapusDrop4.addEventListener('click', function() {

    let gambarTerakhirDivBaru4 = dropZone4.lastElementChild;

    if (gambarDrop4.length > 0) {
    
        dropZone4.removeChild(gambarTerakhirDivBaru4);
        gambarDrop4.pop();
        counter4--;

    }

    gambarTerakhirDivBaru4 = dropZone4.lastElementChild;

    if (counter4 < 8) {
        tandaSudahPenuh4.replaceWith(spaceSoal4);
    }
    
})

//Saat tombol 'Cek Jawaban' di-klik
cekJawaban4.addEventListener('click', function() {

    if (counter4 == 0) {
        hasilJawaban4.innerHTML = '<b>Kotak Mantöng Soh</b>';
    } else if (counter4 == 3) {
        hasilJawaban4.innerHTML = '<b>Beutôi</b>';
    } else {
        hasilJawaban4.innerHTML = '<b>Salah</b>';
    }
    
})



//DI BAWAH INI UNTUK SOAL NO. 5 -- ALGORIMTA DARI SINTAKSNYA SAMA PERSIS SEPERTI SEBELUMNYA

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
    } else if (counter5 == 5) {
        hasilJawaban5.innerHTML = '<b>Beutôi</b>';
    } else {
        hasilJawaban5.innerHTML = '<b>Salah</b>';
    }
    
})