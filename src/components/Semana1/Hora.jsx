function Hora() {
    return (
       <>
        <p className="card-text fw-bold">
            Horário:
        </p>
        <div id="relogio" className="card-text mb-5 fw-bold fs-1"></div>
       </>
    );
}

function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horario = horas + ':' + minutos + ':' + segundos;

    var relogio = document.getElementById("relogio");
    if (relogio) {
        relogio.innerHTML = horario;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(atualizarRelogio, 1000);
});

export default Hora;
