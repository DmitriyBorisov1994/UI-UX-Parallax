import Swiper from "swiper";
import "./style.scss";
import "swiper/swiper-bundle.css";
import { Mousewheel, Parallax, Pagination, EffectFade } from "swiper/modules";
import { PaginationBulletExtended } from "./components/PaginationBulletExtended";

customElements.define("pagination-extended", PaginationBulletExtended);

Swiper.use([Mousewheel, Parallax, Pagination, EffectFade]);

const verticalMenu = ["Геральт", "Йеннифер", "Цири"];

const menuGeralt = [
  { imageURL: "src/assets/images/person.svg", text: "Главная" },
  { imageURL: "src/assets/images/spell-book.svg", text: "Биография" },
  { imageURL: "src/assets/images/swords-power.svg", text: "Боевые навыки" },
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
      `<div class="${className}">` +
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
      `<div class="${className}">` +
      `<img src="${menuGeralt[index].imageURL}"/>` +
      `<pagination-extended pagination-text="${menuGeralt[index].text}" empty-closed="true" direction="v">` +
      "</div>",
  },
});
