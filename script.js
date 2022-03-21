var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = parseInt(1);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(numeroSecreto + " " + tentativas);
  if (tentativas <= 3) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou";
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
    } else {
      var chancesRestantes = 3 - tentativas;
      if (chancesRestantes > 0) {
        if (numeroSecreto > chute) {
          elementoResultado.innerHTML = `Você errou, o número Secreto é maior - ${chancesRestantes} tentativas restantes`;
        } else {
          elementoResultado.innerHTML = `Você errou, o número Secreto é menor - ${chancesRestantes} tentativas restantes`;
        }
      } else {
        elementoResultado.innerHTML = `Tentativas excedidas o número secreto era ${numeroSecreto}`;
      }
      tentativas += 1;
    }
  } else {
    elementoResultado.innerHTML = `Tentativas excedidas o número secreto era ${numeroSecreto}`;
  }
}
