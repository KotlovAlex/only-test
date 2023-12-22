export type SlidersType = {
  [key: number]: string[][];
}

export type ThemesType = [number, string][];

export interface IData {
  length: number,
  themes: ThemesType,
  slides: SlidersType
}

