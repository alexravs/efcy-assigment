export default class SuccessInputComponent {
  constructor() {
    this.element = document.querySelector('input[name="success"]');
  }

  updateValue(value) {
    this.element.value = value;
  }
}
