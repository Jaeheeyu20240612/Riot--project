import React from 'react';
import Image from 'next/image';
import {
  getBackground,
  getChampionData,
  getDetailChampions,
} from '@/utils/serverApi';
import Link from 'next/link';
import { Champion } from '@/types/Champion';
import Header from '@/components/Header';

// TODO SSG렌더링하기 위해 빌드 시에 경로 생성 동적인 값을 static build하기
export const generateStaticParams = async () => {
  const data = await getChampionData();
  const championsArray: Champion[] = Object.values(data);
  const ids = championsArray.map((champion) => champion.id);
  // console.log(ids);
  return ids.map((id) => ({ id }));
};

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
  const ChampionData: Champion = data;

  const backgroundUrl = await getBackground(id);
  console.log(backgroundUrl);
  console.log(typeof backgroundUrl);

  // console.log(ChampionData);
  // console.log(typeof data);
  // console.log(data.image.full);
  return (
    <div className='relative h-screen md:h-full'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundUrl.imageUrl})`,
          opacity: 0.5,
        }}
      />
      <div className='grid grid-rows-[80vh_1fr_auto] grid-cols-1 md:grid-cols-2 gap-5 items-center relative z-10'>
        <div className='flex justify-center items-center mb-5 mt-5'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${ChampionData.image?.full}`}
            width={300}
            height={300}
            alt={data.name}
            className=''
          />
        </div>

        {/* 왼쪽 열 (설명 및 스탯) */}
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <p className='text-2xl font-bold'>{ChampionData.name}</p>
          <p className='text-lg'>{ChampionData.title}</p>
          <p className='break-keep w-2/3'>{data.blurb}</p>
          <ul className='mt-4'>
            <h3 className='font-semibold'>스탯</h3>
            <li>공격력: {ChampionData.info?.attack}</li>
            <li>방어력: {ChampionData.info?.defense}</li>
            <li>난이도: {ChampionData.info?.difficulty}</li>
            <li className='mb-3'>마법력: {ChampionData.info?.magic}</li>
            <Link className='back-button' href={'/champions'}>
              돌아가기
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ChampionDetailPage;
