var valorVisor = 0;
var numeroA;
var numeroB;
var operacao;
var historicoDigitado;
var troca;


function botao(dado) {
    var auxiliar = document.getElementById("visor").value; // auxiliar recebe o valor pressionado no visor
    document.getElementById("visor").value = auxiliar + dado; // visor recebe o valor de auxiliar e concatena com dado


    valorVisor = document.getElementById("visor").value = auxiliar + dado;
    
    // para mostrar histórico de digitação
    var temp = document.getElementById("historico").innerHTML.value;
    
    document.getElementById("historico").innerHTML = temp + dado;
    historicoDigitado = valorVisor + dado;
    //troca = document.getElementById("historico").innerHTML.value;
    //historicoDigitado.innerHTML = temp + dado;
    
    
}

function btn_soma(caracter){
    numeroA = valorVisor;
    operacao = "+";
    
    limpar();
    document.getElementById("historico").innerHTML += operacao;
}

function reset() {
    // limpar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacao = "";
}
function limpar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    // pegar o valor do visor em ValorVisor, faz o calculo, pega o resultado e colocar no visor
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);

    var total = 0;
    var ultimoTotal = 0;
      switch(operacao){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}



