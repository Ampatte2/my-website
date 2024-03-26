import { ButtonLink } from '@/components/ui/button';
import { Row } from '@/components/ui/flex';
import { VideoPlayer, YoutubePlayer } from '@/components/ui/video-player';
import { useRouter } from 'next/router';

export default function Home() {

  return <div className="">
    <Row>
      <h1 className='m-auto text-xl'>Arizona Aerial Videography</h1>
    </Row>
    <Row classes='justify-center'>
      <YoutubePlayer
        width={560}
        height={315}
        title="YouTube video player"
        src="https://www.youtube.com/embed/iYkqQPbNtTg?si=b1Cqu740a5-0wlCy"
      />
    </Row>
    <Row classes='justify-around mt-10'>
      <ButtonLink href="/about">
        <h5>Native Phoenician</h5>
      </ButtonLink>
      <ButtonLink href="/gallery/action">
        <h5>Action Photography</h5>
      </ButtonLink>
      <ButtonLink href="/gallery/cinematic">
        <h5>Part 107 Licensed</h5>
      </ButtonLink>
    </Row>
    <Row classes='justify-around'>
      <ButtonLink href="/about">About Us</ButtonLink>
    </Row>
  </div>
}