import { getItemLists } from '@/utils/serverApi';
import React from 'react';
import { type Items } from '@/types/Items';
import Image from 'next/image';

const ItemsPage = async () => {
  const data: Items = await getItemLists();
  console.log(data.data);
  const ItemLists = Object.values(data.data);
  console.log(ItemLists);
  return (
    <>
      <h1 className=''>아이템 목록</h1>
      <div className='grid grid-cols-7 gap-5 p-5'>
        {ItemLists.map((item) => (
          <ul
            key={item.name}
            className='rounded-lg flex flex-col items-center border border-red-600 mt-3  w-1/8 p-5'
          >
            <Image
              className='rounded-lg mb-2'
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
              width={115}
              height={115}
              alt={item.name}
            />
            <li className='font-bold text-lg'>{item.name}</li>
            <li className='break-keep-'>{item.plaintext}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ItemsPage;
