import Swiper from "swiper";
import { HeroTitle, ListBox } from "../components";

export * from "./geraltCardData";

export const getHeroTitleFromSwiper = (swiper: Swiper) => {
  const headers = swiper.el.querySelectorAll(
    "hero-title"
  ) as NodeListOf<HeroTitle>;
  return Array.from(headers)[swiper.activeIndex];
};

export const getHeroCardFromSwiper = (swiper: Swiper) => {
  const headers = swiper.el.querySelectorAll(
    "hero-card"
  ) as NodeListOf<ListBox>;
  return Array.from(headers)[swiper.activeIndex];
};
