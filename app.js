//Função pra sotear os números. 
function sortear() {
    //Pegando o valor dos input quantidade. 
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let de = parseInt(document.getElementById('de').value);

    let ate = parseInt(document.getElementById('ate').value);

    //Array dosnúmeros sorteados.
    let sorteados = [];
    //Número que vai receber um valor aleatório.
    let numero;

    //Laço For para preencher o array sorteados com números aleatórios.
    for (let i = 0; i < quantidade; i++) {

        // Atribuindo um valor aleatório 
        numero = obterNumeroAleatorio(de, ate);

        //Enquando o valor já estiver no array, peça um novo valor.
        while (sorteados.includes(numero)) {
            // Atribuindo um valor aleatório.
            numero = obterNumeroAleatorio(de, ate);

        }

        //Adicionando o valor np array.
        sorteados.push(numero);

    }

    //Pegando um elemento do html.
    let resultado = document.getElementById('resultado');

    // adicionando um label com os valores aleatórios.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
}

//Função que retorna um número aleatório.
function obterNumeroAleatorio(min, max) {
    //Lógica para retornar um número aleatório entre o min e o max.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


