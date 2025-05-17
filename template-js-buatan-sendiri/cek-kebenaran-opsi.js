//Pikirkan gimana ni cara nya wkwkwkwkwk belum selesai

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

//Perisksa Jawaban No. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let input2_1 = document.getElementById('input2_1');

  if (input2_1.value == 83) {
    if (j2 == true) {
      document.getElementById("jawaban2").innerHTML = 'Beutôi';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
    } else {
      document.getElementById("jawaban2").innerHTML = '';
      tombolJawaban2.innerHTML = 'Peuréksa Jawaban';
      j2 = true;
    }
  } else {
    if (j2 == true) {
      document.getElementById("jawaban2").innerHTML = 'Salah';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
    } else {
      document.getElementById("jawaban2").innerHTML = '';
      tombolJawaban2.innerHTML = 'Peuréksa Jawaban';
      j2 = true;
    }
  }
  
})