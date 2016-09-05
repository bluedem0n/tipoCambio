window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var monto = parseFloat(document.getElementById("monto").value);
        var tipocambio = parseFloat(document.getElementById("tipocambio").value);
        var resultado;
        if(tipocambio && monto){
            resultado=  document.getElementById("resultado");
            resultado.innerHTML = "<p>El resultado es " + suma(monto,tipocambio) + "</p>";
        }
        else{
            resultado = document.getElementById("resultado");
            resultado.innerHTML="<p>No haz ingresado valores</p>";
        }
    });
    function suma(monto, tipocambio) {
        return (monto / tipocambio).toFixed(2);
    }
});
function soloNumeros(e)
{
    var numero = window.event ? window.event.keyCode : e.which;
    if ((numero == 8) || (numero == 46))
        return true;
    return /\d/.test(String.fromCharCode(numero));
}
