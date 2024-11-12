import Image from 'next/image';
import { FeatureSection } from './_section/features';
import { OverviewSection } from './_section/overview';
import { ReviewSection } from './_section/review';

export default function Home() {
  return (
    <>
      <div className='container flex flex-col gap-32'>
        <div className='flex flex-col gap-12'>
          <OverviewSection className='pt-8' />
          <div className='max-w-6xl mx-auto'>
            <Image
              className='max-w-full shadow-[0px_0px_80px_8px_#27272a] rounded-large border-1 border-default'
              src='/dashboard-image.png'
              width={1270}
              height={720}
              alt=''
              priority
            />
          </div>
        </div>
        <FeatureSection />
        <ReviewSection />
        <div className='text-center text-default-500'>
          © NoNICK.js 2021-2024 All Rights Reserved.
        </div>
      </div>
    </>
  );
}
