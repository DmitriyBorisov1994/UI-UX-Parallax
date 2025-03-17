export class PaginationBulletExtended extends HTMLElement {
  rendered: boolean;
  isOpen: boolean;

  constructor() {
    super();
    this.rendered = false;
    this.isOpen = false;
  }

  render() {
    const text = this.getAttribute("pagination-text");
    const emptyClosed = this.getAttribute("empty-closed");

    this.className = "pagination-extended-wrapper";

    this.onmouseover = () => {
      if (!this.isOpen) {
        this.isOpen = true;
        this.setAttribute("is-open", `${this.isOpen}`);
      }
    };

    this.onmouseleave = () => {
      this.isOpen = false;
      this.setAttribute("is-open", `${this.isOpen}`);
    };

    if (!this.isOpen) {
      this.innerHTML = `<div>${
        emptyClosed ? "" : text?.substring(0, 1).toUpperCase()
      }</div>`;
    } else {
      this.innerHTML = `<div>${text?.toUpperCase()}</div>`;
    }
  }

  connectedCallback() {
    const isOpenAttribute = this.getAttribute("is-open");
    if (isOpenAttribute === null) {
      this.setAttribute("is-open", `${this.isOpen}`);
    }
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() {
    return ["is-open"];
  }

  attributeChangedCallback() {
    this.render();
  }
}
