import Swiper from "swiper";
import "./style.scss";
import "swiper/swiper-bundle.css";
import { Mousewheel, Parallax, Pagination, EffectFade } from "swiper/modules";
import { PaginationBulletExtended } from "./components/PaginationBulletExtended";

customElements.define("pagination-extended", PaginationBulletExtended);

Swiper.use([Mousewheel, Parallax, Pagination, EffectFade]);

const verticalMenu = ["Геральт", "Йеннифер", "Цири"];

const menuGeralt = [
  "src/assets/images/person.svg",
  "src/assets/images/spell-book.svg",
  "src/assets/images/swords-power.svg",
];

new Swiper(".slider", {
  direction: "vertical",
  speed: 2400,
  mousewheel: true,
  parallax: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) =>
      '<div class="' +
      className +
      '">' +
      `<pagination-extended pagination-text="${verticalMenu[index]}">` +
      `</pagination-extended>` +
      "</div>",
  },
});

new Swiper(".slider2", {
  direction: "horizontal",
  speed: 800,
  effect: "fade",
  fadeEffect: { crossFade: true },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) =>
      '<span class="' +
      className +
      '">' +
      `<img src="${menuGeralt[index]}"/>` +
      "</span>",
  },
});
