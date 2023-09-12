window.onload = function() {

    const arr = JSON.parse(localStorage.getItem("fornecedores")) || [];

    const tabela = document.getElementById("tabelaFornecedores");

    for (const fornecedor of arr) {
        const novaLinha = tabela.insertRow(-1);

        const colunaNome = novaLinha.insertCell(0);
        colunaNome.innerHTML = fornecedor.nomeEmpresa;

        const colunaProduto = novaLinha.insertCell(1);
        colunaProduto.innerHTML = fornecedor.nomeContato;

        const colunaProduto2 = novaLinha.insertCell(2);
        colunaProduto2.innerHTML = fornecedor.nomePais;
    }
}
function validarForm(nomeEmpresa, nomeContato, nomePais) {
    var validouCampo = true
    document.getElementById("nomeEmpresa").classList.remove("bordaCampoInvalido");
    document.getElementById("nomeContato").classList.remove("bordaCampoInvalido");
    document.getElementById("nomePais").classList.remove("bordaCampoInvalido");
    if (nomeEmpresa.trim() === '') {
        document.getElementById("nomeEmpresa").classList.add("bordaCampoInvalido");
        alert('Por favor, preencha o campo Empresa.');
        validouCampo = false; 
    } 
    if (nomeContato.trim() === '') {
        document.getElementById("nomeContato").classList.add("bordaCampoInvalido");
        alert('Por favor, preencha o campo Contato.');
        validouCampo = false; 
        }
    if (nomePais.trim() === '' || nomePais === "Selecione o pais") {
        document.getElementById("nomePais").classList.add("bordaCampoInvalido");
        alert('Por favor, selecione um Pais.');
        validouCampo = false;
        }
             return validouCampo;
}
function cadastrarFornecedor(event) {
    const arr = JSON.parse(localStorage.getItem("fornecedores")) || [];
  
    event.preventDefault()

    const nomeEmpresa = document.getElementById("nomeEmpresa").value;
    const nomeContato = document.getElementById("nomeContato").value;    
    const nomePais = document.getElementById("nomePais").value; 
    
    
    if (validarForm(nomeEmpresa, nomeContato, nomePais)){
        arr.push({nomeEmpresa, nomeContato, nomePais});
        localStorage.fornecedores = JSON.stringify(arr);

        const tabela = document.getElementById("tabelaFornecedores") ;
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
}
