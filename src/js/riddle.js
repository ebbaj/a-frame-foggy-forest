//POPUP
AFRAME.registerComponent("open-popup", {
  init: function () {
    let el = this.el;
    let popup = document.querySelector(".popup");
    let scene = document.querySelector(".scene");
    this.openPopup = function () {
      popup.classList.remove("hide");
      scene.classList.add("layer");
    };
    this.el.addEventListener("click", this.openPopup);
    game();
  },
  remove: function () {
    this.el.removeEventListener("click", this.openPopup);
  },
});

function closePopup() {
  let popup = document.querySelector(".popup");
  let scene = document.querySelector(".scene");

  popup.classList.add("hide");
  scene.classList.remove("layer");
}

// RIDDLE GAME
function game() {
  const textElement = document.getElementById("text");
  const nextButtonElement = document.getElementById("next-button");
  const riddleContainer = document.querySelector("riddle-game-container");
  const optionButtonsDiv = document.getElementById("option-buttons");
  const popupButton = document.querySelector(".popup-button");

  const correctAnswerMessage = "Correct!";
  const incorrectAnswerMessage = "Incorrect! Try again :)";
  const riddleResult = document.createElement("p");
  const correctAnswerButton = document.createElement("button");
  const incorrectAnswerButton1 = document.createElement("button");
  const incorrectAnswerButton2 = document.createElement("button");

  function startGame() {
    showTextNode(1);
    popupButton.disabled = true;
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(
      (textNode) => textNode.id === textNodeIndex
    );
    textElement.innerText = textNode.text;
    nextButtonElement.addEventListener("click", () => next(textNode));
    riddle(textNode);
    endRiddleGame(textNode);
  }

  function next(textNode) {
    const nextTextNodeId = textNode.nextText;
    showTextNode(nextTextNodeId);
  }

  function riddle(textNode) {
    if (textNode.id === 5) {
      nextButtonElement.disabled = true;
      correctAnswerButton.innerText = "Mountain";
      optionButtonsDiv.appendChild(correctAnswerButton);

      incorrectAnswerButton1.innerText = "Giraffe";
      optionButtonsDiv.appendChild(incorrectAnswerButton1);

      incorrectAnswerButton2.innerText = "House";
      optionButtonsDiv.appendChild(incorrectAnswerButton2);

      correctAnswerButton.addEventListener("click", correctAnswerPrompt);
      incorrectAnswerButton1.addEventListener("click", incorrectAnswerPrompt);
      incorrectAnswerButton2.addEventListener("click", incorrectAnswerPrompt);
    } else if (textNode.id !== 5) {
      optionButtonsDiv.innerHTML = "";
      nextButtonElement.disabled = false;
    }
  }

  function correctAnswerPrompt() {
    riddleResult.innerText = correctAnswerMessage;
    optionButtonsDiv.appendChild(riddleResult);
    riddleResult.style.color = "green";
    correctAnswerButton.disabled = true;
    incorrectAnswerButton1.disabled = true;
    incorrectAnswerButton2.disabled = true;
    nextButtonElement.disabled = false;
  }

  const incorrectAnswerPrompt = () => {
    riddleResult.innerHTML = incorrectAnswerMessage;
    optionButtonsDiv.appendChild(riddleResult);
    riddleResult.style.color = "red";
    nextButtonElement.disabled = true;
  };

  function endRiddleGame(textNode) {
    if (textNode.id === textNodes.length) {
      nextButtonElement.disabled = true;
      popupButton.disabled = false;
    }
  }

  const textNodes = [
    {
      id: 1,
      text: "Hello space scavenger! Welcome to the foggy forest.",
      nextText: 2,
    },
    {
      id: 2,
      text: "The missing piece to your spaceship is hidden in the fog...",
      nextText: 3,
    },
    {
      id: 3,
      text: "...And since I am guarding the forest, you have to answer my riddle correctly in order to look for it.",
      nextText: 4,
    },
    {
      id: 4,
      text: "Are you ready?",
      nextText: 5,
    },
    {
      id: 5,
      text: "What has roots that nobody sees, is taller than trees, up, up it goes, and yet never grows?",
      nextText: 6,
    },
    {
      id: 6,
      text: "Aahh... you're a clever one, aren't you? Well, go ahead and look for your missing piece. But beware...",
      nextText: 7,
    },
    {
      id: 7,
      text: "...Only a true scavenger can navigate through the fog and collect the piece from one of the three hidden boxes. Good luck! 🚀",
      nextText: 8,
    },
  ];

  startGame();
}