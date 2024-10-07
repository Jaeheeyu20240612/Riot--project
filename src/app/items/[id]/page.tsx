import { Separator } from '@/components/ui/separator';
import { Items } from '@/types/Items';
import { getItemLists } from '@/utils/serverApi';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const items = await getItemLists();
  // console.log(items);
  const itemName = items[id].name;
  // console.log(itemName);
  return {
    title: `${itemName} - LOL 아이템 상세 정보`,
  };
}

const ItemDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const data: Items = await getItemLists();
  const selectedItem = data[id];
  // console.log(selectedItem);
  // console.log(data[id]);

  // console.log(Object.entries(selectedItem.stats));

  return (
    <>
      <div className='text-center grid grid-cols-[20%_1fr_20%] h-screen place-items-center'>
        <div></div>

        <div className='p-4'>
          <p className='text-lg font-bold text-center'>
            아이템 : {selectedItem?.name}
          </p>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${selectedItem?.image.full}`}
            width={170}
            height={170}
            alt={selectedItem?.name}
            className='rounded-lg p-1 mx-auto'
          />
          <Separator className='mb-2' />
          <p className='mb-2'>{selectedItem?.plaintext}</p>
          {selectedItem.tags.length > 0 && (
            <p className='mb-2'>Tags: {selectedItem.tags.join(', ')}</p>
          )}

          {selectedItem?.stats &&
            Object.keys(selectedItem.stats).length > 0 && (
              <>
                {Object.entries(selectedItem.stats).map(([key, value]) => (
                  <p key={key}>
                    {key}: {value}
                  </p>
                ))}
              </>
            )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetailPage;
