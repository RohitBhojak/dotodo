export default class Project {
  constructor(title) {
    this.pid = Date.now(); // Project ID
    this.title = title;
    this.list = [];
  }
}
