// 각 챔피언을 id로 갖는 객체
export type Champions = Record<string, Champion>;

// 챔피언 세부 정보
export interface Champion {
  data?: { [key: string]: Champion };
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
}
