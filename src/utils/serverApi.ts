'use server';

import { Champions, type Champion } from '@/types/Champion';

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
    const data: Champions = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// 로테이션 챔피언 id 목록을 가져오는 함수
// export async function GET() {
//   const res = await fetch(
//     'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
//     {
//       headers: {
//         'X-Riot-Token': process.env.RIOT_API_KEY,
//       },
//     }
//   );
//   const data: ChampionRotation = await res.json();
//   return NextResponse.json(data);
// }

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
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
