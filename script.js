(function(){
    var actualizarHora = function(){
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diasemana = fecha.getDay(),
        dia=  fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
        pAMPM = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        psegundos=  document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diasemana');
        pMes = document.getElementById('mes'),
        pDia = document.getElementById('dia'),
        pYear = document.getElementById('year');

    var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    pDiaSemana.textContent = semana[diasemana];

    pDia.textContent = dia;
   
    var meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviemb  re', 'Diciembre' ];
    pMes.textContent= meses [mes];
   
    pYear.textContent= year;

    if(horas >= 12){
        horas  = horas - 12;
        ampm = 'PM';
    } else{
    ampm = 'AM';
  }
  if(horas == 0){
    horas = 12;
  };
  pHoras.textContent = horas;
  pAMPM.textContent = ampm;

  if(minutos < 10){ minutos = "0" + minutos };
  
  if(segundos < 10){segundos = "0" + segundos };

  psegundos.textContent = minutos;
  pMinutos.textContent = segundos;


};
actualizarHora();

var intervalo = setInterval (actualizarHora, 1000);
}())