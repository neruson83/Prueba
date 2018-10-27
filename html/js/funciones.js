console.log('hola mundo');
var numero1 =10;
var numero2 =30;
var resultado =numero1+numero2;
console.log(resultado);
var cadena = "El resultado es:";
console.log(cadena);
var resultado2 = cadena+resultado;
console.log(resultado2);
cadena ="lorem ipsum dolor sit \"amet\"connectettur adipsicing";
console.log(cadena);
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(semana);
console.log(semana[3]);
var cumple= true;
console.log(cumple);
for(var i=0; i<semana.length;i++){
    console.log(semana[i]);    
}
for(dia in semana){
    if(!cumple){
    console.log(dia);
    console.log(semana[dia]);
}else{
    console.log("si cumple");
}
}
function suma(){
    var n1=12;
    var n2=34;
    var res =n1+n2;
    console.log("la suma es:"+res);
}
suma();
console.log(resultado2);
function resta(val1, val2){
    console.log(val1-val2);
    console.log(cadena);
}
resta(1234,5678);
var cadena="En un lugar de la mancha de cuyo no quiero acordarme...";
var letras=cadena.split("");
var resultado="";
for(i in letras) {
    if(letras[i]=='a'){
        continue;
    }else{
        resultado +=letras[i];
    }
}
console.log(resultado);
var parrafos =document.getElementsByTagName("p");
console.log(parrafos);
parrafos[1].innerText="nuevo texto";
var mimensaje = document.getElementById("mensaje");
console.log(mimensaje);
mimensaje.style.background = "grey";
function refrescarvalor(){
    var entrada = document.getElementById("entrada");
    mimensaje.innerHTML = entrada.value;
}