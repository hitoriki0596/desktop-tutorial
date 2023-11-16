function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Hiển thị giờ trên trình duyệt
    document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds;
  }

  setInterval(updateClock, 1000);