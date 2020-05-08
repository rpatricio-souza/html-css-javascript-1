function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}

function mudaIframe(iframe){
    document.getElementById("frame-spec").src = iframe;
}

function calcTotal(){
    var qtd=parseInt(document.getElementById('campo-qtd').value);
    total=qtd*1500.00;
    document.getElementById('campo-total').value=total;
}
