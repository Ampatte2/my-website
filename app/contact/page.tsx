import { ButtonLink } from '@/components/ui/button';
import { PropsWithChildren } from 'react';

const classProp = (classes?: string) => classes || "";

const Row = (props: PropsWithChildren<{ classes?: string }>) =>
  <div className={`flex flex-row w-full mb-4 ${classProp(props.classes)}`}>
    {props.children}
  </div>

const Column = (props: PropsWithChildren<{ classes?: string }>) =>
  <div className={`flex flex-col ${classProp(props.classes)}`}>
    {props.children}
  </div>


export default function home() {
  return <div className="pt-10 pb-20 px-10">
    <Row>
      <h1 className='m-auto'>Greater Phoenix Drone Photography</h1>
    </Row>
    <Row classes='justify-around'>
      <ButtonLink href="/">
        <h5>Native Phoenician</h5>
      </ButtonLink>
      <ButtonLink href="/">
        <h5>Real Estate</h5>
      </ButtonLink>
      <ButtonLink href="/">
        <h5>Action Photography</h5>
      </ButtonLink>
      <ButtonLink href="/">
        <h5>Part 107 Licensed</h5>
      </ButtonLink>
    </Row>
    <Row classes='justify-around'>
      <ButtonLink href="/About">Learn More About Us</ButtonLink>
    </Row>
  </div>
}