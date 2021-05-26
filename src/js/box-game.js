/*
let boxCount = document.createElement("div");
let boxCountContainer = document.getElementById("box-count-container");

boxCount.appendChild(countParagraph);
boxCountContainer.appendChild(boxCount);
*/

//Test click event on all of the boxes
AFRAME.registerComponent("open-box", {
  init: function () {
    let el = this.el;
    this.openBox = function () {
      el.setAttribute("color", "green");
      if (el.classList.contains("closed")) {
        el.classList.remove("closed");
        el.classList.add("opened");
      }
      console.log(el.classList);
      boxGame();
      //alert("Box opened");
    };
    this.el.addEventListener("click", this.openBox);
  },
  remove: function () {
    this.el.removeEventListener("click", this.openBox);
  },
});
/*
AFRAME.registerComponent("opened-boxes-popup", {
  init: function () {
    let el = this.el;
    let boxesPopup = document.querySelector(".boxes-popup");
    let boxesScene = document.querySelector(".boxes-scene");
    this.openedBoxesPopup = function () {
      boxesPopup.classList.remove("hide");
      boxesScene.classList.add("layer");
    };
    this.el.addEventListener("click", this.openedBoxesPopup);
    game();
  },
  remove: function () {
    this.el.removeEventListener("click", this.openedBoxesPopup);
  },
});
*/

function boxGame() {
  const box1 = document.getElementById("box-1");
  const box2 = document.getElementById("box-2");
  const box3 = document.getElementById("box-3");
  if (
    box1.classList.contains("opened") &&
    box2.classList.contains("opened") &&
    box3.classList.contains("opened")
  ) {
    openBoxesPopup();
  }
}

function openBoxesPopup() {
  let boxesPopup = document.querySelector(".boxes-popup");
  let boxesScene = document.querySelector(".boxes-scene");

  boxesPopup.classList.remove("hide");
  boxesScene.classList.add("layer");
}

function closeBoxesPopup() {
  let boxesPopup = document.querySelector(".boxes-popup");
  let boxesScene = document.querySelector(".boxes-scene");

  boxesPopup.classList.add("hide");
  boxesScene.classList.remove("layer");
}
