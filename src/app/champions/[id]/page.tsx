import React from 'react';
import { type Champion } from '../../../types/Champion';
import Image from 'next/image';
type Params = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Params) => {
  const { id } = params;
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`,
    { cache: `force-cache` }
  );
  const data = await res.json();
  const championdetail: Champion = data.data[id];
  return (
    <div className='grid grid-rows-[50px_1fr_auto] grid-cols-[auto] w-1/2 m-auto text-center mt-7 '>
      <p>{championdetail.name}</p>
      <p>{championdetail.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${championdetail.image.full}`}
        width={300}
        height={300}
        alt={championdetail.name}
      />
      <p>{championdetail.blurb}</p>

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
