import { type ChampionRotation } from '@/types/ChampionRotation';
import { NextResponse } from 'next/server';

// 챔피언 로테이션 정보
export async function GET(request: Request) {
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
  const data: ChampionRotation = await res.json();
  // console.log(data);
  return NextResponse.json(data);
}
