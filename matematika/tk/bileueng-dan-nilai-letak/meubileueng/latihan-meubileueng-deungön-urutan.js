let tombolJawaban1 = document.getElementById('cekjawaban1');
let kolomJawaban1 = document.getElementById("kolomjawaban1");

let kolomJawaban2 = document.getElementById("kolomjawaban2");
let tombolJawaban2 = document.getElementById('cekjawaban2');
let hasilJawaban2 = document.getElementById('jawaban2');

let tombolJawaban3 = document.getElementById('cekjawaban3');
let kolomJawaban3 = document.getElementById("kolomjawaban3");

let kolomJawaban4 = document.getElementById("kolomjawaban4");
let tombolJawaban4 = document.getElementById('cekjawaban4');
let hasilJawaban4 = document.getElementById('jawaban4');

let tombolJawaban5 = document.getElementById('cekjawaban5');
let kolomJawaban5 = document.getElementById("kolomjawaban5");


//Perisksa Jawaban No. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let input1_1 = document.getElementById('input1_1');
  let input1_2 = document.getElementById('input1_2');

  if (input1_1.value == 2 && input1_2.value == 5) {
    if (j1 == true) {
      document.getElementById("jawaban1").innerHTML = 'Beutôi';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j1 = false;
    } else {
      document.getElementById("jawaban1").innerHTML = '';
      tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
      j1 = true;
    }
  } else {
    if (j1 == true) {
      document.getElementById("jawaban1").innerHTML = 'Salah';
      tombolJawaban1.innerHTML = 'Tôp Jawaban';
      j1 = false;
    } else {
      document.getElementById("jawaban1").innerHTML = '';
      tombolJawaban1.innerHTML = 'Peuréksa Jawaban';
      j1 = true;
    }
  }
  
})


//Periksa jawaban no. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi2_2 = document.getElementById('opsi2_2');

  if (opsi2_2.checked == true) {
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


//Perisksa Jawaban No. 3
let j3 = true;

kolomJawaban3.addEventListener('submit', function(event) {
  event.preventDefault();
  let input3_1 = document.getElementById('input3_1');
  let input3_2 = document.getElementById('input3_2');

  if (input3_1.value == 2 && input3_2.value == 4) {
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
  
})


//Periksa jawaban no. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi4_1 = document.getElementById('opsi4_1');

  if (opsi4_1.checked == true) {
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


//Perisksa Jawaban No. 5
let j5 = true;

kolomJawaban5.addEventListener('submit', function(event) {
  event.preventDefault();
  let input5_1 = document.getElementById('input5_1');
  let input5_2 = document.getElementById('input5_2');
  let input5_3 = document.getElementById('input5_3');

  if (input5_1.value == 3 && input5_2.value == 6  && input5_3.value == 7) {
    if (j5 == true) {
      document.getElementById("jawaban5").innerHTML = 'Beutôi';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      document.getElementById("jawaban5").innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  } else {
    if (j5 == true) {
      document.getElementById("jawaban5").innerHTML = 'Salah';
      tombolJawaban5.innerHTML = 'Tôp Jawaban';
      j5 = false;
    } else {
      document.getElementById("jawaban5").innerHTML = '';
      tombolJawaban5.innerHTML = 'Peuréksa Jawaban';
      j5 = true;
    }
  }
  
})