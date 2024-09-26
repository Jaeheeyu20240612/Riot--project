import { type Champion } from '../../types/Champion';
import { getChampionData } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

// 서버 컴포넌트
const ChampionsPage = async () => {
  const data = await getChampionData();
  const championArray: Champion[] = Object.values(data.data); // data.data를 배열로 변환

  return (
    <div className='grid grid-rows-[1fr_auto] grid-cols-4 gap-5 mt-3 p-5'>
      {championArray.map((c: Champion) => (
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
