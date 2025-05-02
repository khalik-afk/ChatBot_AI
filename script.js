function getResponse() {
  var inputField = document.getElementById("input");
  var input = inputField.value;
  var output = document.getElementById("output");

  if (input.toLowerCase().indexOf("hai") !== -1) {
    output.innerHTML = "iya ada apa nih?";
  } else if (input.toLowerCase().indexOf("mau nanya") !== -1) {
    output.innerHTML = "nanya aja, gua jawab kok";
  } else if (input.toLowerCase().indexOf("jadi gini") !== -1) {
    output.innerHTML = "ya udah, gua dengerin";
  } else if (input.toLowerCase().indexOf("bantu gua dong") !== -1) {
    output.innerHTML = "bantu apa nih?";
  } else if (input.toLowerCase().indexOf("gajadi dah") !== -1) {
    output.innerHTML = "Yuu gajadi? ya udah gua tutup ajah";
  } else if (input.toLowerCase().indexOf("ydh lah, dah") !== -1) {
    output.innerHTML = "daaah...kalo ada masalah dateng ke sini ajah bro";
  } else if (input.toLowerCase().indexOf("oke makasih") !== -1) {
    output.innerHTML = "yak sama-sama";
  } else {
    output.innerHTML = "hmm... belum ngerti maksudnya, coba ketik lagi";
  }

  // Biar input-nya kosong lagi setelah kirim
  inputField.value = "";
}
