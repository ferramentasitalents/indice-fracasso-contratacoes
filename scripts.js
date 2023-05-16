function calculateIndex() {
  const fracassadas = parseFloat(document.getElementById("fracassadas").value);
  const total = parseFloat(document.getElementById("total").value);
  const index = (fracassadas / total) * 100;
  document.getElementById("result").innerHTML = `Índice de Fracasso de Novas Contratações: ${index.toFixed(2)}%`;
}

