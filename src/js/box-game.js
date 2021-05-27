//Test click event on all of the boxes
AFRAME.registerComponent("open-box", {
  init: function () {
    let el = this.el;
    this.openBox = function () {
      el.setAttribute("color", "#1E9B44");
      if (el.classList.contains("closed")) {
        el.classList.remove("closed");
        el.classList.add("opened");
        console.log(el.classList);
      }
      boxGame();
      //alert("Box opened");
    };
    this.el.addEventListener("click", this.openBox);
  },
  remove: function () {
    this.el.removeEventListener("click", this.openBox);
  },
});

function boxGame() {
  const box1 = document.getElementById("box-1");
  const box2 = document.getElementById("box-2");
  const box3 = document.getElementById("box-3");
  const gate = document.getElementById("gate");
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
  gate.setAttribute("visible", true);
  findMissingPiece();
}

function closeBoxesPopup() {
  let boxesPopup = document.querySelector(".boxes-popup");
  let boxesScene = document.querySelector(".boxes-scene");

  boxesPopup.classList.add("hide");
  boxesScene.classList.remove("layer");
}

function findMissingPiece() {
  const boxesText = document.getElementById("boxes-text");
  const boxesTitle = document.getElementById("boxes-title");
  const boxesNextButton = document.getElementById("boxes-next-button");
  const boxesPopupButton = document.getElementById("boxes-popup-button");

  function start() {
    showBoxTextNodes(1);
  }

  function showBoxTextNodes(boxTextNodeIndex) {
    const boxTextNode = boxTextNodes.find(
      (boxTextNode) => boxTextNode.id === boxTextNodeIndex
    );
    boxesTitle.innerText = boxTextNode.title;
    boxesText.innerText = boxTextNode.text;
    boxesNextButton.addEventListener("click", () => next(boxTextNode));
    end(boxTextNode);
  }

  function next(boxTextNode) {
    const nextTextNodeId = boxTextNode.nextText;
    showBoxTextNodes(nextTextNodeId);
  }

  function end(boxTextNode) {
    if (boxTextNode.id === 2) {
      boxesNextButton.disabled = true;
      boxesPopupButton.disabled = false;
    } else {
      boxesNextButton.disabled = false;
      boxesPopupButton.disabled = true;
    }
  }

  const boxTextNodes = [
    {
      id: 1,
      title: "Congratulations!",
      text: "You found the missing piece! The spaceship is no longer missing its steering wheel.",
      nextText: 2,
    },
    {
      id: 2,
      title: "Paul:",
      text: "Now, get out of my forest! I know there's a way out of here... somewhere...",
      nextText: 2,
    },
  ];
  start();
}
