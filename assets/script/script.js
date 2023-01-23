const areaResponse = document.querySelector('.areaResponse')

const btnEncriptar = document.querySelector('#btnEncrypt');
const btnDesencriptar = document.querySelector('#btnDecrypt');
const btnCopy = document.querySelector('#btnCopy');

const txtResponse = document.querySelector('.txtResponse');
const txtArea = document.querySelector('.txtArea');

btnEncriptar.addEventListener('click', btnEncrypt);
btnDesencriptar.addEventListener('click', btnDecrypt);
btnCopy.addEventListener('click', copy);


function btnEncrypt(){
    const textoEncriptado = encriptar(txtArea.value);
    txtResponse.innerHTML = textoEncriptado;
    txtArea.value = "";
    areaResponse.classList.add("texto");
    btnCopy.style.display = "block";
    return textoEncriptado
}

function encriptar(stringEncripatada) {

    let matrizCodigo = [['e','enter'] , ['i','imes'], ['a','ai'],['o','ober'], ['u','ufat']];

    stringEncripatada = stringEncripatada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncripatada.includes(matrizCodigo[i][0])){
            stringEncripatada = stringEncripatada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncripatada
}

function btnDecrypt(){
    const textoDesencriptado = desencriptar(txtArea.value);
    txtResponse.innerHTML = textoDesencriptado;
    txtArea.value = "";
    areaResponse.classList.add("texto")
    btnCopy.style.display = "block";
    return textoDesencriptado
}

function desencriptar(stringDesencripatada) {
    let matrizCodigo = [['e','enter'] , ['i','imes'], ['a','ai'],['o','ober'], ['u','ufat']];

    stringDesencripatada = stringDesencripatada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencripatada.includes(matrizCodigo[i][1])){
            stringDesencripatada = stringDesencripatada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencripatada
}

function copy() {    
    navigator.clipboard.writeText(txtResponse.innerText)
    document.querySelector(area.innerText).select();
    document.execCommand("copy")
    alert("Texto Copiado!")
    
}