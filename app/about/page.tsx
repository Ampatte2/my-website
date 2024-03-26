import { MailToAnchor } from '@/components/ui/anchors'

export default function About() {
  return <div>
    <h1>About</h1>
    <MailToAnchor subject="Arizona Aerial Videography" body={["When:", "Where:", "Type: Action Cinematography Videography", "Description:"]}>Contact Me</MailToAnchor>
  </div >
}