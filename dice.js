var a = 0;
var b, rando;
var r = 0;
var bulknum = 0;
var arr = [];
function rand() {
  b = document.getElementById("num2").value;
  document.getElementById("out").innerText = "Randomly Generated Number: " + Math.ceil(Math.random() * b);
  ++a
  document.getElementById("num").innerText = "Number of rolls: " + a;
}
function reset() {
  a = 0;
  bulknum = 0;
  document.getElementById("num").innerText = "Number of rolls: " + a;
  document.getElementById("out2").innerText = ""
}
var input = document.getElementById("num2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    rand()
  }
});
function rand2() {
  document.getElementById("out2").innerText = "";
  arr = [];
  r = 0;
  while(r < document.getElementById("numdice").value){
    b = document.getElementById("numsides").value;
    rando = Math.ceil(Math.random() * b);
    arr.push(" " + rando);
    r++
  }
  document.getElementById("out2").innerHTML = "Randomly Generated Numbers:<br>" + arr;
  bulknum = bulknum + Number(document.getElementById("numdice").value);
  document.getElementById("bulknum").innerText = "Number of rolls: " + bulknum;
}
