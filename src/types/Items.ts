export type Item = {
  name: string;
  description: string;
  plaintext: string;
  image: ItemImage;
};

export type Items = {
  data: {
    [id: number]: Item;
  };
};

export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
