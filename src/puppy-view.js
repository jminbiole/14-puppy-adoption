const template = `
<div class="dog-content">
  <div class="dog-card">
    <div class="img-frame">
      <img class="img-frame__photo" src="" alt="">
    </div>
    <div class="dog-card__info">
      <p>Name</p>
      <input class="dog-card__name input-name" type="text" name="" id="">
      <p>Age</p>
      <input class="dog-card__age input"-age type="text" name="" id="">
      <p>Photo URL</p>
      <input class="dog-card__url input-url" type="text" name="" id="">
      <p>Profile</p>
      <input class="dog-card__profile input-profile" type="text" name="" id="">
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
    this.data = data;

    this.element = document.createElement('li');
    this.element.classList = ('puppy-list__item');
    this.element.innerHTML = template;
  }

  render() {
    const selectors = {
      name: this.element.querySelector('.dog-card__name'),
      age: this.element.querySelector('.dog-card__age'),
      url: this.element.querySelector('.dog-card__url'),
      profile: this.element.querySelector('.dog-card__profile'),
      img: this.element.querySelector('.img-frame__photo'),
    };
    selectors.name.value = this.data.name;
    selectors.age.value = this.data.age;
    selectors.url.value = this.data.url;
    selectors.profile.value = this.data.profile;
    selectors.img.src = this.data.url;
  }
}
