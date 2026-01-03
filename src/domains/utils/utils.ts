export const unaccent = (str: string) =>
  str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
