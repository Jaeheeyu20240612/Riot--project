import { Champion, Champions } from '../../types/Champion';
import { getChampionData } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

// 서버 컴포넌트
const ChampionsPage = async () => {
  const data: Champions = await getChampionData();
  const championArray: Champion[] = Object.values(data); // data.data를 배열로 변환

  return (
    <div className='mb-12'>
      <h1>챔피언 목록</h1>
      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3 p-5'>
        {championArray.map((c: Champion) => (
          <ul
            key={c.id}
            className='rounded-lg shadow-lg bg-slate-400 text-white p-4 flex flex-col items-center justify-center transition-transform duration-150 hover:translate-y-[-5px]'
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
              <li className='text-center mb-1 '>{c.title}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
