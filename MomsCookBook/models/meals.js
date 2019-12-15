class Meal {
  constructor(id, categoryIds, title, imageUrl, duration, steps) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.steps = steps;
  }
}

export default Meal;
