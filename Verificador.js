
VerificadorVelocidade(120);

function VerificadorVelocidade(velocidade){
const velocidadeMaxima=70;
const kmporPonto=5;

if(velocidade<=velocidadeMaxima){
    console.log('Velocidade dentro do permitido');

}
else{
    const pontos= Math.floor(((velocidade-velocidadeMaxima)/kmporPonto));

    if(pontos>= 12){
        console.log('Carteira Suspensa'); 
    }
    else{
        console.log(pontos,'ponto(s)',);
    }
}
 
}

    
