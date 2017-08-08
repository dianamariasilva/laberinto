var derecha = document.getElementById('derecha');
var izquierda= document.getElementById('izquierda');
var adelante = document.getElementById('adelante');
var solucion= document.getElementById('d');
var tablero= document.getElementById('tablero');

var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*1*__*________**W*",
"******************"];

function juego(){
    console.log('Current map', mapa);
    tablero.innerHTML = ''; //limpiar tablero
    document.getElementById("header").style.transform = "rotate(10deg)";
    var tabla = document.createElement('table');
    tabla.border = "0";
    //crea strings en lista
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        //crea elementos en string
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j]=="*") {
                celda.setAttribute('id','wall');
                // numeros de posiciones --> arriba, abajo, izq ,der
                }else if(mapa[i][j]==1|| mapa[i][j]==2 || mapa[i][j]==3||mapa[i][j]==4){
                	celda.setAttribute('class', 'inicio');   
                }else if(mapa[i][j]=="W"){
                	celda.setAttribute('class', 'fin');	
                }else if(mapa[i][j]=="_"){

                }
            var p = document.createElement('p');
            celda.appendChild(p);
            
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla); 
}

juego();

var y;
var turnRight = function(){
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if(mapa[i][j]==1 || mapa[i][j]==2 || mapa[i][j]==3 ){
                //Busca un numero entero en los strings de la lista y aumenta +1 al numero que encuentra hasta llegar a 4 de ahí retorna a 1
                mapa[i] = mapa[i].replace(/[0-9]/, parseInt(mapa[i][j])+1);
            }else if(mapa[i][j]==4){
                mapa[i] = mapa[i].replace(/[0-9]/, '1');
            }
        }
    }
    //probar que funcione el boton derecha en consola;
    juego();
}

derecha.onclick=function(){
    turnRight();
}


var turnLeft = function(){
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if(mapa[i][j]==4 || mapa[i][j]==3 || mapa[i][j]==2 ){
                mapa[i] = mapa[i].replace(/[0-9]/, parseInt(mapa[i][j])-1);
            }else if(mapa[i][j]==1){
                mapa[i] = mapa[i].replace(/[0-9]/, '4');
            }
        }
    }
    //probar que funcione el boton izquierda en consola;
    juego();
}

izquierda.onclick=function(){
    turnLeft();
}


var moveForward = function(){
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if(mapa[i][j]==1 && mapa[i-1][j]=="_" && mapa[i-1][j]!="*"){
                mapa[i]=mapa[i].substring(0,1)+'_'+mapa[i+1].substring(2,17);
                mapa[i-1]=mapa[i-1].substring(0,1)+'1'+mapa[i].substring(2,17)
            }
        }
    }
    juego();
}
adelante.onclick=function(){
    moveForward();
}