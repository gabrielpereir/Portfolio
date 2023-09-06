function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Potenciação'));


if (operacao > 5) {
    alert('Operação Inválida');
    calculadora();
}
else {


    let n1 = Number(prompt('Digite o primeiro número:'));
    let n2 = Number(prompt('Digite o segundo número'));
    let resultado;

   

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} x ${n2} = ${resultado}`);
    }

    function divisao() {
        resultado = n1 / n2;
        alert(`${n1} : ${n2} = ${resultado}`);
    }

    function potenciacao() {
        resultado = Math.pow(n1, n2);
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    }

    function op (){
        let opcao = prompt('Gostaria de continuar na calculadora?\nDigite S para Sim\nDigite N para Não');
        if(opcao=='s' || opcao== 'S'){
            calculadora();
        }
        else if (opcao=='n'|| opcao=='N'){
            alert('Obrigado por usar a calculadora... Até breve');
        }
    }
    switch (operacao) {
        case 1:
            soma();
            op();
            break;

        case 2:
            subtracao();
            op();
            break;

        case 3:
            multiplicacao();
            op();
            break;

        case 4:
            divisao();
            op();
            break;

        case 5:
            potenciacao();
            op();
            break;

    


        default:
            alert('Operação inválida');
            calculadora();
            break;
    }
}

}

calculadora();