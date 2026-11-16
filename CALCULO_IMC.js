var pessoas = [];
function adicionarPessoa() {
    var nome = document.getElementById("nome").value;
    var altura = Number(document.getElementById("altura").value);
    var peso = Number(document.getElementById("peso").value);

    if (nome != "" && altura > 0 && peso > 0) {
        var imc = peso / (altura * altura);

        pessoas.push(nome);

        var tabela = document.getElementById("tabela");

        var linha = document.createElement("tr");

        linha.innerHTML = "<td>" + nome + "</td>" +
                          "<td>" + altura.toFixed(2) + "</td>" +
                          "<td>" + peso.toFixed(1) + "</td>" +
                          "<td>" + imc.toFixed(2) + "</td>";

        tabela.appendChild(linha);

        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
 } else {
        alert("Preencha todos os campos corretamente.");
    }
}
