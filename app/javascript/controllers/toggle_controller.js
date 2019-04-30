import { Controller } from "stimulus"
export default class extends Controller {
  static targets = ["text", "thingToHide"]

  isHidden() {
    return this.data.get("hidden") === "true"
  }

  flip() {
    this.data.set("hidden", this.isHidden() ? "false" : "true")
  }

  toggle() {
    this.flip()
    this.thingToHideTarget.classList.toggle("is-hidden", this.isHidden())
    // Change text depending on if it is hidden
    this.textTarget.innerText = this.isHidden() ? "Show" : "Hide"
  }
}
