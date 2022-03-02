export const authMenu = [
  { id: 1, title: 'Против компьютера', link: '/game/company' },
  { id: 2, title: 'Битва', link: '/game/prepare' },
  { id: 3, title: 'Тренировка', link: '/game/train' },
  { id: 4, title: 'Правила', link: '/rules' },
  { id: 5, title: 'Таблица лидеров', link: '/ratings' },
  { id: 6, title: 'Настройки', link: '/settings' },
];
export const noAuthMenu = [
  { id: 1, title: 'Против компьютера', link: '/game/company' },
  { id: 3, title: 'Тренировка', link: '/game/train' },
  { id: 4, title: 'Правила', link: '/rules' },
];

export const alphabets = {
  en: 'qwertyuiopasdfghjklzxcvbnm'.split('').sort(),
  ru: 'йцукенгшщзхъфывапролджэячсмитьбю'.split('').sort(),
};

export const SERVER_URL = 'https://bulls-and-cows-apii.herokuapp.com';
