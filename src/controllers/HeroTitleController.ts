import { HeroTitle } from "../components/HeroTitle";

export class HeroTitleController {
  static control(element: HeroTitle) {
    return {
      openTitle() {
        element.isOpen = true;
        element?.setAttribute("is-open", `true`);
      },
      closeTitle() {
        element.isOpen = false;
        element?.setAttribute("is-open", `false`);
      },
    };
  }
}
