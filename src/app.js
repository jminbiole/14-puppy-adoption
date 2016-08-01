'use strict';

import PuppyView from 'puppy-view';
import CreateForm from 'create-form';

export default class App {
  constructor (element) {
    this.element = element;
    this.data = [];

    this.setupForm();
    this.render();
    this.start();
    console.log(element);
  }
  render() {
    this.element.innerHTML = '';
    const components = this.data.map((item) => new PuppyView(item));
    components.forEach((card) => {
      this.element.appendChild(card.element);
      card.render();
    })

  }

  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.render(data);
          console.log(this.data);
        });
  }

  setupForm() {
    const nameInput = this.element.querySelector('.add-pup__name');
    const ageInput = this.element.querySelector('.add-pup__age');
    const urlInput = this.element.querySelector('.add-pup__url');
    const profileInput = this.element.querySelector('.add-pup__profile');

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (ev) => {
    const name = nameInput.innerText.value;
    const age = ageInput.value;
    const url = urlInput.value;
    const  profile = profileInput.value;

    // ev.preventDefault();

    // fetch(`http://tiny-tn.herokuapp.com/collections/jm-puppy`, {
      //   method: 'POST',
      //   body: JSON.stringify({ name, age, url, profile }),
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // })
      // .then((res) => res.json())
      // .then((newSave) => {
      //   this.data = [...this.data, newSave];
      //   this.render();
      // });
    });
  }
  remove(goAway) {

  }


}
