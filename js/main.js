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
    tablero.innerHTML = '';
    document.getElementById("header").style.transform = "rotate(10deg)";
    var tabla = document.createElement('table');
    tabla.border = "0";
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j]=="*") {
                celda.setAttribute('id','wall');
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
                mapa[i] = mapa[i].replace(/[0-9]/, parseInt(mapa[i][j])+1);
            }else if(mapa[i][j]==4){
                mapa[i] = mapa[i].replace(/[0-9]/, '1');
            }
        }
    }
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
                mapa[i] = mapa[i].replace(/[0-9]/, '1');
            }
        }
    }
    juego();
}

izquierda.onclick=function(){
    turnLeft();
}


var moveForward = function(){

}