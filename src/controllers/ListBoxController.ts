import { sleep } from "../utils";
import { ListBox } from "./../components/Listbox";

type Item = {
  subtitle: string;
  content: string;
  iconSrc?: string;
};

interface ListBoxState {
  title: string;
  items: Item[];
}

export class ListBoxController {
  static control(element: ListBox) {
    return {
      setState(newState: ListBoxState) {
        element.title = newState.title;
        element.items = newState.items;
        element.render();
      },
      async startListSlide() {
        element.startSlide = true;
        element.render();
        element.startSlide = false;
      },
    };
  }
}
