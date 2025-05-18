export default class Project {
  constructor(title) {
    this.id = Date.now();
    this.title = title;
    this.list = [];
  }
}
