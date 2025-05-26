let kotakDrop1_1 = document.getElementById('kotakdrop1-1');
let kotakDrop1_2 = document.getElementById('kotakdrop1-2');
let kotakDrop1_3 = document.getElementById('kotakdrop1-3');

//untuk fungsi drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}
 
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}
 
function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  let kotakDroppable = ev.target.closest('.elemen-droppable');
  if (kotakDroppable) {
    kotakDroppable.appendChild(document.getElementById(data));
  }

}
//akhir dari (fungsi drag and drop)



// DI BAWAH INI UNTUK CEK JAWABAN BENAR ATAU SALAH

// Simpan id img awal (bisa saat inisialisasi atau sebelum drag & drop)
let expectedImgId_KotakDrop1_1 = ['gambar1-3', 'gambar1-4'];
let expectedImgId_KotakDrop1_2 = ['gambar1-2', 'gambar1-5'];
let expectedImgId_KotakDrop1_3 = ['gambar1-1'];

// Fungsi untuk mengecek isi parent div
function cekImgPadaDiv() {

  // <img> isi dari masing-masing kotakdrop saat ini
  let isiKotakDrop1_1 = kotakDrop1_1.querySelectorAll('img');
  let isiKotakDrop1_2 = kotakDrop1_2.querySelectorAll('img');
  let isiKotakDrop1_3 = kotakDrop1_3.querySelectorAll('img');

  let idImgSekarang1_1 = Array.from(isiKotakDrop1_1).map(elemengambar => elemengambar.id);
  let idImgSekarang1_2 = Array.from(isiKotakDrop1_2).map(elemengambar => elemengambar.id);
  let idImgSekarang1_3 = Array.from(isiKotakDrop1_3).map(elemengambar => elemengambar.id);

  // Cek apakah semua id yang diharapkan ada di dalam parent
  let kecocokan1_1 = expectedImgId_KotakDrop1_1.every(id => idImgSekarang1_1.includes(id));
  let kecocokan1_2 = expectedImgId_KotakDrop1_2.every(id => idImgSekarang1_2.includes(id));
  let kecocokan1_3 = expectedImgId_KotakDrop1_3.every(id => idImgSekarang1_3.includes(id));

  if (kecocokan1_1 == true && kecocokan1_2 == true && kecocokan1_3 == true) {
    return true;
  } else {
    return false;
  }

}

//Munculnya tampilan HTML Benar atau Salah dalam B. Aceh 
let kolomJawaban1 = document.getElementById("kolomjawaban1");
let tombolJawaban1 = document.getElementById('cekjawaban1');
let hasilJawaban1 = document.getElementById('jawaban1');

let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();

  let jumlahChildDiDivDrag = document.getElementById("kotak-untuk-elemen-img-awal").childElementCount;

  if (jumlahChildDiDivDrag > 0) {
    console.log(jumlahChildDiDivDrag);
    hasilJawaban1.innerHTML = 'Pinah mandum gamba u dalam kotak jawaban';
  } else {
    if (cekImgPadaDiv() == true) {
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
  }

})
// AKHIR DARI SINTAKS UNTUK CEK JAWABAN BENAR ATAU SALAH


