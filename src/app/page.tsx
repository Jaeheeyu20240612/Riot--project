import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // throw new Error();
  return (
    <div className='flex flex-col justify-center items-center mb-12'>
      <h1 className='text-3xl mt-12 font-bold'>리그 오브 레전드 정보 앱</h1>
      <p className='my-8'>
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <section className='mb-5'>
        <Link href={'/champions'}>
          <Image
            src={
              'https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fleague-of-legends-3ggpjbfly8o9uo8a.jpg&w=1080&q=75'
            }
            alt='챔피언 목록 보기'
            width={500}
            height={500}
          />
          <p className='text-center mt-3 text-lg'>챔피언 목록 보기</p>
        </Link>
      </section>
      <section className='mb-5'>
        <Link href={'/rotation'}>
          <Image
            src={
              'https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhigh%2F3d-league-of-legends-8yx3ab1xb69nn227.webp&w=1080&q=75'
            }
            alt='금주 로테이션 확인'
            width={500}
            height={500}
          />
          <p className='text-center mt-3 text-lg'>금주 로테이션 확인</p>
        </Link>
      </section>

      <section className='mb-5'>
        <Link href={'/items'}>
          <Image
            src={
              'https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhigh%2Farcane-league-of-legends-dark-alley-z81hrap8o7mezc0g.webp&w=1080&q=75'
            }
            alt='아이템 목록 보기'
            width={500}
            height={500}
          />
          <p className='text-center mt-3 text-lg'> 아이템 목록 보기</p>
        </Link>
      </section>
    </div>
  );
}
