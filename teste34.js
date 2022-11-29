//Receber três números como parâmetros e imprimi-los em ordem crescente;
/*
a>b>c imrpimir c b a ok 
a>c>b imprimir b c a ok 
b>a>c imprimir c a b ok 
b>c>a imprimir a c b ok
c>a>b imprimir b a c ok
c>b>a imprimir a b c 
*/
function teste(a,b,c){
    if((a>b) && (b>c)){
        return console.log(c,b,a)
    }
    if((a>c)&&(c>b)){
        return console.log(b,c,a)
    }
    if((b>a)&&(a>c)){
        return console.log(c,a,b)
    }
    if((b>c)&&(c>a)){
        return console.log(a,c,b)
    }
    if((c>a)&&(a>b)){
        return console.log(b,a,c)
    }
    if((c>b)&&(b>a)){
        return console.log(c,b,a)
    }  
}
teste(10,20,35)
