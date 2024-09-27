export interface Item {
  name: string;
  description: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface Items {
  [key: string]: Item; // 키는 문자열이고 값은 Item 타입
}
