//(2.0) Implemente um programa capaz de, dado um número, imprimir todos os divisores ímpares dele.
function teste(a){
    for(let i=0;a>=i;i++){
            if(a%i==0&&i%2!=0){
             console.log(i)
            }
    
        }
}
teste(10)