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
  let current_date = `  Date:  ${day}/${month}/${year}`;
  osDate.innerHTML = current_date;
};
updateDate();

//Toggle menu when start is clicked
const startMenu = document.getElementById("clickStart");
startMenu.style.display = "none";

const startImage = document.getElementById("start");
startImage.addEventListener("click", () => {
  if (startMenu.style.display == "none") {
    startMenu.style.display = "block";
  } else startMenu.style.display = "none";
});
//Toggle Menu ends here

//modal function
const displayModal = (str1, modal1) => {
  const onModal = document.getElementById(str1);
  onModal.addEventListener("click", () => {
    modal1.style.display = "flex";
  });
};

//Modal of My computer Icon
const startModal = document.getElementById("myModal");
startModal.style.display = "none";
displayModal("mycomputer", startModal);

//Modal of Notepad

const startModalnotepad = document.getElementById("notepadModal");
startModalnotepad.style.display = "none";
displayModal("notepad", startModalnotepad);

//Modal of Folders

const startModalFolder = document.getElementById("folderModal");
startModalFolder.style.display = "none";
displayModal("folder", startModalFolder);

//Close the modal for 3 icons in the window

const closeModal = (str, modal) => {
  const closeBtn = document.getElementById(str);
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
closeModal("cross", startModal);
closeModal("cross1", startModalnotepad);
closeModal("cross2", startModalFolder);
