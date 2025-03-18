export class HeroTitle extends HTMLElement {
  rendered: boolean;
  isOpen: boolean;
  content: string;

  constructor() {
    super();
    this.rendered = false;
    this.isOpen = false;
    this.classList.add("hero-title");
    this.content = this.textContent || "";
  }

  render() {
    const text = this.getAttribute("title-text");
    this.innerHTML = `
    <div>
    <h1>${text?.toUpperCase()}</h1>
    <div class="content" is-open="${this.isOpen}">${this.content}
    </div>
    </div>
    `;
  }

  connectedCallback() {
    const isOpenAttribute = this.getAttribute("is-open");

    if (isOpenAttribute === null) {
      this.setAttribute("is-open", `${this.isOpen}`);
    } else {
      const open = isOpenAttribute === "true";
      if (open !== this.isOpen) {
        this.isOpen = open;
      }
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
