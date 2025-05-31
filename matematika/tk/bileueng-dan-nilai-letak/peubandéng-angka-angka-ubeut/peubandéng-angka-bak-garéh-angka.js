let kolomJawaban1 = document.getElementById("kolomjawaban1");
let tombolJawaban1 = document.getElementById('cekjawaban1');
let hasilJawaban1 = document.getElementById('jawaban1');

let opsi1_1_1 = document.getElementById('opsi1_1_1');
let opsi1_1_2 = document.getElementById('opsi1_1_2');
let opsi1_1_3 = document.getElementById('opsi1_1_3');
let opsi1_2_1 = document.getElementById('opsi1_2_1');
let opsi1_2_2 = document.getElementById('opsi1_2_2');
let opsi1_2_3 = document.getElementById('opsi1_2_3');

//Periksa jawaban no. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {

  //Periksa apakah user sudah memilih minimal 1 opsi atau belum
  let valid = true;

  let soal1_1 = document.querySelectorAll('input[name="soal1_1"]');
  let soal1_2 = document.querySelectorAll('input[name="soal1_2"]');

  let soal1_1_cek = Array.from(soal1_1).some(cb => cb.checked);
  let soal1_2_cek = Array.from(soal1_2).some(cb => cb.checked);

  // Reset pesan error
  document.getElementById("error-soal1_1").style.display = "none";
  document.getElementById("error-soal1_2").style.display = "none";

  if (!soal1_1_cek) {
    document.getElementById("error-soal1_1").textContent = "Piléh paléng kureueng 1 jawaban di ateuh nyoe.";
    document.getElementById("error-soal1_1").style.display = "inline";
    valid = false;
  }

  if (!soal1_2_cek) {
    document.getElementById("error-soal1_2").textContent = "Piléh paléng kureueng 1 jawaban di ateuh nyoe.";
    document.getElementById("error-soal1_2").style.display = "inline";
    valid = false;
  }

  if (valid == false) {
    event.preventDefault(); // Mencegah form dikirim
  } else {
    event.preventDefault();
    if (opsi1_1_1.checked && opsi1_1_2.checked && opsi1_2_2.checked && opsi1_2_3.checked && !opsi1_1_3.checked && !opsi1_2_1.checked) {
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