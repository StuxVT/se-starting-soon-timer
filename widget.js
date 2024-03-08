window.addEventListener('onWidgetLoad', function (obj) {
  const fieldData = obj.detail.fieldData;
  let countdownTime = fieldData.duration;
  let timerElement = document.getElementById("timer");
  let initialMessage = fieldData.initialMessage
  let expiredMessage = fieldData.expiredMessage

  // visuals
  timerElement.style.backgroundColor = fieldData.backgroundColor
  timerElement.style.fontFamily = fieldData.font

  // seconds -> min:sec format
  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  //run every 1s
  let countdownInterval = setInterval(function() {
    if (countdownTime >= 0) {
      timerElement.textContent = initialMessage + " " + formatTime(countdownTime);
      countdownTime--;
    } else {
      clearInterval(countdownInterval);
      timerElement.textContent = expiredMessage;
    }
  }, 1000);
});