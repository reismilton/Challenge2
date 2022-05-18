
const inputTexto = document.querySelector(".input-texto");
const mensagens = document.querySelector(".mensagens");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagens.value = textoEncriptado;
    mensagens.style.background = "none";
    inputTexto.value = '';
}

function btnDescriptar(){
    const textoDescriptado = descriptografar(mensagens.value);
    mensagens.value = textoDescriptado;
    inputTexto.value = '';
}

function encriptar(stringEncriptada){
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    
    return stringEncriptada;
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    
    return stringDescriptada;
}