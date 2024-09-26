'use client'; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from 'react';
import { type ChampionRotation } from '@/types/ChampionRotation';

const RotationPage = () => {
  const [champions, setChampions] = useState<ChampionRotation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampionRotations = async () => {
      try {
        const response = await fetch('/api/rotation'); // API 라우트를 호출
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ChampionRotation = await response.json();
        setChampions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChampionRotations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>챔피언 로테이션</h1>
      <ul>
        {champions?.freeChampionIds.map((id) => (
          <li key={id}>Champion ID: {id}</li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
