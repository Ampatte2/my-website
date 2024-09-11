"use client";

import { Anchor, MailToAnchor } from '@/components/ui/anchors';
import { DatePicker } from '@/components/ui/date-picker';
import { H1, H3 } from '@/components/ui/elements';
import { Column, Row } from '@/components/ui/flex';
import { LinkedinIcon, Mail, Phone, TwitchIcon, YoutubeIcon } from 'lucide-react';

export default function Contact() {
  return <div className="flex flex-col justify-center items-center gap-5 px-16">
    <H1 className='w-fit mx-auto text-xl'>Andrew M Patterson</H1>
    <H3 className='w-fit mx-auto text-xl mb-16'>Contact and Socials</H3>
    <div className="grid grid-cols-2 grid-rows-2 gap-8 w-fit">
      <Anchor icon={<Phone />} href='tel:623-692-6992' title='623-692-6992' className='flex flex-row gap-x-2' />
      <Row classes='gap-x-2'>
        <LinkedinIcon />
        <Anchor title='LinkedIn' href="https://www.linkedin.com/in/andrewmpatterson/" />
      </Row>
      <Row classes='gap-x-2'>
        <YoutubeIcon />
        <Anchor title='Youtube' href="https://www.youtube.com/@TheArmchairDev-w6c" />
      </Row>
      <Row classes='gap-x-2'>
        <TwitchIcon />
        <Anchor title='Twitch' href="https://www.twitch.tv/thearmchairdev" />
      </Row>
    </div>
    <Column classes='gap-y-1'>
      <h3>My Availibility</h3>
      <DatePicker
        onSelectDate={() => ({})}
      />
    </Column>
    <Row>
      <Mail />
      <h4>
        <MailToAnchor subject="Contact Andrew Patterson" body={[]} title='andrew@andrewmpatterson.com' />
      </h4>
    </Row>
  </div>
}