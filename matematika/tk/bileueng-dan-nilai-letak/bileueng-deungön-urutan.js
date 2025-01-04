var tombolJawaban1_1 = document.getElementById('cekjawaban1_1');
var tombolJawaban1_2 = document.getElementById('cekjawaban1_2');
var tombolJawaban2_1 = document.getElementById('cekjawaban2_1');
var tombolJawaban2_2 = document.getElementById('cekjawaban2_2');
var tombolJawaban3 = document.getElementById('cekjawaban3');
var tombolJawaban4 = document.getElementById('cekjawaban4');

var j1_1 = true;
var j1_2 = true;
var j2_1 = true;
var j2_2 = true;
var j3 = true;
var j4 = true;

tombolJawaban1_1.addEventListener('click', function() {
  if (j1_1 == true) {
    document.getElementById("jawaban1_1").innerHTML = 'Salah';
    tombolJawaban1_1.innerHTML = 'Tôp Jawaban';
    j1_1 = false;
  } else {
    document.getElementById("jawaban1_1").innerHTML = '';
    tombolJawaban1_1.innerHTML = 'Peuréksa Jawaban';
    j1_1 = true;
  }
});

tombolJawaban1_2.addEventListener('click', function() {
  if (j1_2 == true) {
    document.getElementById("jawaban1_2").innerHTML = 'Beutôi';
    tombolJawaban1_2.innerHTML = 'Tôp Jawaban';
    j1_2 = false;
  } else {
    document.getElementById("jawaban1_2").innerHTML = '';
    tombolJawaban1_2.innerHTML = 'Peuréksa Jawaban';
    j1_2 = true;
  }
});


tombolJawaban2_1.addEventListener('click', function() {
  if (j2_1 == true) {
    document.getElementById("jawaban2_1").innerHTML = 'Beutôi';
    tombolJawaban2_1.innerHTML = 'Tôp Jawaban';
    j2_1 = false;
  } else {
    document.getElementById("jawaban2_1").innerHTML = '';
    tombolJawaban2_1.innerHTML = 'Peuréksa Jawaban';
    j2_1 = true;
  }
});

tombolJawaban2_2.addEventListener('click', function() {
  if (j2_2 == true) {
    document.getElementById("jawaban2_2").innerHTML = 'Salah';
    tombolJawaban2_2.innerHTML = 'Tôp Jawaban';
    j2_2 = false;
  } else {
    document.getElementById("jawaban2_2").innerHTML = '';
    tombolJawaban2_2.innerHTML = 'Peuréksa Jawaban';
    j2_2 = true;
  }
});


let kolomJawaban3 = document.getElementById("kolomjawaban3");
let kolomJawaban4 = document.getElementById("kolomjawaban4");

kolomJawaban3.addEventListener('submit', function(event) {
  event.preventDefault();
  let input3_1 = document.getElementById('input3_1');
  let input3_2 = document.getElementById('input3_2');

  if (input3_1.value == 3 && input3_2.value == 4) {
    if (j3 == true) {
      document.getElementById("jawaban3").innerHTML = 'Beutôi';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
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
  
});

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let input4 = document.getElementById('input4');

  if (input4.value == 2) {
    if (j4 == true) {
      document.getElementById("jawaban4").innerHTML = 'Beutôi';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
    } else {
      document.getElementById("jawaban4").innerHTML = '';
      tombolJawaban4.innerHTML = 'Peuréksa Jawaban';
      j4 = true;
    }
  } else {
    if (j4 == true) {
      document.getElementById("jawaban4").innerHTML = 'Salah';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
    } else {
      document.getElementById("jawaban4").innerHTML = '';
      tombolJawaban4.innerHTML = 'Peuréksa Jawaban';
      j4 = true;
    }
  }
  
});