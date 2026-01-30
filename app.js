const menue = document.getElementById("menue");
const menuetoggle = document.getElementById("menuetoggle");
let i = 0;
menue.addEventListener("click", () => {
  if (i == 0) {
    menuetoggle.style.display = "flex";
    i = 1;
  } else if (i == 1) {
    menuetoggle.style.display = "none";
    i = 0;
  }
});
