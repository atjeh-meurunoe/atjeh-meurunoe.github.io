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

let kolomJawaban1 = document.getElementById("kolomjawaban1");
let tombolJawaban1 = document.getElementById('cekjawaban1');
let hasilJawaban1 = document.getElementById('jawaban1');

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

let tombolJawaban3 = document.getElementById('cekjawaban3');
let kolomJawaban3 = document.getElementById("kolomjawaban3");
let hasilJawaban3 = document.getElementById('jawaban3');

let kolomJawaban4 = document.getElementById("kolomjawaban4");
let tombolJawaban4 = document.getElementById('cekjawaban4');
let hasilJawaban4 = document.getElementById('jawaban4');

let tombolJawaban5 = document.getElementById('cekjawaban5');
let kolomJawaban5 = document.getElementById("kolomjawaban5");
let hasilJawaban5 = document.getElementById('jawaban5');

//Periksa jawaban no. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian1 = document.getElementById('isian1');

  if (isian1.value == 6) {
    if (j1 == true) {
      suaraJawabanBenar();
      hasilJawaban1.innerHTML = 'Beutôi';
      hasilJawaban1.style.fontSize = '16.5px';
      hasilJawaban1.style.color = 'green';
      tombolJawaban1.innerHTML = '<b>Tôp Jawaban</b>';
      j1 = false;
    } else {
      document.getElementById("jawaban1").innerHTML = '';
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
      document.getElementById("jawaban1").innerHTML = '';
      tombolJawaban1.innerHTML = '<b>Peuréksa Jawaban</b>';
      j1 = true;
    }
  }
  
})


//Periksa jawaban no. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian2 = document.getElementById('isian2');

  if (isian2.value == 5) {
    if (j2 == true) {
      suaraJawabanBenar();
      hasilJawaban2.innerHTML = 'Beutôi';
      hasilJawaban2.style.fontSize = '16.5px';
      hasilJawaban2.style.color = 'green';
      tombolJawaban2.innerHTML = '<b>Tôp Jawaban</b>';
      j2 = false;
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
  let isian3 = document.getElementById('isian3');

  if (isian3.value == 9) {
    if (j3 == true) {
      suaraJawabanBenar();
      hasilJawaban3.innerHTML = 'Beutôi';
      hasilJawaban3.style.fontSize = '16.5px';
      hasilJawaban3.style.color = 'green';
      tombolJawaban3.innerHTML = '<b>Tôp Jawaban</b>';
      j3 = false;
    } else {
      document.getElementById("jawaban3").innerHTML = '';
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
      document.getElementById("jawaban3").innerHTML = '';
      tombolJawaban3.innerHTML = '<b>Peuréksa Jawaban</b>';
      j3 = true;
    }
  }
  
})


//Periksa jawaban no. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian4 = document.getElementById('isian4');

  if (isian4.value == 8) {
    if (j4 == true) {
      suaraJawabanBenar();
      hasilJawaban4.innerHTML = 'Beutôi';
      hasilJawaban4.style.fontSize = '16.5px';
      hasilJawaban4.style.color = 'green';
      tombolJawaban4.innerHTML = '<b>Tôp Jawaban</b>';
      j4 = false;
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
  let isian5 = document.getElementById('isian5');

  if (isian5.value == 7) {
    if (j5 == true) {
      suaraJawabanBenar();
      hasilJawaban5.innerHTML = 'Beutôi';
      hasilJawaban5.style.fontSize = '16.5px';
      hasilJawaban5.style.color = 'green';
      tombolJawaban5.innerHTML = '<b>Tôp Jawaban</b>';
      j5 = false;
    } else {
      document.getElementById("jawaban5").innerHTML = '';
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
      document.getElementById("jawaban5").innerHTML = '';
      tombolJawaban5.innerHTML = '<b>Peuréksa Jawaban</b>';
      j5 = true;
    }
  }
  
})