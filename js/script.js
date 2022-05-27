/*
Função Relógio.
(Beba água, levante, alongue-se, vá dar uma volta, não se force camarada ;D )
*/
const hourHand = document.querySelector(".hand.hours");
const minuteHand = document.querySelector(".hand.minutes");
const secondHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotation) => {
  element.style.setProperty("--rotation", rotation * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
};

setClock();

setInterval(setClock, 1000);
