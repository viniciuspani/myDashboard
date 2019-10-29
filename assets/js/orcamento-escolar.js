const materialSelect = document.getElementById("materialSelect");


var listaMaterial = ["Lápis", "Caneta", "Borracha", "Cola", "Tesoura", "Caderno", "Estojo", "Lápis de cor (12 und)"];

listaMaterial.forEach((material) => {
  option = new Option(material, material.toLowerCase());
  materialSelect.options[materialSelect.options.length] = option;
});


var nomeAlunoMat = document.getElementById('nomeAlunoMat');
var valorGastar = document.getElementById('valorGastar');


function adicionarMaterial() {
  $("nomeAlunoMat").on("focus", function () {
    $("#adicionarDados").attr("disabled", true);
  }
  $("valorGastar").on("focus", function () {
    $("adicionarDados").attr("disabled", true);
  }
  )}
