visor = document.getElementById("visor");
mititulo = document.getElementById("titulo");



function mifoto(numero) {
    f = "img/foto" + numero + ".jpg";
    document.images["fotoVisor"].src = f;
    t = document.images["fotos" + numero].alt;
    mititulo.innerHTML = t;
}