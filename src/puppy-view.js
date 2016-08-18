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
        <button class="delete-btn">Delete</button>
        <button class="update-btn">Update</button>
      </div>
    </div>
  </div>
</div>
  `;

export default class PuppyView {
  constructor(puppyData, application) {
    this.application = application;
    this.puppyData = puppyData;

    this.element = document.createElement('div');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = template;
    this.setupListenerDelete();
  }

  render() {
    const selectors = {
      name: this.element.querySelector('.dog-card__name'),
      age: this.element.querySelector('.dog-card__age'),
      url: this.element.querySelector('.dog-card__url'),
      profile: this.element.querySelector('.dog-card__profile'),
      img: this.element.querySelector('.img-frame__photo'),
    };
    selectors.name.value = this.puppyData.name;
    selectors.age.value = this.puppyData.age;
    selectors.url.value = this.puppyData.url;
    selectors.profile.value = this.puppyData.profile;
    selectors.img.src = this.puppyData.url;
  }

  setupListenerDelete() {
    this.element.querySelector('.delete-btn').addEventListener('click', (ev) => {
      ev.preventDefault();
      return fetch(`http://tiny-tn.herokuapp.com/collections/jm-puppy/${this.puppyData._id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => {
          this.application.remove(this.puppyData);
        });
    });
  }
  updatePuppy() {
    this.element.querySelector('.update-btn').addEventListener('click', (ev) => {
      ev.preventDefault();
      fetch(`http://tiny-tn.herokuapp.com/collections/jm-puppy/${this.puppyData._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: this.puppyData._id,
          name: this.element.querySelector('.dog-card__name').value,
          age: this.element.querySelector('.dog-card__age').value,
          url: this.element.querySelector('.dog-card__url').value,
          profile: this.element.querySelector('.dog-card__profile').value,
        }),
      }).then((res) => res.json())
      .then((newData) => {
        this.application.updatePuppy(newData);
      });
    });
  }
}
