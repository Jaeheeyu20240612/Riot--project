// 서버 액션

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

export async function getChampionData() {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json',
      {
        cache: 'force-cache',
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}
