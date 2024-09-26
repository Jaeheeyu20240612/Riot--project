import Image from 'next/image';
import { type Champion } from '../../types/Champion';

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
  console.log('ch--->', champions);
  return (
    <div className='grid grid-cols-4 gap-5'>
      {champions.map((c: Champion) => (
        <ul key={c.id} className='bg-gray-600 text-white'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${c.image.full}`}
            width={200}
            height={200}
            alt={c.name}
          />
          <li>{c.name}</li>
          <li>{c.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default ChampionsPage;
