'use strict';
export default class App {
  constructor (element) {
    this.element = element;
    this.data =[];

    this.setupForm();

  }

  start() {
    this.getData()
      .then(() => {
      });
      debugger;
  }

  getData() {
    return fetch('http://tiny-tn.herokuapp.com/collections/jm-puppies')
      .then((res) => res.json())
        .then((data) => {
          this.data = data;
        });
  }

  render() {
  }

  setupForm() {
    const nameInput = this.element.querySelector('.add-pup__name');
    const ageInput = this.element.querySelector('.add-pup__age');
    const urlInput = this.element.querySelector('.add-pup__url');
    const profileInput = this.element.querySelector('.add-pup__profile');

    const btn = document.querySelector('.btn');
    btn.addEventListener('save', (ev) => {
    const name = nameInput.value;
    const age = ageInput.value;
    const url = urlInput.value;
    const  profile = profileInput.value;

    ev.preventDefault();

    fetch('http://tiny-tn.herokuapp.com/collections/rt-puppies', {
        method: 'POST',
        body: JSON.stringify({ name, age, url, profile }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((newSave) => {
        this.data = [...this.data, newSave];
        this.render();
      });
    });
  }

  // getData(data) {
  //   return getData()
  //     .then((data) => {
  //       this.data = data;
  //     });
  // }

  render() {
    const el = element.querySelector('dog-card__info');
    el.innerHTML = '';

  }
}
