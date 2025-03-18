type Item = {
  subtitle: string;
  content: string;
  iconSrc?: string;
};

export class ListBox extends HTMLElement {
  rendered: boolean;
  title: string;
  items: Item[];

  constructor() {
    super();
    this.rendered = false;
    this.title = "";
    this.items = [];
    // элемент создан
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.role = "listbox";
    wrapper.tabIndex = 0;

    const ul = document.createElement("ul");
    ul.role = "group";
    ul.setAttribute("aria-labelledby", this.title);

    const presentationLi = document.createElement("li");
    presentationLi.role = "presentation";
    presentationLi.id = this.title;
    presentationLi.innerText = this.title;

    const itemsArray = this.items.map((item) => {
      const li = document.createElement("li");
      li.role = "option";
      li.innerHTML = `
      <div>
      <div>
      ${item.subtitle}
      </div>
      <div>
      ${item.content}
      </div>
      </div>`;
      return li;
    });

    ul.appendChild(presentationLi);
    itemsArray.forEach((li) => ul.appendChild(li));
    wrapper.appendChild(ul);

    this.innerHTML = `<div class="listbox-area"></div>`;
    this.children[0].appendChild(wrapper);
  }

  connectedCallback() {
    // браузер вызывает этот метод при добавлении элемента в документ
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  disconnectedCallback() {
    // браузер вызывает этот метод при удалении элемента из документа
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
  }

  static get observedAttributes() {
    return [
      /* массив имён атрибутов для отслеживания их изменений */
    ];
  }

  attributeChangedCallback() {
    // вызывается при изменении одного из перечисленных выше атрибутов
    this.render();
  }
}
