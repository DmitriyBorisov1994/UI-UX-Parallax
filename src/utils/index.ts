import Swiper from "swiper";
import { HeroTitle } from "../components";

export const getHeroTitleFromSwiper = (swiper: Swiper) => {
  const headers = swiper.el.querySelectorAll(
    "hero-title"
  ) as NodeListOf<HeroTitle>;
  return Array.from(headers)[swiper.activeIndex];
};
