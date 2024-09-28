'use server';

import { Champion } from '@/types/Champion';

// 최신 버전
// export async function getStaticProps() {
//   const res = await fetch(
//     'https://ddragon.leagueoflegends.com/api/versions.json',
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   const data = res.json();
//   return {
//     props: { data },
//   };
// }

export async function getStaticProps() {
  const champions = await getChampionData();

  return {
    props: {
      allChampions: champions,
    },
  };
}

// 전체 챔피언 목록 가져오는 함수 ISR
export async function getChampionData() {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json',
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// 챔피언 상세 정보 가져오는 함수
export async function getDetailChampions(
  id: Champion['id']
): Promise<Champion | undefined> {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`,
      {
        cache: 'force-cache',
      }
    );
    const data: Champion = await res.json();
    if (data.data === undefined) return;
    return data.data[id];
  } catch (error) {
    console.log(error);
  }
}

// 로테이션 챔피언 id 목록을 가져오는 함수(클라이언트컴포넌트 -> api 핸들러-> server action호출 )
export const getChampionRotation = async () => {
  const apiToken = process.env.RIOT_API_KEY;
  const res = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': apiToken || '',
      },
    }
  );

  if (!res.ok) {
    throw new Error('로테이션 데이터를 가져오는 데 실패했습니다.');
  }

  const data = await res.json();
  return data;
};

// 아이템 목록 가져오는 함수 SSG
export async function getItemLists() {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json`,
      {
        cache: 'force-cache',
      }
    );
    const data = await res.json();
    console.log(data.data.id);
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBackground(id: string) {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
  return {
    imageUrl,
  };
}
