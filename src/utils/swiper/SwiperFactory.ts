import Swiper from "swiper";
import { CSSSelector, SwiperOptions } from "swiper/types";
import { Mousewheel, Parallax, Pagination, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

Swiper.use([Mousewheel, Parallax, Pagination, EffectFade]);

interface SwiperFactoryCreateConfig {
  type: "horizontal" | "vertical";
  selector: CSSSelector;
  menu: { imageURL?: string; text: string }[];
  options: Omit<SwiperOptions, "horizontal" | "pagination">;
}
export class SwiperFactory {
  static create({ type, selector, menu, options }: SwiperFactoryCreateConfig) {
    if (type === "horizontal")
      return new Swiper(selector, {
        direction: "horizontal",
        speed: 800,
        effect: "fade",
        fadeEffect: { crossFade: true },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<div class="${className}">` +
            `<img src="${menu[index].imageURL}"/>` +
            `<pagination-extended pagination-text="${menu[index].text}" empty-closed="true" direction="v">` +
            "</div>",
        },
        ...options,
      });
    return new Swiper(selector, {
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
          `<pagination-extended pagination-text="${menu[index].text}">` +
          `</pagination-extended>` +
          "</div>",
      },
      ...options,
    });
  }
}
