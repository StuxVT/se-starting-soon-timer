window.addEventListener("onWidgetLoad", function (obj) {
  const fieldData = obj.detail.fieldData;
  let countdownTime = fieldData.duration;
  let timerElement = document.getElementById("timer");
  let initialMessage = fieldData.initialMessage;
  let expiredMessage = fieldData.expiredMessage;
  let countdownInterval;

  function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function () {
      if (countdownTime >= 0) {
        timerElement.textContent = initialMessage + " " + formatTime(countdownTime);
        countdownTime--;
      } else {
        clearInterval(countdownInterval);
        timerElement.textContent = expiredMessage;
      }
    }, 1000);
  }

  // Visuals
  timerElement.style.backgroundColor = fieldData.backgroundColor;
  timerElement.style.fontFamily = fieldData.fontName;
  timerElement.style.color = fieldData.textColor;
  timerElement.style.borderRadius = fieldData.borderRadius + "px";
  timerElement.style.textShadow = fieldData.textShadow ? "0 0 6px black" : "none";

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  startCountdown();

  window.addEventListener("onEventReceived", function (obj) {
    const message = obj.detail.event.data.text;
    const isBroadcaster = obj.detail.event.data.tags.badges && obj.detail.event.data.tags.badges.includes("broadcaster/1");

    if (isBroadcaster) {
      if (message.startsWith("!resetcountdown")) {
        countdownTime = fieldData.duration;
        startCountdown(); // Restart countdown
      } else if (message.startsWith("!setcountdown ")) {
        countdownTime = parseInt(message.split(" ")[1]);
        startCountdown(); // Restart countdown
      }
    }
  });
});
