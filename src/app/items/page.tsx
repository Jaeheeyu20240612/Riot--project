import { getItemLists } from '@/utils/serverApi';
import React from 'react';
import { Item, type Items } from '@/types/Items';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'LOL 아이템 목록 페이지',
};
const ItemsPage = async () => {
  const data: Items = await getItemLists();
  // console.log(data);
  const ItemLists: [string, Item][] = Object.entries(data);
  // console.log(ItemLists);

  return (
    <div className='mb-12 mt-10'>
      <h1 className='text-center text-lg font-bold mb-3'>아이템 목록</h1>
      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5'>
        {ItemLists.map(([id, item]) => (
          <Link href={`/items/${id}`} key={id}>
            <ul className='rounded-lg flex flex-col items-center border border-red-600 mt-3 w-52 h-60 p-5'>
              <Image
                className='rounded-lg mb-2'
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                width={115}
                height={115}
                alt={item.name}
              />
              <li className='font-bold text-lg'>{item.name}</li>
              <li className='break-keep text-center text-md'>
                {item.plaintext}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
