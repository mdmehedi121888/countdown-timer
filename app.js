const futureDate = new Date("Wed Jan 01 2025 00:00:00").getTime();

const myInterval = setInterval(() => {
  const presentDate = new Date().getTime();
  var diff = futureDate - presentDate;
  if (diff <= 0) {
    clearInterval(myInterval);
  } else {
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}, 1000);
