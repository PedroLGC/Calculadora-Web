function calcular(){     
    var consumo = parseFloat(document.getElementById("consumo").value);
    var factor = parseFloat(document.getElementById("factor").value);   
    var res= consumo*factor; 
    console.log(res);
    document.getElementById("resultado").value = res;
};
