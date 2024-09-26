// 서버 컴포넌트에서 사용할 데이터 페칭 함수

export async function getStaticProps() {
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json',
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data = res.json();
  return {
    props: { data },
  };
}
// 챔피언 목록 가져오는 함수
export async function getChampionData() {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json'
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// 챔피언 상세 정보 가져오는 함수

// 로테이션 챔피언 목록을 가져오는 함수
export async function getRotaionChampions() {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/{id}.json'
    );
    const data = res.json();
  } catch (error) {
    console.error(error);
  }
}
