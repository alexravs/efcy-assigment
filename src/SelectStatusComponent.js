import OptionComponent from "./OptionComponent.js";

export default class SelectStatusComponent {
  constructor({ oppoStatusItems = [], onChange }) {
    this.updateSelectedOption = this.updateSelectedOption.bind(this);
    this._onChange = this._onChange.bind(this);

    this.element = document.getElementsByName("status")[0];
    this.onChange = onChange;
    this.options = this._populateDropdown(oppoStatusItems);
    this._registerEvents();
  }

  updateValue(value) {
    this.element.value = value;
  }

  updateSelectedOption(status) {
    this.options.forEach((option) => {
      option.setSelected(Number(status) === Number(option.kOppoStatus));
    });
  }

  _registerEvents() {
    this.element.addEventListener("change", this._onChange);
  }

  _onChange(event) {
    const { value } = event.target;
    const kOppoStatus = Number(value)

    this.onChange(kOppoStatus);
    this.updateSelectedOption(kOppoStatus);
  }

  _populateDropdown(oppoStatusItems = []) {
    return oppoStatusItems.map((oppoStatus) => {
      const { STATUS, K_OPPO_STATUS, SUCCESS } = oppoStatus;

      const option = new OptionComponent({
        status: STATUS,
        kOppoStatus: K_OPPO_STATUS,
        success: SUCCESS,
      });

      this.element.appendChild(option.element);

      return option;
    });
  }
}
