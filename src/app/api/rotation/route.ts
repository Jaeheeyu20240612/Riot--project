import { getChampionRotation } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

// 챔피언 로테이션 정보
// 클라이언트: handler에 GET요청 -> handler: 요청 수신 후 서버 액션 호출 -> server action: 실제 외부 api 호출
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const rotationData = await getChampionRotation();
    return NextResponse.json(rotationData);
  } catch (error) {
    console.error('로테이션 데이터 가져오기 에러:', error);
    return NextResponse.json(
      { error: '로테이션 데이터를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
