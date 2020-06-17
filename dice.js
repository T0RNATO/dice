var a = 0;
var b;
function rand() {
  b = document.getElementById("num2").value;
  document.getElementById("out").innerText = "Randomly Generated Number: " + Math.ceil(Math.random() * b);
  ++a
  document.getElementById("num").innerText = "Number of rolls: " + a;
}
function reset() {
  a = 0;
  document.getElementById("num").innerText = "Number of rolls: " + a;
}
