export default class OutputComponent {
  constructor() {
    this.element = document.querySelector('.output');
  }

  updateValue(value) {
    this.element.innerHTML = value;
  }
}