'use strict';

export default class CreateFromView {
  constructor(element) {
    this.element = element;
    this.toggle();
  }
  toggle() {
    const addPuppyButton = document.querySelector('.circle');
    const addPuppyForm = document.querySelector('.add-pup');
    addPuppyButton.addEventListener('click', onClick);

    function onClick() {
      addPuppyForm.classList.toggle('add-pup__toggle');
    }
  }
  submit() {
    const savePup = document.querySelector('.btn');
    savePup.addEventListener('click', onSubmit);

    function onSubmit() {
      return fetch(`http://tiny-tn.herokuapp.com/collections/jm-puppy`)

    }
  }
}
