var tombolJawaban1 = document.getElementById('cekjawaban1');
var tombolJawaban2 = document.getElementById('cekjawaban2');
var tombolJawaban3 = document.getElementById('cekjawaban3');
var tombolJawaban4 = document.getElementById('cekjawaban4');

tombolJawaban1.addEventListener('click', function() {
  alert('SALAH NYAN!!!');
});

tombolJawaban2.addEventListener('click', function() {
  alert('BEUTÔI THAT THAT!!!');
});

tombolJawaban3.addEventListener('click', function() {
  alert('BEUTÔI THAT THAT!!!');
});

tombolJawaban4.addEventListener('click', function() {
  alert('SALAH NYAN!!!');
});

let kolomJawaban1 = document.getElementById("kolomjawaban1");
let kolomJawaban2 = document.getElementById("kolomjawaban2");

kolomJawaban1.addEventListener('submit', function(event) {
  event.preventDefault();
  let input1 = document.getElementById('input1');
  let input2 = document.getElementById('input2');

  if (input1.value == 3 && input2.value == 4) {
    alert('BEUTÔI THAT THAT!!!');
  } else {
    alert('SALAH NYAN!!!')
  }
  
});

kolomJawaban2.addEventListener('submit', function(event) {
  event.preventDefault();
  let input3 = document.getElementById('input3');

  if (input3.value == 2) {
    alert('BEUTÔI THAT THAT!!!');
  } else {
    alert('SALAH NYAN!!!')
  }
  
});