# Нияз & Шаура — свадебное приглашение

Одностраничный сайт-приглашение. 5 сентября 2026.

## Запуск

```bash
npm install
npm run dev
```

Откроется на `http://localhost:3000`.

## Сборка

```bash
npm run build     # собирает в dist/
npm run preview   # локальный просмотр сборки
```

## Структура

Весь контент — имена, дата, адреса, тексты, палитра дресс-кода — лежит
в [`src/data.json`](src/data.json). Компоненты только отображают эти данные,
поэтому правки текста не требуют изменений в коде.

- `src/components/` — секции страницы (Hero, Invitation, Location, DressCode, Countdown, Footer)
- `public/fonts/` — Franko (woff2), основной шрифт
- `public/` — фотографии

Заголовки — Cormorant Garamond (Google Fonts), основной текст — Franko.

## Деплой

Vercel определяет Vite автоматически: команда сборки `npm run build`,
директория вывода `dist`.
