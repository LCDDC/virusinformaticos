var type=[
    "Spyware",
    "Malware",
    "Ransomware",
    "Backdoor"
];
var text=[
    "El spyware se trata de un software espía que recopila información de un ordenador, como la navegación del usuario, además de datos personales y bancarios. Un ejemplo de este tipo de virus son los Keyloggers, los cuales monitorizan y rastrean toda nuestra actividad con el teclado (teclas que se pulsan), para luego enviarla al ciberdelincuente.",
    "Se trata de códigos diseñados por ciberdelincuentes que tienen por objeto alterar el normal funcionamiento del ordenador, sin el permiso o el conocimiento del usuario. Este tipo de virus pueden destruir archivos del disco duro o corromper los archivos que tenemos albergados con datos inválidos.",
    "El ciberdelincuente bloquea el dispositivo con un mensaje solicitando un rescate para liberarlo. El usuario debe pagar dicho rescate en la moneda digital Bitcoin, para que no se pueda rastrear y se mantenga el anonimato del hacker.",
    "En la informática, backdoor (en español, puerta trasera) es una secuencia especial o un término trasero dentro del código de programación, mediante la cual se pueden evitar los sistemas de seguridad del algoritmo (autenticación) para acceder al sistema. Aunque estas puertas pueden ser utilizadas para fines maliciosos y espionaje no siempre son un error, ya que pueden haber sido diseñadas con la intención de tener una entrada secreta."
];
var image=[
    "image5.jpg",
    "image3.jpg",
    "images6.jpg",
    "images7.jpg"
];
var i=0;
function siguiente(){
    document.getElementById("subtitulo").innerHTML=type[i];
    document.getElementById("texto").innerHTML=text[i];
    document.getElementById("album").src=image[i];
    i++;
    document.getElementById("audio").play();
}