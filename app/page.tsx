import { ButtonLink } from '@/components/ui/button';
import { Row } from '@/components/ui/flex';
import { VideoPlayer, YoutubePlayer } from '@/components/ui/video-player';
import { useRouter } from 'next/router';

export default function Home() {

  return <>
    <Row>
      <h1 className='m-auto text-xl'>Andrew Patterson</h1>
    </Row>
    <Row classes='justify-center'>
      <YoutubePlayer
        width={560}
        height={315}
        title="YouTube video player"
        src="https://www.youtube.com/embed/iYkqQPbNtTg?si=b1Cqu740a5-0wlCy"
      />
    </Row>
    <div className='justify-around mt-10 flex flex-col md:flex-row'>
      <ButtonLink href="/tldr">
        <h5>Executive Overview</h5>
      </ButtonLink>
      <ButtonLink href="/about">
        <h5>Native Phoenician</h5>
      </ButtonLink>
      <ButtonLink href="/gallery/action">
        <h5>Software Engineer</h5>
      </ButtonLink>
      <ButtonLink href="/gallery/cinematic">
        <h5>Leader</h5>
      </ButtonLink>
      <ButtonLink href="/gallery/cinematic">
        <h5>Licensed UAS Pilot</h5>
      </ButtonLink>
    </div>
    <Row classes='justify-around mt-auto'>
      <ButtonLink href="/about">About Me</ButtonLink>
    </Row>
  </>
}