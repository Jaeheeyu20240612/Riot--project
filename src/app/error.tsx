'use client';
// 커스텀 에러 컴포넌트는 클라이언트컴포넌트로 만들어야함
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='grid place-items-center min-h-screen'>
      <h2>오류 !</h2>
      <h2>{error.message}</h2>
      <button className='back-button' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
