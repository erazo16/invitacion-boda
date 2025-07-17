function actualizarCountdown() {
  const countdownElement = document.getElementById('countdown');
  
  const targetDate = new Date("September 20, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "¡Llegó el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <div class="time-block">
      <div class="number">${days} :</div>
      <div class="label">Días</div>
    </div>
    <div class="time-block">
      <div class="number">${hours} :</div>
      <div class="label"> Horas</div>
    </div>
    <div class="time-block">
      <div class="number">${minutes} :</div>
      <div class="label"> Minutos</div>
    </div>
    <div class="time-block">
      <div class="number">${seconds}</div>
      <div class="label"> Segundos</div>
    </div>
  `;
}

setInterval(actualizarCountdown, 1000);
actualizarCountdown();