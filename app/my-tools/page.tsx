import { Anchor, MailToAnchor } from "@/components/ui/anchors";
import Image from "next/image";
import { H1, H3, P } from "@/components/ui/elements";

export default function MyTools() {
  return <div className="">
    <H1>My Tools</H1>
    <H3>Editor</H3>
    <Image src="/svgs/VimLogo.svg" alt="VimLogo" width={100} height={100} />
    <P>Effecient text manipulation in a portable editor that will always come in handy, but turns out is just good way to navigate files</P>
    <P>I've used vanilla Vim, VSCode's Vim Extension, and Neovim</P>
    <P>Check out my Neovim config</P>
    <Anchor href="nvim " title="nvim config" />
    <H3>Keyboard</H3>
    <Image src="/images/moonlander_logo.webp" alt="Moonlander" width={100} height={100} />
    <P>I don't use a mouse</P>
    <H3>Operating System</H3>
    <Image src="/svgs/arch-linux.svg" alt="Operating System" width={100} height={100} />
    <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38 - Keyboard Layout" />
  </div>
}