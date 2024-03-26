"use client";

import { MailToAnchor } from '@/components/ui/anchors';
import { DatePicker } from '@/components/ui/date-picker';
import { Column, Row } from '@/components/ui/flex';
import { LinkedinIcon, Mail, Phone, TwitchIcon, YoutubeIcon } from 'lucide-react';

export default function Contact() {
  return <div className="flex flex-col justify-center gap-y-1">
    <Row>
      <h1>Arizona Aerial Videography</h1>
    </Row>
    <Row classes='gap-x-1'>
      <a href='tel:855-278-5080' className='flex flex-row'><Phone /><h4>855-278-5080</h4></a>
    </Row>
    <Row classes='gap-x-1'>
      <LinkedinIcon /><h4>me@linkedIn</h4>
    </Row>
    <Row classes='gap-x-1'>
      <YoutubeIcon /><h4>Youtube</h4>
    </Row>
    <Row classes='gap-x-1'>
      <TwitchIcon /><h4>Twitch</h4>
    </Row>
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