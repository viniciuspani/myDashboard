const materialSelect = document.getElementById("materialSelect");


var listaMaterial = ["Lápis", "Caneta", "Borracha"];

listaMaterial.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialSelect.options[materialSelect.options.length] = option;
  });
