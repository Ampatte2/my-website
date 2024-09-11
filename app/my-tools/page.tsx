import { Anchor, MailToAnchor } from "@/components/ui/anchors";
import { H1, H3, P } from "@/components/ui/elements";

export default function MyTools() {
  return <div className="">
    <H1>My Tools</H1>
    <H3>Vim</H3>
    <P>Effecient text manipulation in a portable editor that will always come in handy, but turns out is just good way to navigate files</P>
    <P>I've used vanilla Vim, VSCode's Vim Extension, and Neovim</P>
    <P>Check out my Neovim config</P>
    <Anchor href="nvim " title="nvim config" />
    <H3>Keyboard</H3>
    <P>I don't use a mouse</P>
    <P></P>
    <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38 - Keyboard Layout" />
  </div>
}