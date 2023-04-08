export default class OptionComponent {
  constructor({ status, kOppoStatus, success }) {
    this.status = status;
    this.kOppoStatus = kOppoStatus;
    this.success = success;
    this.element = this._createElement();
  }

  setSelected(isSelected) {
    if (isSelected) {
      this.element.setAttribute("selected", isSelected);
    } else {
      this.element.removeAttribute("selected");
    }
  }

  _createElement() {
    const option = document.createElement("option");
    const optionText = document.createTextNode(this.status);

    option.setAttribute("value", this.kOppoStatus);
    option.appendChild(optionText);

    return option;
  }
}
