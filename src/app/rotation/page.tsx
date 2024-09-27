'use client'; // 클라이언트 컴포넌트로 설정

//CSR
import { useEffect, useState } from 'react';
import { ChampionRotation, type RotationIds } from '@/types/ChampionRotation';
import { getChampionData, getDetailChampions } from '@/utils/serverApi';
import { Champion, ChampionData } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

const RotationPage = () => {
  const [rotationChampions, setRotationChampions] = useState<Champion[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // 로테이션 데이터
      const rotationResponse = await fetch('/api/rotation');
      if (!rotationResponse.ok) {
        console.log('rotationResponse 에러');
        return;
      }
      const rotationData: ChampionRotation = await rotationResponse.json();
      const rotationChampionIds: RotationIds = rotationData.freeChampionIds;

      const allChampions: ChampionData = await getChampionData();
      // console.log('전체 챔피언 데이터:', allChampions);
      const championsArray = Object.values(allChampions);
      // console.log(championsArray);

      // 챔피언 세부 정보 가져오기
      const championsDetails = await Promise.all(
        rotationChampionIds.map(async (id) => {
          const championDetail = championsArray.find(
            (e) => e.key === id.toString()
          );
          // rotation 아이디와 맞는 챔피언 정보가 있을 때 상세 정보
          if (!championDetail) return;
          const data = await getDetailChampions(championDetail.id);
          console.log(data);
          if (!data) return;
          const detailData = await Object.values(data.data);
          return detailData;
        })
      );
      setRotationChampions(championsDetails);
      console.log('set-------------->', rotationChampions);

      console.log('로테이션 챔피언 세부 정보:', championsDetails);
    };

    fetchData();
  }, []);

  // rotationChampions가 업데이트될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('set-------------->', rotationChampions);
  }, [rotationChampions]);

  return (
    <div>
      <h1>챔피언 로테이션</h1>
      <ul className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mt-3 p-5'>
        {rotationChampions?.map((champion) => (
          <Link href={`/champions/${champion[0].id}`}>
            <li className='' key={champion[0].id}>
              <Image
                width={150}
                height={150}
                alt={champion[0].name}
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion[0].image.full}`}
              />
              <p className='font-bold text-lg'>{champion[0].name}</p>
              <p>{champion[0].title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
