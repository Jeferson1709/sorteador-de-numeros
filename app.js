function sortear() {
    //Pegando o valor do input quantidade. 
    let quantidade = document.getElementById('quantidade').value;
    
    let de = document.getElementById('de').value;
    
    let ate = document.getElementById('ate').value;
    
    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);

}
let btn_reiniciar = document.getElementById("btn_reiniciar");