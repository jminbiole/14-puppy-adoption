const template = `
<input class="dog-card__input" type="text" value=" " id="">
<input class="dog-card__input" type="text" value=" " id="">
<input class="dog-card__input" type="text" value=" " id="">
<input class="dog-card__input" type="text"" value=" " id="">
  `;

export default class PuppyView {
  constructor(data) {
    this.data = data;

    this.element = document.createElement('li'); //
    this.element.innerHTML = template;

    this.selectors = {
      name: this.element.querySelector('.dog-card__name'),
      age: this.element.querySelector('.dog-card__age'),
      url: this.element.querySelector('.dog-card__url'),
      profile: this.element.querySelector('.dog-card__profile'),
    };
  }

  render() {
    this.selectors.name.innerText = this.data.name;
    this.selectors.age.innerText = this.data.age;
    this.selectors.url.innerText = this.data.url;
    this.selectors.profile.innerText = this.data.profile;
  }
}
