import React from 'react';
import { type Champion } from '../../../types/Champion';
import Image from 'next/image';
import { getDetailChampions } from '@/utils/serverApi';

// TODO SSG렌더링하기 위해 빌드 시에 경로 생성

type Props = {
  params: { id: string };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const data = await getDetailChampions(id);
  if (!data) return;
  const championdetail: Champion = data.data[id];
  return (
    <div className='grid grid-cols-1 place-items-center text-center gap-3 mt-7'>
      <p>{championdetail.name}</p>
      <p>{championdetail.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${championdetail.image.full}`}
        width={300}
        height={300}
        alt={championdetail.name}
      />
      <p className='break-keep w-2/3'>{championdetail.blurb}</p>

      <ul>
        <h3>스탯</h3>
        <li>공격력: {championdetail.info.attack}</li>
        <li>방어력: {championdetail.info.defense}</li>
        <li>난이도: {championdetail.info.difficulty}</li>
        <li>마법력: {championdetail.info.magic}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
