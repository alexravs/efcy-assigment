export default class SuccessInputComponent {
  constructor() {
    this.element = document.getElementsByName("success")[0];
  }

  updateValue(value) {
    this.element.value = value;
  }
}
