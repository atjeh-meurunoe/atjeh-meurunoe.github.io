var tombolJawaban1 = document.getElementById('cekjawaban1');
var tombolJawaban2 = document.getElementById('cekjawaban2');
var tombolJawaban3 = document.getElementById('cekjawaban3');

var j1 = true;
var j2 = true;
var j3 = true;

tombolJawaban1.addEventListener('click', function() {
  if (j1 == true) {
    document.getElementById("jawaban1").innerHTML = 'Na 7 (tujôh) boh jagông';
    tombolJawaban1.innerHTML = 'Tôp Jawaban';
    j1 = false;
  } else {
    document.getElementById("jawaban1").innerHTML = '';
    tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
    j1 = true;
  }
});

tombolJawaban2.addEventListener('click', function() {
  if (j2 == true) {
    document.getElementById("jawaban2").innerHTML = 'Na 4 (peut) boh kacang';
    tombolJawaban2.innerHTML = 'Tôp Jawaban';
    j2 = false;
  } else {
    document.getElementById("jawaban2").innerHTML = '';
    tombolJawaban2.innerHTML = 'Peuréksa Jawaban';
    j2 = true;
  }
});

tombolJawaban3.addEventListener('click', function() {
  if (j3 == true) {
    document.getElementById("jawaban3").innerHTML = 'Na 9 (sikureueng) boh jambèe';
    tombolJawaban3.innerHTML = 'Tôp Jawaban';
    j3 = false;
  } else {
    document.getElementById("jawaban3").innerHTML = '';
    tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
    j3 = true;
  }
});