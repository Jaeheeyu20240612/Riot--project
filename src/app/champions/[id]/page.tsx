import React from 'react';
import { type Champion } from '../../../types/Champion';
import Image from 'next/image';
import { getDetailChampions } from '@/utils/serverApi';
import Link from 'next/link';

// TODO SSG렌더링하기 위해 빌드 시에 경로 생성

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props) => {
  const { id } = params;
  return {
    title: `${id} - 챔피언 정보`,
    description: `${id}의 상세정보 페이지입니다.`,
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const data = await getDetailChampions(id);
  if (!data) return;
  const ChampionData = data[id];
  console.log(ChampionData);
  // console.log(typeof data);
  // console.log(data.image.full);
  return (
    <div className='grid grid-cols-1 place-items-center text-center gap-3 mt-7'>
      <p>{ChampionData.name}</p>
      <p>{ChampionData.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${ChampionData.image?.full}`}
        width={300}
        height={300}
        alt={data.name}
      />
      <p className='break-keep w-2/3'>{data.blurb}</p>

      <ul>
        <h3>스탯</h3>
        <li>공격력: {ChampionData.info?.attack}</li>
        <li>방어력: {ChampionData.info?.defense}</li>
        <li>난이도: {ChampionData.info?.difficulty}</li>
        <li className='mb-3'>마법력: {ChampionData.info?.magic}</li>
        <Link className='back-button ' href={'/champions'}>
          돌아가기
        </Link>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
