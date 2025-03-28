# Тренировка UI/UX. Микровзаимодействия. Анимации

## Запустить локально

### Установка зависимостей:

```bash
npm i
```

### Запустить на [http://localhost:5173/](http://localhost:5173/):

```bash
npm run dev
```
## Использованные технологии

* Vanilla JS + TS + Vite
* Web Components (Vanilla JS)
* SCSS (mixins, loops, animations, variables)
* Swiper JS

## Применение принципов UI/UX

### Общий подход

* Использование ярких картинок: Яркие изображения привлекают внимание и создают эмоциональную связь с пользователем. Они могут быть использованы для передачи основного сообщения или темы вашего проекта.
* Полупрозрачные карточки: Карточки с полупрозрачным фоном позволяют пользователю видеть фон, не отвлекаясь от основного контента. Это создает ощущение глубины и помогает выделить важную информацию.
* Размер и цвет кнопок: Плавающие кнопки должны быть достаточно большие и контрастные, чтобы их было легко заметить и использовать. Использована цветовая палитра, которая гармонирует с фоном, но при этом выделяет кнопки.
* Анимации: Использованы плавные анимации для переходов и взаимодействий, чтобы сделать интерфейс более отзывчивым и приятным для пользователя.

### Типографика

Текста в карточке должно быть минимум — только основная информация. Лучше использовать простые стандартные гарнитуры, чтобы повысить читабельность и не создавать трудностей для восприятия информации.

Размер шрифта должен быть подходящий к формату карточки и соотносимый с общей концепцией дизайна. Ниже мы собрали общие параметры размеров, но вы можете остановиться на своем. Все зависит от контекста. Например:

* Заголовок — от 20px до 96px.
* Подзаголовок — на 2px–10px меньше, чем заголовок.
* Дополнительный текст — в руководстве Google Material Guidelines определены 2 размера основного текста: 14px и 16px. Здесь - 16px

В проекте применены относительные единицы изменрения rem, размеры соблюдены согласно рекомендациям.

### Выбор цвета

Для выбора цвета я использовал монохроматический подход - цветовой круг с выбором оттенков, лежащих в пределе угла 90 градусов

Helper: https://www.hover.dev/css-color-palette-generator

## Дополнительно

### Паттерны

Фабрика, модуль

### Анимации

https://animista.net/



