import Image from 'next/image';
import { type Champion } from '../../types/Champion';
import Link from 'next/link';

const ChampionsPage = async () => {
  //SSG
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json',
    {
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);
  // console.log('ch--->', champions);
  return (
    <div className='grid grid-rows-[1fr_auto] grid-cols-4 gap-5 mt-3 p-5'>
      {champions.map((c: Champion) => (
        <ul
          key={c.id}
          className='rounded-lg shadow-lg bg-slate-400 text-white p-3 flex flex-col items-center justify-center transition-transform duration-150 hover:translate-y-[-5px]'
        >
          <Link href={`/champions/${c.id}`} className=''>
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
