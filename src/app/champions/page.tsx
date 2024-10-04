import { Champion, Champions } from '../../types/Champion';
import { getChampionData } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'LOL 챔피언 목록 페이지',
};

// 서버 컴포넌트
const ChampionsPage = async () => {
  const data: Champions = await getChampionData();
  const championArray: Champion[] = Object.values(data); // data.data를 배열로 변환

  return (
    <div className='mb-12 mt-10'>
      <h1 className='text-center text-lg font-bold'>챔피언 목록</h1>
      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3 p-5'>
        {championArray.map((c: Champion) => (
          <ul
            key={c.id}
            className='rounded-lg flex flex-col items-center border border-gray-300 shadow-lg mt-3 w-52 h-60 p-5 transition-transform transform hover:-translate-y-3'
          >
            {/* 쿼리 파라미터로 경로 전달 */}
            <Link href={`/champions/${c.id}?from=/champions`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${c.image.full}`}
                className='rounded-lg m-auto'
                width={115}
                height={115}
                alt={c.name}
              />
              <li className='text-center my-1 font-bold'>{c.name}</li>
              <li className='text-center mb-1 '>{c.title}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
