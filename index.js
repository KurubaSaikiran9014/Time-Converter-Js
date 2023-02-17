let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");
let convertBtn = document.getElementById("convertBtn");
let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");


convertBtn.addEventListener("click", function() {
    if (hoursInput.value === "") {
        timeInSeconds.textContent = "";
        errorMsg.textContent = "Please enter a valid number of hours.";
        timeInSeconds.classList.toggle("con-to-sec");

    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes.";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.toggle("con-to-sec");

    } else {
        errorMsg.textContent = "";
        let h = parseInt(hoursInput.value);
        let m = parseInt(minutesInput.value);
        let conSec = (h * 3600 + m * 60);
        timeInSeconds.textContent = conSec;
        timeInSeconds.classList.toggle("con-to-sec");

    }

});
