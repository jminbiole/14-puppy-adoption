'use strict';

import PuppyView from 'puppy-view';
import CreateForm from 'create-form';

export default class App {
  constructor(element) {
    this.element = element;
    this.doggoList = element.querySelector('.dog-tiles');
    this.form = new CreateForm(this.element, this);
    this.data = [];
    this.render();
  }

  addPup(puppy) {
    this.data = [puppy, ...this.data];
    this.render();
  }

  render() {
    this.doggoList.innerHTML = '';
    const components = this.data.map((item) => new PuppyView(item, this));
    components.forEach((card) => {
      this.doggoList.appendChild(card.element);
      card.render();
    });
  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/jm-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }

  remove(noPup) {
    this.data = this.data.filter((nope) => nope._id !== noPup._id);
    this.render();
  }

  updatePuppy(changePup) {
    this.data = this.data.map((data) => {
      if (data._id === changePup._id) {
        return changePup;
      }

      return data;
    });
  }

}
