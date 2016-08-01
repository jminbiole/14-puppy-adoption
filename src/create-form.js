'use strict';

export default class CreateFromView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
    this.toggle();
    this.setupForm();
  }
  toggle() {
    const addPuppyButton = document.querySelector('.circle');
    const addPuppyForm = document.querySelector('.add-pup');

    function onClick() {
      addPuppyForm.classList.toggle('add-pup__toggle');
    }
    addPuppyButton.addEventListener('click', onClick);
  }
  setupForm() {
    const nameInput = this.element.querySelector('.add-pup__name');
    const ageInput = this.element.querySelector('.add-pup__age');
    const urlInput = this.element.querySelector('.add-pup__url');
    const profileInput = this.element.querySelector('.add-pup__profile');

    const btn = document.querySelector('.add-pup');
    btn.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = nameInput.innerText.value;
      const age = ageInput.value;
      const url = urlInput.value;
      const profile = profileInput.value;

      fetch('http://tiny-tn.herokuapp.com/collections/jm-puppy', {
        method: 'POST',
        body: JSON.stringify({ name, age, url, profile }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((newSave) => {
        this.application.addPup(newSave);
      });
    });
  }
}
