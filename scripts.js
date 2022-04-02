function calcular() {
    var consumo = parseFloat(document.getElementById("consumo").value);
    var factor = parseFloat(document.getElementById("factor").value);
    var res = consumo * factor;
    document.getElementById("resultado").value = res + " kg CO2e";
  }