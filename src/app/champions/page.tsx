'use client';
import { type Champion } from '../../types/Champion';
import { getChampionData } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ChampionsPage = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChampionData(); // 서버 액션을 호출
        const championsArray: Champion[] = Object.values(data.data); // data.data를 배열로 변환
        setChampions(championsArray);
        console.log('ch--->', championsArray);
      } catch (error) {
        console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='grid grid-rows-[1fr_auto] grid-cols-4 gap-5 mt-3 p-5'>
      {champions.map((c: Champion) => (
        <ul
          key={c.id}
          className='rounded-lg shadow-lg bg-slate-400 text-white p-3 flex flex-col items-center justify-center transition-transform duration-150 hover:translate-y-[-5px]'
        >
          <Link href={`/champions/${c.id}`}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${c.image.full}`}
              className='rounded-lg'
              width={200}
              height={200}
              alt={c.name}
            />
            <li className='text-center my-1'>{c.name}</li>
            <li className='text-center mb-1'>{c.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default ChampionsPage;
