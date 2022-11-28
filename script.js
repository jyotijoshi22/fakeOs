//Shows current time in Taskbar
const osTime = document.getElementById("time");

const updateTime = () => {
  let today = new Date();
  let hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, "0");
  let current_time = `Time: ${hours}:${minutes}`;
  osTime.innerHTML = current_time;
  setTimeout(updateTime, 1000);
};
updateTime();

// Shows Current date in TaskBar
const osDate = document.getElementById("date");

const updateDate = () => {
  let todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();
  let current_date = `Date:  ${day}/${month}/${year}`;
  osDate.innerHTML = current_date;
};
updateDate();

//Toggle menu when start is clicked
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

//Modal of Notepad
const startModalnotepad = document.getElementById("notepadModal");
startModalnotepad.style.display = "none";

const myNotepad = document.getElementById("notepad");
myNotepad.onclick = function () {
  startModalnotepad.style.display = "flex";
};

//Modal of Folders

const startModalFolder = document.getElementById("folderModal");
startModalFolder.style.display = "none";

const myFolder = document.getElementById("folder");
myFolder.onclick = function () {
  startModalFolder.style.display = "flex";
};

//close the modal for 3 icons in the window
const closeBtn = document.getElementById("cross");
closeBtn.onclick = function () {
  startModal.style.display = "none";
};

const closeBtn1 = document.getElementById("cross1");
closeBtn1.onclick = function () {
  startModalnotepad.style.display = "none";
};
const closeBtn2 = document.getElementById("cross2");
closeBtn2.onclick = function () {
  startModalFolder.style.display = "none";
};
