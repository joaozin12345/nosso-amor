const startDate = new Date("2024-09-12T00:00:00"); // sua data
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();

  
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    months += 12;
  }

  const diff = now - startDate;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.innerHTML = `
    ${months} mes(es), ${days} dia(s),
    ${hours} hora(s), ${minutes} minuto(s), ${seconds} segundo(s)
  `;
}

setInterval(updateTimer, 1000);
updateTimer();
