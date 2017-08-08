var derecha = document.getElementById('derecha');
var izquierda= document.getElementById('izquierda');
var adelante = document.getElementById('adelante');
var solucion= document.getElementById('d')

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
"*o*__*________**W*",
"******************"];
function juego(){
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
                }else if(mapa[i][j]=="o"){
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


var turnRight = function(){
    var x = 0; 
    var y = 0;
    var cont;
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if(mapa[i][j]=="o"){
                x=i;
                y=j;
                x++
            }
        }
    }
}
// otraSol.onclick= function(){
//   myhappyfunction();
// }

var turnLeft = function(){

}

var moveForward = function(){

}