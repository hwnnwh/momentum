const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}`;
}

getClock(); // 시작할 떄 인터벌 1초 안기다리고 즉시 실행 위해
setInterval(getClock, 1000);
