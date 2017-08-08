window.onload = function(){
    //document.onkeypress = chars;
    document.onkeydownn = chars;
}

function chars(evento){
    if(window.event)
        evento=window.event;

    document.getElementById("string").innerHTML=evento.keyCode;
}

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

var tabla = document.createElement('table');
    tabla.border = "0";
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j]=="*") {
                celda.setAttribute('id','paredes');
                }else if(mapa[i][j]=="o"){
                	celda.setAttribute('class', 'verde');
                }else if(mapa[i][j]=="W"){
                	celda.setAttribute('class', 'rojo');	
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

var x=0;
var y=0;

var turnRight = function(){

}

var turnLeft = function(){

}

var moveForward = function(){

}