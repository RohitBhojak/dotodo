export default class Project {
  constructor(title) {
    this.pid = Date.now();
    this.title = title;
    this.list = [];
  }
}
