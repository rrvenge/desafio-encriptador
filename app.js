function encriptar() {

    const texto = document.getElementById('texto-a-encriptar').value;

    if (!texto || texto == '') return;

    const encriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')



    document.getElementById('con-texto').style.display = 'block';
    document.getElementById('encriptacion').innerText = encriptado;
    document.getElementById('sin-texto').style.display = 'none';
}

function desencriptar() {

    const texto = document.getElementById('texto-a-encriptar').value;
    
    if (!texto || texto == '') return;

    const encriptado = texto
        .replace(/enter/g, 'e' )
        .replace(/imes/g, 'i' )
        .replace(/ai/g, 'a' )
        .replace(/ober/g, 'o' )
        .replace(/ufat/g, 'u' )



    document.getElementById('con-texto').style.display = 'block';
    document.getElementById('encriptacion').innerText = encriptado;
    document.getElementById('sin-texto').style.display = 'none';
}

function copiar() {
    const texto = document.getElementById('encriptacion').innerText;
    navigator.clipboard.writeText(texto);
}

document.getElementById('boton-encriptar').addEventListener('click', encriptar);
document.getElementById('boton-desencriptar').addEventListener('click', desencriptar);
document.getElementById('boton-copiar').addEventListener('click', copiar);
