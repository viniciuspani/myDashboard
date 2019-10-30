const materialSelect = document.getElementById("materialSelect");


var listaMaterial = ["Lápis", "Caneta", "Borracha", "Cola", "Tesoura", "Caderno", "Estojo", "Lápis de cor (12 und)"];

listaMaterial.forEach((material) => {
  option = new Option(material, material.toLowerCase());
  materialSelect.options[materialSelect.options.length] = option;
});


var nomeAlunoMat = document.getElementById('nomeAlunoMat');
var valorGastar = document.getElementById('valorGastar');


$(function(){

  $("nomeAlunoMat").focusin(function(){
    

  });

});
  
