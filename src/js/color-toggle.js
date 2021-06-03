//Color toggle of cylinder
AFRAME.registerComponent("color-toggle", {
  init: function () {
    let el = this.el;
    this.toggleColor = function () {
      //el.setAttribute("color", "#3F768C");
      location.reload();
    };
    this.el.addEventListener("click", this.toggleColor);
  },
  remove: function () {
    this.el.removeEventListener("click", this.toggleColor);
  },
});

//Whenever a component is attached to an entity in a scene, it performs these lifecycle functions at specific times.
//If a component is attached to an entitiy in the initial page, it will run its' init function when the page loads.
//If a component gets attached to an entitiy after an application has already started...
//...the init function will run as soon as that component gets attached to that specific entity.
//It's entity specific.
//The remove function will run when a component gets removed from an entity (if programmatically removed or if an entity gets deleted).

//This is a keyword attached to the component (it is referencing the component).
//The component becomes a reference to the entity it is attached to.
//You don't want to attach the event listener to the component, you want to attach it to the entity that the component is on.
//Have to add remove event listener in the remove lifecycle function because otherwise if the entity gets removed, the event listener will still be there.

//el.setAttribute("color", blue);
