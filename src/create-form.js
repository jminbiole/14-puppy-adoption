'use strict';

export default class CreateFromView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
    this.toggle();
    this.toggleAway();
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
  toggleAway() {
    const addPuppyButton = document.querySelector('.submit-btn');
    const addPuppyForm = document.querySelector('.add-pup');

    function onSubmit() {
      addPuppyForm.classList.remove('add-pup__toggle');
    }
    addPuppyButton.addEventListener('click', onSubmit);
  }

  setupForm() {
    const nameInput = this.element.querySelector('.input-name');
    const ageInput = this.element.querySelector('.input-age');
    const urlInput = this.element.querySelector('.input-url');
    const profileInput = this.element.querySelector('.input-profile');

    const btn = document.querySelector('.add-pup');
    btn.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const formData = {
        name: nameInput.value,
        age: ageInput.value,
        url: urlInput.value,
        profile: profileInput.value,

      };

      fetch('http://tiny-tn.herokuapp.com/collections/jm-puppy', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((res) => res.json())
      .then((data) => {
        this.element.querySelector('.input-name').value = '';
        this.element.querySelector('.input-age').value = '';
        this.element.querySelector('.input-url').value = '';
        this.element.querySelector('.input-profile').value = '';
        this.application.addPup(data);
      });
    });
  }
}
