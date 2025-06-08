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

//Periksa jawaban no. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi1_2 = document.getElementById('opsi1_2');

  if (opsi1_2.checked == true) {
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
})

//Perisksa Jawaban No. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian2 = document.getElementById('isian2');

  if (isian2.value == 18) {
    if (j2 == true) {
      hasilJawaban2.innerHTML = 'Beutôi';
      tombolJawaban2.innerHTML = 'Tôp Jawaban';
      j2 = false;
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

//Periksa jawaban no. 3
let j3 = true;

kolomJawaban3.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian3 = document.getElementById('isian3');

  if (isian3.value == 9) {
    if (j3 == true) {
      hasilJawaban3.innerHTML = 'Beutôi';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  } else {
    if (j3 == true) {
      hasilJawaban3.innerHTML = 'Salah';
      tombolJawaban3.innerHTML = 'Tôp Jawaban';
      j3 = false;
    } else {
      hasilJawaban3.innerHTML = '';
      tombolJawaban3.innerHTML = 'Peuréksa Jawaban';
      j3 = true;
    }
  }
})

//Periksa jawaban no. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let isian4 = document.getElementById('isian4');

  if (isian4.value == 4) {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Beutôi';
      tombolJawaban4.innerHTML = 'Tôp Jawaban';
      j4 = false;
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


//Periksa jawaban no. 5
let j5 = true;

kolomJawaban5.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi5_1 = document.getElementById('opsi5_1');

  if (opsi5_1.checked == true) {
    if (j5 == true) {
      hasilJawaban5.innerHTML = 'Beutôi';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  } else {
    if (j5 == true) {
      hasilJawaban5.innerHTML = 'Salah';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      hasilJawaban5.innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  }
})

