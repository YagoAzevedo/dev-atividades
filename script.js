function cadastrarFornecedor(event) {
    event.preventDefault()
    const nomeEmpresa = document.getElementById("nomeEmpresa").value;
    const nomeContato = document.getElementById("nomeContato").value;
    const nomePais = document.getElementById("nomePais").value;

    if (
        nomeEmpresa.trim() === '' || nomeContato.trim() === '' || nomePais.trim() === '') {
            alert('Por favor, preencha todos os campos antes de cadastrar.');
            return; 
             }

    const tabela = document.getElementById("tabelaFornecedores");
    const novaLinha = tabela.insertRow(-1);

    const colunaNome = novaLinha.insertCell(0);
    colunaNome.innerHTML = nomeEmpresa;

    const colunaProduto = novaLinha.insertCell(1);
    colunaProduto.innerHTML = nomeContato;

    const colunaProduto2 = novaLinha.insertCell(2);
    colunaProduto2.innerHTML = nomePais;

    document.getElementById("nomeEmpresa").value=''
    document.getElementById("nomeContato").value=''
    document.getElementById("nomePais").value=''
}
