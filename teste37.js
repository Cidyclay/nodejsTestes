//Receber como parâmetro três números e retornar o menor valor entre eles
/*
Casos
a>b>c imprimir c ok
a>c>b imprimir b ok
b>a>c imprimir c ok
b>c>a imprimir a ok 
c>a>b imprimir b ok
c>b>a imprimir a ok
Todos são iguais ok
a==b ok
b==c ok
a==c ok 
*/
function teste(a,b,c){
    if((a>b)&&(b>c)){
        return console.log(c)
    }if((a>c)&&(c>b)){
        return console.log(b)
    }if((b>a)&&(a>c)){
        return console.log(c)
    }if((b>c)&&(c>a)){
        return console.log(a)
    }if((c>a)&&(a>b)){
        return console.log(b)
    }if((c>b)&&(b>a)){
        return console.log(a)
    }if((a==b)&&(c==a)){
        return console.log("Todos são iguais")
    }
    if((a==b)&&(b>c)){
        return console.log(c)
    }
    if((b==c)&&(b>a)){
        return console.log(a)
    }if((a==c)&&(c>b)){
        return console.log(b)
    }
}
teste(50,100,100)