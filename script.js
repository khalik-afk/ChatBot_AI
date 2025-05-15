function getResponse() {
  var inputField = document.getElementById("input");
  var input = inputField.value;
  var output = document.getElementById("output");

  if (input.toLowerCase().indexOf("hai") !== -1) {
    output.innerHTML = "iya ada apa nih?";
  }else if (input.toLowerCase().indexOf("apa kabar") !== -1) {
    output.innerHTML = "kabar baik, kamu?";
  } else if (input.toLowerCase().indexOf("alhamdulillah baik") !== -1) {
    output.innerHTML = "alhamdulillah, seneng denger kabar baik dari kamu";
  } else if (input.tolowerCare().indexOf("kamu siapa") !== -1) {
    output.innerHTML = "aku adalah chatbot yang siap membantu kamu";
  } else if (inputHTML.tolowerCare().indexOf("oh, gitu") !== -1) {
    output.innerHTML = "iya, gitu deh";
  } else if (inputHTML.tolowerCare().indexOf("kamu dah makan belum?") !== -1) {
    output.innerHTML = "aku adalah ai, aku tidak makan dan minum ataupun tidur";
  } else if (inputHTML.tolowerCare().indexOf("kamu suka aku nggk?") !== -1) {
    output.innerHTML = "iyaaa gitu deh";
  } else if (inputHTML.tolowerCare().indexOf("ciaaah") !== -1) {
    output.innerHTML = "hhhh";
  } else if (input.toLowerCase().indexOf("mau tanya") !== -1) {
    output.innerHTML = "tanya ajah, aku jawab kok";
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

