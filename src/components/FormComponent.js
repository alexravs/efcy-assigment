import OutputComponent from "./OutputComponent.js";
import SelectStatusComponent from "./SelectStatusComponent.js";
import SuccessInputComponent from "./SuccessInputComponent.js";

export default class FormComponent {
  constructor({ oppoStatusItems }) {
    this.onStatusSelection = this.onStatusSelection.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.oppoStatusItems = oppoStatusItems;

    this.selectStatus = new SelectStatusComponent({
      oppoStatusItems: this.oppoStatusItems,
      onChange: this.onStatusSelection,
    });
    this.successInput = new SuccessInputComponent();
    this.output = new OutputComponent();

    this.element = document.querySelector("form");

    this._registerEvents();
  }

  onStatusSelection(kOppoStatus) {
    const oppoStatusItem = this._getStatusItem(kOppoStatus);

    this.successInput.updateValue(oppoStatusItem.SUCCESS);
    this.selectedKOppoStatus = kOppoStatus;
  }

  init() {
    const defaultOppoStatusItem = this.oppoStatusItems[0];

    this.selectedKOppoStatus = defaultOppoStatusItem.K_OPPO_STATUS
    this.selectStatus.updateSelectedOption(defaultOppoStatusItem.K_OPPO_STATUS);
    this.successInput.updateValue(defaultOppoStatusItem.SUCCESS);
  }

  _registerEvents() {
    this.element.addEventListener("submit", this._onSubmit);
  }

  _onSubmit(event) {
    event.preventDefault();
    const oppoStatusItem = this._getStatusItem(this.selectedKOppoStatus);

    this.output.updateValue(
      JSON.stringify({
        status: oppoStatusItem.K_OPPO_STATUS,
        success: oppoStatusItem.SUCCESS,
      })
    );
  }

  _getStatusItem(kOppoStatus) {
    return this.oppoStatusItems.find(
      (oppoStatusItem) => oppoStatusItem.K_OPPO_STATUS === kOppoStatus
    );
  }
}
