const sisiInput = document.getElementById("sisi");
const sisiI = document.getElementById("sisik");
const hitungButton = document.getElementById("hitungButton");
const hitungButtonkll = document.getElementById("hitungButtonkll");
const jawabanluas = document.getElementById("jawabanluas");
const jawabankeliling = document.getElementById("jkeliling");

hitungButton.addEventListener("click", function () {
  const sisi = parseFloat(sisiInput.value);
  const luas = sisi * sisi;
  jawabanluas.textContent = `Luas Persegi  : ${luas}`;
});

hitungButtonkll.addEventListener("click", function () {
  const sisi = parseFloat(sisiI.value);
  const kll = 4 * sisi;
  jawabankeliling.textContent = `Keliling Persegi  : ${kll}`;
});
