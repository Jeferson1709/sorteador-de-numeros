//Função pra sotear os números. 
function sortear() {
    //Pegando o valor dos input quantidade. 
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //Verificação se o "campo" é de não é mais que o "até"
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    //Verificação se o a quantidade não é maior que o intevalo entre os números
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }


    //Array dosnúmeros sorteados.
    let sorteados = [];
    //Número que vai receber um valor aleatório.
    let numero;

    //Laço For para preencher o array sorteados com números aleatórios.
    for (let i = 0; i < quantidade; i++) {

        // Atribuindo um valor aleatório. 
        numero = obterNumeroAleatorio(de, ate);

        //Enquando o valor já estiver no array, peça um novo valor.
        while (sorteados.includes(numero)) {
            // Atribuindo um valor aleatório.
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');

        }

        //Adicionando o valor no array.
        sorteados.push(numero);

    }

    //Pegando um elemento do html.
    let resultado = document.getElementById('resultado');

    // adicionando um label com os valores aleatórios.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    //Chamando a função alterar status do botão.
    alterarStatusBotao();
}

//Função que retorna um número aleatório.
function obterNumeroAleatorio(min, max) {

    //Lógica para retornar um número aleatório entre o min e o max.
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    //Pegando o botão.
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        //Removendo a class do botão.
        botao.classList.remove('container__botao-desabilitado');
        //Adicionando uma nova classe.
        botao.classList.add('container__botao');
    } else {
        //Removendo a class do botão.
        botao.classList.remove('container__botao');
        //Adicionando uma nova classe.
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    // Reiniciando os valor para vazio.
    document.getElementById('quantidade').value = '';

    // Reiniciando os valor para vazio.
    document.getElementById('de').value = '';

    // Reiniciando os valor para vazio.
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    //Chamando a função alterar status do botão.
    alterarStatusBotao();

}