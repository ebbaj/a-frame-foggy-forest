AFRAME.registerComponent("target-marker", {
  init: function () {
    let el = this.el;
    this.addMarker = function (e) {
      //This is where we get the position/point of the event
      let p = e.detail.intersection.point;
      let scene = document.querySelector("a-scene");

      let newMark = document.createElement("a-entity");
      newMark.setAttribute("geometry", {
        primitive: "sphere",
      });
      newMark.setAttribute("material", "color: red");
      newMark.setAttribute("scale", ".2 .2 .2");
      newMark.setAttribute("position", p);
      scene.appendChild(newMark); //You could specify a specific entity to append the mark to, instead of the entire scene (you would need a reference to that)
    };

    this.el.addEventListener("click", this.addMarker);
  },
  remove: function () {
    this.el.removeEventListener("click", this.addMarker);
  },
});

//This is how you add new objects to a scene.
//It also shows how to get the specific position of where an event occured (and that you can add objects to that position).
