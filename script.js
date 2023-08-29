function cadastrarFornecedor(event) {
    event.preventDefault()
    var idEmpresa = document.getElementById("idEmpresa").value;
    var idContato = document.getElementById("idContato").value;
    var idPais = document.getElementById("idPais").value;

    var tabela = document.getElementById("tabelaFornecedores");
    var novaLinha = tabela.insertRow(-1);

    var colunaNome = novaLinha.insertCell(0);
    colunaNome.innerHTML = idEmpresa;

    var colunaProduto = novaLinha.insertCell(1);
    colunaProduto.innerHTML = idContato;

    var colunaProduto2 = novaLinha.insertCell(2);
    colunaProduto2.innerHTML = idPais;

    document.getElementById("idEempresa").value=''
    document.getElementById("idContato").value=''
    document.getElementById("idPais").value=''
}
