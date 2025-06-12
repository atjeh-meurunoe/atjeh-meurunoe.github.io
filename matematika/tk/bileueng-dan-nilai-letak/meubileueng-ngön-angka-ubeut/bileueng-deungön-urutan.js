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


//Periksa jawaban no. 1
let j1 = true;

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi1_2 = document.getElementById('opsi1_2');

  if (opsi1_2.checked == true) {
    if (j1 == true) {
      hasilJawaban1.innerHTML = 'Beutôi';
      hasilJawaban1.style.fontSize = '16.5px';
      hasilJawaban1.style.color = 'green';
      tombolJawaban1.innerHTML = '<b>Tôp Jawaban</b>';
      j1 = false;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = '<b>Peuréksa Jawaban</b>';
      j1 = true;
    }
  } else {
    if (j1 == true) {
      hasilJawaban1.innerHTML = 'Salah';
      hasilJawaban1.style.fontSize = '16.5px';
      hasilJawaban1.style.color = 'red';
      tombolJawaban1.innerHTML = '<b>Tôp Jawaban</b>';
      j1 = false;
    } else {
      hasilJawaban1.innerHTML = '';
      tombolJawaban1.innerHTML = '<b>Peuréksa Jawaban</b>';
      j1 = true;
    }
  }
})


//Periksa jawaban no. 2
let j2 = true;

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let opsi2_1 = document.getElementById('opsi2_1');

  if (opsi2_1.checked == true) {
    if (j2 == true) {
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

//Periksa jawaban no. 3
let j3 = true;

kolomJawaban3.addEventListener('submit', function(event) {
  event.preventDefault();
  let input3_1 = document.getElementById('input3_1');
  let input3_2 = document.getElementById('input3_2');

  if (input3_1.value == 3 && input3_2.value == 4) {
    if (j3 == true) {
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
  
});

//Periksa jawaban no. 4
let j4 = true;

kolomJawaban4.addEventListener('submit', function(event) {
  event.preventDefault();
  let input4 = document.getElementById('input4');

  if (input4.value == 2) {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Beutôi';
      hasilJawaban4.style.fontSize = '16.5px';
      hasilJawaban4.style.color = 'green';
      tombolJawaban4.innerHTML = '<b>Tôp Jawaban</b>';
      j4 = false;
    } else {
      document.getElementById("jawaban4").innerHTML = '';
      tombolJawaban4.innerHTML = '<b>Peuréksa Jawaban</b>';
      j4 = true;
    }
  } else {
    if (j4 == true) {
      hasilJawaban4.innerHTML = 'Salah';
      hasilJawaban4.style.fontSize = '16.5px';
      hasilJawaban4.style.color = 'red';
      tombolJawaban4.innerHTML = '<b>Tôp Jawaban</b>';
      j4 = false;
    } else {
      document.getElementById("jawaban4").innerHTML = '';
      tombolJawaban4.innerHTML = '<b>Peuréksa Jawaban</b>';
      j4 = true;
    }
  }
  
});