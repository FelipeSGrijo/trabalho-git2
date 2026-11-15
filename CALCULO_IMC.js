var pessoas = [];
function adicionarPessoa() {
    var nome = document.getElementById("nome").value;
    var altura = Number(document.getElementById("altura").value);
    var peso = Number(document.getElementById("peso").value);

    if (nome != "" && altura > 0 && peso > 0) {
        var imc = peso / (altura * altura);
 } else {
        alert("Preencha todos os campos corretamente.");
    }
}
