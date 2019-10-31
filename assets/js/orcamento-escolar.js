const materialSelect = document.getElementById("materialSelect");


var listaMaterial = ["Lápis", "Caneta", "Borracha", "Cola", "Tesoura", "Caderno", "Estojo", "Lápis de cor (12 und)"];

listaMaterial.forEach((material) => {
  option = new Option(material, material.toLowerCase());
  materialSelect.options[materialSelect.options.length] = option;
});

const nomeAlunoMat = document.getElementById('#nomeAlunoMat');
const valorGastar = document.getElementById('#valorGastar');

function validarFormMat() {
  if( $('#nomeAlunoMat').valid() &&
         $("#valorGastar").valid()){
          $('#adicionarDados').attr('disabled', false);
         }else
         {
          $('#adicionarDados').attr('disabled', true);
         }
                 
}

/*
function feedbackFormValidacaoMat() {

  if ($('nomeAluno' && 'valorGastar').valid()) {
      $('#adicionarDados').removeAttr('disabled');
  } else {
      $('#adicionarDados').atrr('disabled');
  }









$(function(){

  $("nomeAlunoMat" && "valorGastar").focusout(function(){
    if ($("adicionarDados"))

  });

});
  
*/