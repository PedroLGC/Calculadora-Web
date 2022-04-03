function calcular() {
    var mediaNacional = 584.65;
    var consumo = parseFloat(document.getElementById("consumo").value);
    var factor = parseFloat(document.getElementById("factor").value);
    var res = consumo * factor;
    document.getElementById("resultado").value = res + " kg CO2e";

    if(consumo<=mediaNacional){
      if(consumo<=mediaNacional-mediaNacional*0.20){
        document.getElementById("frase").removeAttribute("hidden");
        document.getElementById("frase").innerHTML = "<p>Tu consumo es menor al de la media nacional. <br> !!!Felicidades por ser un ciudadano ejemplar 👍👍👍!!!!</p>";
      } else {
        document.getElementById("frase").removeAttribute("hidden");
        document.getElementById("frase").innerHTML = "<p>Tu consumo es similar a la media nacional, te invitamos a seguir reduciendo tu huella de carbono siguiendo nuestras recomendaciones</p>";
      }
    }else{
      document.getElementById("frase").removeAttribute("hidden");
      document.getElementById("frase").innerHTML = "Tu consumo es mayor al de la media nacional, te invitamos a que revises la sección de recomendaciones para reducir tu consumo";
    }
  }