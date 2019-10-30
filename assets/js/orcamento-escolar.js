const materialSelect = document.getElementById("materialSelect");


var listaMaterial = ["Lápis", "Caneta", "Borracha", "Cola", "Tesoura", "Caderno", "Estojo", "Lápis de cor (12 und)"];

listaMaterial.forEach((material) => {
  option = new Option(material, material.toLowerCase());
  materialSelect.options[materialSelect.options.length] = option;
});

function validarFormMat() {
  return $('#nomeAluno').valid() &&
         $("#valorGastar").valid() &&
         $("#quantidadeMaterial").valid() &&
         $("#precoMaterial").valid();         
}

const nomeAlunoMat = document.getElementById('nomeAlunoMat');
const valorGastar = document.getElementById('valorGastar');


$(function(){

  $("nomeAlunoMat" && "valorGastar").focusout(function(){
    if ($("adicionarDados"))

  });

});
  
