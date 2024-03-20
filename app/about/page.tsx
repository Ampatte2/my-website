import { Button } from '@/components/ui/button'
import { navigateBack } from '../../../navigation/nav-utl'
import { MainNav } from '@/components/ui/navigation-menu'

export default function About() {
  return <div>
    <h1>About</h1>
    <h2>mailto demo</h2>
    <p><a href="mailto:" target="_blank">Contact Me</a></p>
  </div>
}