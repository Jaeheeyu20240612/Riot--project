'use client'; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from 'react';
import { ChampionRotation, type RotationIds } from '@/types/ChampionRotation';
import { getChampionData } from '@/utils/serverApi';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

const RotationPage = () => {
  const [rotationChampions, setRotationChampions] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const rotationResponse = await fetch('/api/rotation');

        if (!rotationResponse.ok) {
          console.log('rotationResponse 에러');
          return;
        }

        const rotationData: ChampionRotation = await rotationResponse.json();
        const rotationChampionIds: RotationIds = rotationData.freeChampionIds;

        // 전체 챔피언 정보 불러오기
        const allChampions = await getChampionData();
        const championsArray: Champion[] = Object.values(allChampions);

        const championsDetails: (Champion | undefined)[] = await Promise.all(
          rotationChampionIds.map(async (id) => {
            const championDetail = championsArray.find(
              (all) => all.key === id.toString()
            );
            // console.log(championDetail);

            if (!championDetail) {
              console.log(`ID ${id}에 해당하는 챔피언을 찾을 수 없습니다.`);
            }
            return championDetail;
          })
        );
        // undefined배열일 때 제외하는 필터링
        const filteredChampions = championsDetails.filter(
          // 타입 가드
          (champion): champion is Champion => champion !== undefined
        );

        setRotationChampions(filteredChampions);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='grid place-items-center min-h-screen text-center mt-10'>
        <h2 className='text-xl font-bold mb-4'>
          로테이션 목록을 불러오는 중입니다...
        </h2>
        <p>잠시만 기다려 주세요.</p>
      </div>
    );
  }

  // console.log(rotationChampions);
  return (
    <div className='mb-12 mt-10'>
      <h1 className='text-center text-lg font-bold mb-6'>챔피언 로테이션</h1>

      <ul className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mt-3 p-5'>
        {rotationChampions.map((champion) => (
          <li
            key={champion.id}
            className='transition-transform transform hover:-translate-y-3'
          >
            {/* 쿼리 파라미터로 경로 저장 */}
            <Link href={`/champions/${champion.id}?from=/rotation`}>
              <Image
                width={150}
                height={150}
                alt={champion.name}
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
              />
              <p className='font-bold text-lg'>{champion.name}</p>
              <p>{champion.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
