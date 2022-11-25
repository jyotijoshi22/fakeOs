//Show current time
const jyotiOsTime = document.getElementById("time");

const updateTime = () => {
  let today = new Date();
  let hours = today.getHours();
  //let minutes = today.getMinutes();
  const minutes = String(today.getMinutes()).padStart(2, "0");
  let current_time = `${hours}:${minutes}`;

  jyotiOsTime.innerHTML = current_time;
  setTimeout(updateTime, 1000);
};

updateTime();

//hide and Show menu
const startMenu = document.getElementById("clickStart");
startMenu.style.display = "none";

const startImage = document.getElementById("start");
startImage.onclick = function () {
  if (startMenu.style.display == "none") {
    startMenu.style.display = "block";
  } else startMenu.style.display = "none";
};

//Modal of My computer Icon
const startModal = document.getElementById("myModal");
startModal.style.display = "none";

const mycomp = document.getElementById("mycomputer");
mycomp.onclick = function () {
  startModal.style.display = "flex";
};

//close the modal for 3 icons in the window
const closeBtn = document.getElementById("cross");
closeBtn.onclick = function () {
  startModal.style.display = "none";
};
