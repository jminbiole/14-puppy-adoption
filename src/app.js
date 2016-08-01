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
  render() {
    this.doggoList.innerHTML = '';
    const components = this.data.map((item) => new PuppyView(item, this));
    components.forEach((card) => {
      card.render();
      this.doggoList.appendChild(card.element);
    });
  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/jm-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render();
        console.log(this.data);
      });
  }

  remove(goAway) {

  }


}
