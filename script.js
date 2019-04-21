let nome;
let notaFinal;
advinhe = () => {
    let numero = prompt('Digite um numero e tente advinhaer o correto');
    let random = (Math.random() * 21).toFixed(0);

    if (numero == random){
        alert('Parabéns você acertou o número !');
    }
    else if(numero < random){
        alert('O numero é maior');
    }else{
        alert('O numero é menor');
    }
}

notas = () => {
    nome = prompt("Qual o nome do aluno?");
    let nota1 = parseInt(prompt("Nota 1: "));
    let nota2 = parseInt(prompt("Nota 2: "));
    let nota3 = parseInt(prompt("Nota 3: "));
    
    notaFinal = ((nota1+ nota2 + nota3) / 3).toFixed(1);
}

verMedia = () => {
    alert (`${nome} tem a media de ${notaFinal}`);
}

passou = () => {
    if(notaFinal < 6){
        alert(`${nome} não passou`);
    }
    else{
        alert(`${nome} passou`);
    }
}

// notas();
// verMedia();
// passou();


emprestimo = () =>{
    let nome = prompt("Qual o seu nome?");
    let idade = prompt("Qual sua idade?");

    if ((idade >= 22) && (idade <=55)){
        let salario = parseInt(prompt("Qual o valor do seu salario? "));
        let valor = parseInt(prompt(`Qual o valor que gostaria para o empretimo ${nome}`));
        if(valor >= 1000){
            if(valor < (salario*15)){
                alert("Empretimo ACEITO");
            }else{
                alert("Quantia muito alta NÂO FOI ACEITO")
            }
        }else{
            alert("O valor minimo para emprestimo é de R$1000")
        }
    }else{
        alert("Sua idade não é valida");
    }
}

emprestimo();