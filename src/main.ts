import "./style.scss";

import { PaginationBulletExtended, HeroTitle, ListBox } from "./components";
import { HeroTitleController, ListBoxController } from "./controllers";
import {
  geraltCardData,
  jenniferCardData,
  geraltCombatCardData,
  getHeroCardFromSwiper,
  getHeroTitleFromSwiper,
} from "./utils";
import { SwiperFactory } from "./utils/swiper/SwiperFactory";

customElements.define("pagination-extended", PaginationBulletExtended);
customElements.define("hero-title", HeroTitle);
customElements.define("hero-card", ListBox);

const verticalMenu = [
  { text: "Геральт" },
  { text: "Йеннифер" },
  { text: "Цири" },
];

const menuHorizontal = [
  { imageURL: "src/assets/images/person.svg", text: "Главная" },
  { imageURL: "src/assets/images/spell-book.svg", text: "Биография" },
  { imageURL: "src/assets/images/swords-power.svg", text: "Боевые навыки" },
];

SwiperFactory.create({
  type: "vertical",
  selector: ".slider",
  menu: verticalMenu,
  options: {
    on: {
      afterInit(swiper) {
        const heroTitle = getHeroTitleFromSwiper(swiper);
        HeroTitleController.control(heroTitle).openTitle();
      },
      transitionStart(swiper) {
        const heroTitle = getHeroTitleFromSwiper(swiper);
        HeroTitleController.control(heroTitle).closeTitle();
      },
      transitionEnd(swiper) {
        const heroTitle = getHeroTitleFromSwiper(swiper);
        HeroTitleController.control(heroTitle).openTitle();
      },
    },
  },
});

const geraltCards = [geraltCardData, geraltCombatCardData];

SwiperFactory.create({
  type: "horizontal",
  selector: ".slider2",
  menu: menuHorizontal,
  options: {
    on: {
      afterInit(swiper) {
        const heroCards = getHeroCardFromSwiper(swiper);
        heroCards.forEach((card, idx) =>
          ListBoxController.control(card).setState(geraltCards[idx])
        );
      },
      transitionStart(swiper) {
        const heroCard = getHeroCardFromSwiper(swiper);
        heroCard.forEach((card) =>
          ListBoxController.control(card).resetListSlide()
        );
      },
      transitionEnd(swiper) {
        const heroCard = getHeroCardFromSwiper(swiper);
        heroCard &&
          ListBoxController.control(
            heroCard[swiper.activeIndex - 1]
          ).startListSlide();
      },
      touchMove(swiper, event) {
        const noSwipeList = Array.from(
          swiper.el.querySelectorAll("[no-swipe]")
        );
        noSwipeList.forEach((elem) => elem.classList.add("swiper-no-swiping"));
        const isTargetInNoSwipeList = noSwipeList.some((el) =>
          el.contains(event.target as Node)
        );
        if (isTargetInNoSwipeList) {
          swiper.allowSlideNext = false;
        } else {
          swiper.allowSlideNext = true;
        }
      },
      touchMoveOpposite(swiper, event) {
        const noSwipeList = Array.from(
          swiper.el.querySelectorAll("[no-swipe]")
        );
        noSwipeList.forEach((elem) => elem.classList.add("swiper-no-swiping"));
        const isTargetInNoSwipeList = noSwipeList.some((el) =>
          el.contains(event.target as Node)
        );
        if (isTargetInNoSwipeList) {
          swiper.allowSlideNext = false;
        } else {
          swiper.allowSlideNext = true;
        }
      },
    },
  },
});

const jenniferCards = [jenniferCardData, jenniferCardData];

SwiperFactory.create({
  type: "horizontal",
  selector: ".slider3",
  menu: menuHorizontal,
  options: {
    on: {
      afterInit(swiper) {
        const heroCards = getHeroCardFromSwiper(swiper);
        heroCards.forEach((card, idx) =>
          ListBoxController.control(card).setState(jenniferCards[idx])
        );
      },
      transitionStart(swiper) {
        const heroCard = getHeroCardFromSwiper(swiper);
        heroCard.forEach((card) =>
          ListBoxController.control(card).resetListSlide()
        );
      },
      transitionEnd(swiper) {
        const heroCard = getHeroCardFromSwiper(swiper);
        heroCard &&
          ListBoxController.control(
            heroCard[swiper.activeIndex - 1]
          ).startListSlide();
      },
      touchMove(swiper, event) {
        const noSwipeList = Array.from(
          swiper.el.querySelectorAll("[no-swipe]")
        );
        noSwipeList.forEach((elem) => elem.classList.add("swiper-no-swiping"));
        const isTargetInNoSwipeList = noSwipeList.some((el) =>
          el.contains(event.target as Node)
        );
        if (isTargetInNoSwipeList) {
          swiper.allowSlideNext = false;
        } else {
          swiper.allowSlideNext = true;
        }
      },
      touchMoveOpposite(swiper, event) {
        const noSwipeList = Array.from(
          swiper.el.querySelectorAll("[no-swipe]")
        );
        noSwipeList.forEach((elem) => elem.classList.add("swiper-no-swiping"));
        const isTargetInNoSwipeList = noSwipeList.some((el) =>
          el.contains(event.target as Node)
        );
        if (isTargetInNoSwipeList) {
          swiper.allowSlideNext = false;
        } else {
          swiper.allowSlideNext = true;
        }
      },
    },
  },
});
