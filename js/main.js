

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b>";
}

function redirecionar(){
    window.open("https://.youtube.com/");
    //window.location.href= "https://www.youtube.com/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*function load(){
    alert ("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function clicou(){
    alert("Obrigado por clicar");
}


/*function soma(n1, n2){
    return n1 + n2;
}

var validar =0;

/*function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade =prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);*/

/*var d= new Date();
alert(d);
alert(d.getDay());
alert(d.getMonth()+1);*/

/*var count;
for(count=0; count<=5; count++){
    alert(count);
}*/

/*var count =0;
while (count < 5){
    console.log(count);
    count++
}*/


//var idade =14;
/*var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("voce e maior");
}else{
    alert("menor");
}*/


/*
var frutas =[{nome:"maça", cor:"vermelho"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);  
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.com);
*/

//var lista = ["maça", "péra" , "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

