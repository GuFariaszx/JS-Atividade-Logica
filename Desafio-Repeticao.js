//  DESAFIO 
alert(" Bem-vindo à Cafeteria! ");

let continuar = true;

while (continuar) {
    const name = prompt("Qual é o seu nome?");
    const drink = prompt("Qual bebida você deseja? (Café, Chá, Suco)");
    
    if (confirm("Deseja adicionar açúcar?")) {
        alert(`${name}, seu ${drink} com açúcar está sendo preparada!`);
    } else {
        alert(`${name}, seu ${drink} sem açúcar está sendo preparada!`);
    }
    
    if (confirm("Deseja um acompanhamento?")) {
        const accompaniment = prompt("Qual acompanhamento? (Bolo, Biscoito, Sanduíche)");
        alert(`Acompanhamento selecionado: ${accompaniment}`);
    } else {
        alert("Nenhum acompanhamento selecionado.");
    }
    
    continuar = confirm("Deseja fazer outro pedido?");
}

alert("Obrigado por visitar nossa cafeteria! Volte sempre!");

