const template = `
<div class="dog-content">
  <div class="dog-card">
    <div class="img-frame">
      <img src="http://www.placecage.com/c/300/300" alt="">
    </div>
    <div class="dog-card__info">
      <p class="dog-card__name">Name</p>
      <input class="dog-card__input" type="text" name="" id="">
      <p class="dog-card__age">Age</p>
      <input class="dog-card__input" type="text" name="" id="">
      <p class="dog-card__url">Photo URL</p>
      <input class="dog-card__input" type="text" name="" id="">
      <p class="dog-card__profile">Profile</p>
      <input class="dog-card__input" type="text" name="" id="">
      <div class="btns">
        <button class="btn card">Delete</button>
        <button class="btn card">Update</button>
      </div>
    </div>
  </div>
</div>
  `;

export default class PuppyView {
  constructor(data, element) {
    this.element = element;
    this.data = [];

    this.element = document.createElement('li');
    this.element.classList = ('puppy-list__item');
    this.element.innerHTML = template;

  }

  render() {
    const selectors = {
      name: this.element.querySelector('.dog-card__name'),
      age: this.element.querySelector('.dog-card__age'),
      url: this.element.querySelector('.dog-card__url'),
      profile: this.element.querySelector('.dog-card__profile')
    };
    this.selectors.name.innerText = this.data.name;
    this.selectors.age.innerText = this.data.age;
    this.selectors.url.innerText = this.data.url;
    this.selectors.profile.innerText = this.data.profile;
  }
}
