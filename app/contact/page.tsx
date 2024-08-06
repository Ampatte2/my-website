"use client";

import { MailToAnchor } from '@/components/ui/anchors';
import { DatePicker } from '@/components/ui/date-picker';
import { Column, Row } from '@/components/ui/flex';
import { LinkedinIcon, Mail, Phone, TwitchIcon, YoutubeIcon } from 'lucide-react';

export default function Contact() {
  return <div className="flex flex-col justify-center items-center gap-5 px-16">
    <h1 className='w-fit mx-auto text-xl mb-16'>Arizona Aerial Videography</h1>
    <div className="grid grid-cols-2 grid-rows-2 gap-8 w-fit">
      <a href='tel:855-278-5080' className='flex flex-row gap-x-2'><Phone /><h4>855-278-5080</h4></a>
      <Row classes='gap-x-2'>
        <LinkedinIcon /><h4>me@linkedIn</h4>
      </Row>
      <Row classes='gap-x-2'>
        <YoutubeIcon /><h4>Youtube</h4>
      </Row>
      <Row classes='gap-x-2'>
        <TwitchIcon /><h4>Twitch</h4>
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
        <MailToAnchor subject="Arizona Aerial Videography" body={["When:", "Where:", "Type: Action Cinematography Videography", "Description:"]}>
          dog@dog.com
        </MailToAnchor>
      </h4>
    </Row>
  </div>
}