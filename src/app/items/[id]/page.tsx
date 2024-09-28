import { Item } from '@/types/Items';
import { getItemLists } from '@/utils/serverApi';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: { id: string };
};

interface ExtendedItem extends Item {
  tags: string[];
  stats: { [key: string]: number }; // 키가 문자열이고 값이 숫자인 객체(인덱스 시그니처)
}

const ItemDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const data = await getItemLists();

  const selectedItem: ExtendedItem = data[id];
  console.log(selectedItem);

  return (
    <div>
      ItemDetailPage입니다.
      <p>아이템 : {selectedItem?.name}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${selectedItem?.image.full}`}
        width={150}
        height={150}
        alt={selectedItem?.name}
      />
      <p>{selectedItem?.plaintext}</p>
      <div className='flex flex-row gap-1'>
        <p>Tags - </p>
        {selectedItem.tags.map((tag, index) => (
          <p className='' key={index}>
            {tag},
          </p>
        ))}
      </div>
      <div className='flex flex-row gap-1'>
        <h4>Stats - </h4>
        {Object.entries(selectedItem.stats).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ItemDetailPage;
