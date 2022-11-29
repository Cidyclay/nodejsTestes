//Receber como parâmetro três números e retornar o maior valor entre eles
/*
a>b>c imrpimir a ok
a>c>b imprimir a ok 
b>a>C imprimir b ok
b>c>a imprimir b ok
c>a>b imprimir c ok
c>b>a imprimir c ok
todos são iguais ok
a==b ok
b==c ok
a==c ok

*/
function teste(a,b,c){
    if((a>b&&b>c)){
        return console.log(a)
    }if((a>c)&&c>b){
        return console.log(a)
    }if((b>a&&a>c)){
        return console.log(b)
    }if((b>c&&c>a)){
        return console.log(b)
    }if((c>a)&&a>b){
        return console.log(c)
    }if((c>b)&&b>a){
        return console.log(c)
    }if(a==b&&c==a){
        return console.log("São todos iguais")
    }if((a==b)&&(c>b)){
        return console.log(c)
    }if((b==c)&&(a>b)){
        return console.log(a)
    }if((a==c)&&(b>a)){
        return console.log(b)
    }
}
teste(116,15,15)