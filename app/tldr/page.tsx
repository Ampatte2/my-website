import { Anchor } from "@/components/ui/anchors";
import { DownloadResumeButton } from "@/components/ui/downloadResume";
import { H1, H2, H3, H4, P } from "@/components/ui/elements";
import { Column } from "@/components/ui/flex";
import { Tile } from "@/components/ui/mosaic";
import { SidebarBottom, SidebarMain, SidebarTop } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { differenceInCalendarMonths } from 'date-fns';
import Image from "next/image";
import { PropsWithChildren } from "react";
import battleStationImg from "../../public/images/battle_station.png";
import computerTeamImg from "../../public/images/computer_team.jpg";
import eagleScoutImg from "../../public/images/eagle_scout_camping.webp";
import openDroneImg from "../../public/images/open_drone.png";
import Printer from "../../public/svgs/3d-printer.svg";
import DesktopComp from "../../public/svgs/desktop-computer.svg";
import Drone from "../../public/svgs/drone.svg";
import EagleScout from "../../public/svgs/eagle-scout.svg";
import Github from "../../public/svgs/github.svg";
import Toolbox from "../../public/svgs/toolbox.svg";
import { Skills } from "@/components/ui/skills";
import { GithubActivityCalendar } from "@/components/ui/github-activity-calendar";
import { ClassValue } from "clsx";

const formatDate = Intl.DateTimeFormat([], { dateStyle: "medium" });

interface TimelineData {
  startDate: Date;
  endDate: Date;
  content: string;
  title: string;
}

interface TimelineProps {
  data: TimelineData[];
  className?: ClassValue;
}

const formatEmployedLength = (start: Date, end: Date) => {
  const monthsDifference = differenceInCalendarMonths(end, start);
  const months = monthsDifference % 12;
  const years = Math.floor(monthsDifference / 12);
  const monthCopy = months > 0 ? `${months} months` : "";
  const yearCopy = years > 0 ? `${years} years` : "";
  return `${yearCopy} ${monthCopy}`
}

const Timeline = (props: TimelineProps) => (
  <div className={cn("flex flex-col timeline", props.className)}>
    <H3 className="mb-4">Timeline</H3>
    {props.data.map((item, index) => (
      <div key={index} className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <H2 className="leading-7">{item.title}</H2>
          <H4 className="mt-2">{formatDate.format(item.startDate)} to {formatDate.format(item.endDate)}</H4>
          <H4>{formatEmployedLength(item.startDate, item.endDate)}</H4>
          <P className="mt-2">{item.content}</P>
        </div>
      </div>
    ))}
  </div>
);

const SectionWithSidebar = (props: PropsWithChildren<{orientation: "left" | "right", classes?: ClassValue}>) => <div className={cn("sidebar-section", props.orientation, props.classes)}>{props.children}</div>

const data = [
  { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Trading application that was focused on individual investors' },
  { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'Cheaper Eats', content: 'Cross platform application to service restaurants ordering and back office software' },
  { startDate: new Date('2021 05 '), endDate: new Date(), title: 'Bondlink', content: 'Front end and back end for municipalities to manage and disseminate information about Bond Sales and their communities' },
];

export default function TLDR() {
  return <Column classes="flex flex-col gap-20">
    <div className="flex gap-4 mx-auto px-10">
      <Image
        src="/images/archery.png"
        alt="archery"
        width={100}
        height={100}
        style={{ borderRadius: "24px", border: "1px solid black", filter: "drop-shadow(1px 2px 1px #D3D3D3)" }}
      />
      <div className="flex flex-col">
        <H1 className="ml-2 my-auto">Andrew M. Patterson</H1>
        <H2 className="col-start-2">Software Engineer, UAS Pilot, Tinkerer</H2>
      </div>
    </div>
    <H2 className="mx-auto">There is no such thing as a problem, only a challenge waiting to be solved.</H2>
    <div>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<DesktopComp />} />
        <SidebarMain classes="gap-4">
          <div className="flex flex-col">
            <H2 className="mb-4 mx-auto">Professional History</H2>
            <div className="md:grid md:grid-cols-5 gap-4 flex flex-col">
              <Timeline data={data} className="col-span-3" />
              <div className="col-span-2 flex flex-col gap-4">
                <H3>Summary</H3>
                <P>
                  After getting straight A's and pre-med requirements to become a Psychiatrist I realized that wasn't for me.
                  I took a few years and taught myself how to program, and fell in love with the challenge.
                </P>
                <P>
                  In order to get my foot in the door I took a junior position at a startup that was developing a trading application based on Solidity with Svelte.
                  Quickly I rose to be one of the best performing juniors.
                </P>
                <P>
                  My next opportunity was a Food Service startup where one of my first tasks was to convert the codebase from Javascript to Typescript. By the end of my employment I had arisen to be teacher/mentor role.
                </P>
                <P>
                  The latest opportunity was a startup that serviced the municipal bond sector, and within a year I was offered a promotion to keep my talent on the team. When the company began to expand I was promoted to a Team Lead.
                  I was in charge of managing the "Core" Epic, which encompased a variety of projects and routine maintenance on the site.
                  Before long I was spear-heading month long features managing a team of five.
                </P>
              </div>
            </div>
          </div>
          <P className="mt-4">
            Whether collaborating with cross-functional teams or leading projects independently, I am committed to pushing the boundaries of what's possible and delivering solutions that drive success. My career has been defined by a relentless pursuit of excellence and a passion for innovation, and I am eager to bring this dedication to new and exciting opportunities.
          </P>
          <P>
            My approach combines a rigorous understanding of core computer science principles with a hands-on, problem-solving mindset. This blend of theoretical knowledge and practical application empowers me to not only address complex technical issues but also to anticipate and adapt to emerging trends and technologies.
          </P>
        </SidebarMain>
      </SectionWithSidebar>
      <SectionWithSidebar orientation="left">
        <SidebarBottom icon={<Github />} />
        <SidebarMain>
          <div className="flex flex-col">
            <H2 className="mb-4 mx-auto">Github Stats</H2>
            <div className="flex mx-auto my-4 github-calendar">
              <GithubActivityCalendar />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <P>
              Having navigated various facets of the software development lifecycle, I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of today's digital environment. My proficiency spans a spectrum of web technologies, and I am adept at leveraging these tools to build robust, high-performance applications that stand out in their functionality and user experience.
            </P>
            <P>
              With over eight years of experience in the software engineering landscape, I bring a deep-seated expertise in crafting sophisticated solutions that drive innovation and efficiency. My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
            </P>
          </div>
        </SidebarMain>
      </SectionWithSidebar>
    </div>
    <H2 className="mx-auto">Technologies Ive Used</H2>
    <Skills />
    <div>
      <SectionWithSidebar orientation="right">
        <SidebarMain>
          <H2 className="mb-4 mx-auto">Leadership</H2>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <H3 className="mx-auto">Team Lead</H3>
              <P>As a junior level developer I quickly learned and built upon the patterns that existed in the codebase. Within a year I was knowledgable enough to teach other juniors and was promoted to team lead.</P>
              <P>I love to learn and the fast paced creative nature of software development has become a passion. I've even augmented</P>
            </div>
            <Tile image={computerTeamImg} classes="my-auto" />
          </div>
          <div className="flex gap-20">
            <Tile image={eagleScoutImg} classes="my-auto"/>
            <div className="flex flex-col gap-4">
              <H3 className="mx-auto">Eagle Scout</H3>
              <P>Always assuming the leadership role when required, and following through on anything I set my sights on.</P>
              <P>I am an Eagle Scout and earned that tile by leading my Troop through rebuilding a historic building at Pioneer Living History Muesem in Northern Phoenix.</P>
            </div>
          </div>
        </SidebarMain>
        <SidebarTop icon={<EagleScout />} />
      </SectionWithSidebar>
      <SectionWithSidebar orientation="right">
        <SidebarMain>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <H2 className="mx-auto">UAS Pilot Part 107 Licensed</H2>
              <P>I am commercially licensed to fly drones. They are custom built from my own designs and I solder the electronics, assemble the frames, and flash/configure the firmware.</P>
              <P>I got into FPV drones because they are one of the coolest feelings of freedom out there, unlimited movement at a moments notice with you in the drivers seat</P>
              <P>The moments that you get to fly are amazing, but the real meat and potatoes comes from crashing and building them. The <strong>best</strong> problems come from working on embedded systems. Having the physical component cost of "just trying it out" forces you to become creative and try different solutions</P>
              <P>Drones programmed with Betaflight with freestyle performance, I'm running ImmersionRC with HDO2.1 goggles, ELRS Radiomaster Boxer</P>
            </div>
            <Tile image={openDroneImg} classes="my-auto"/>
          </div>
        </SidebarMain>
        <SidebarBottom icon={<Drone />} />
      </SectionWithSidebar>
    </div>
    <div>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<Toolbox />}  bottomOffset={0}/>
        <SidebarMain>
          <div className="flex pb-10">
            <div className="flex flex-col gap-8">
              <H2 className="mx-auto">Tinkering with my Tools</H2>
              <div className="flex justify-around">
                  <Image src="/svgs/Vimlogo.svg" alt="VimLogo" width={100} height={100} />
                  <Image src="/svgs/arch-linux.svg" alt="Operating System" width={100} height={100}/>
                  <Image src="/images/moonlander_logo.webp" alt="Moonlander" width={100} height={100} />
              </div>
              <div className="flex flex-col gap-4">
                  <H3>My Editor</H3>
                  <P>As a junior I would pair with this one individual who used Emacs, and it astounded me the ease and level of control they had over their editor. Navigating files, moving around inside files, text manipulation, and infinite customization. I realized that they were able to iterate significantly faster than I was using vanilla VSCode.</P>
                  <P>I spent the next 6 months learning a new keyboard and Vim (Neovim flavor), and it was well worth every second. The choice of Vim has been great, my editor comes standard on every machine, and now I can be the one to impress the juniors.</P>
                <span className="flex text-xl">
                  <H4>Check out my</H4>
                  <Anchor href="https://github.com/Ampatte2/dot_files/tree/main/linux-config/nvim" title="Nvim Dot Files" className="ml-2" />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                  <H3>Operating System</H3>
                <div className="flex flex-col gap-4">
                  <div className="inline">
                    <P>I've also endured the pain of not realizing that I needed to update the location of vmlinuz in the config, because if you don't your very specific install location of BOOT/boot/bootx86.efi is not going to be respected. Hit that "sudo pacman -Syu", restart, and get stuck at the GRUB bootloader... then dejectedly breaking out the ER tools (Arch Linux ISO) and start seeing where I went wrong.</P>
                    <P>Definitely was a skill issue though, that continues through this day</P>
                  </div>
                  <P>There is way too much bloatware in modern OS's that I just don't need and it's noise. Arch linux is only what I want to install, and for that privelage I've spent hours configuring the system</P>
                  <P>It's been one of my favorite projects, it taught me that at the end of the day regardless of what you're working on in software it is all just: <strong>Data Structures, Algorithms, and Directories</strong></P>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-4">
                  <H3>Why stop at an Editor?</H3>
                  <P>Another coworker showed me the customizations that QMK firmware could provide, and the beauty that is "Layers". Since I was already shaking up my developer experience I figured why not make it exactly what I want.</P>
                  <P>Then it kind of spiraled from there, I started expirementing with different seats, different desks, sitting on the ground, sitting on a ball chair, and all gave me issues with long (10+ hours) of coding.</P>
                  <P>The current iteration that's been relatively stable is a zero gravity recliner, split keyboard, and a PVC frame for the monitor to keep it at a good distance above my head.</P>
                  <P>Next iteration will remove the PVC with a better material, and a better way to get in and out.</P>
                  <span className="flex text-xl">
                    <H4>Check out my Keyboard Layout</H4>
                    <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38" className="ml-2" />
                  </span>
                </div>
                <Tile image={battleStationImg} />
              </div>
            </div>
          </div>
        </SidebarMain>
      </SectionWithSidebar >
      <SectionWithSidebar orientation="left" >
        <SidebarBottom icon={<Printer />} bottomOffset={0} />
        <SidebarMain>
          <H2 className="mx-auto">Hobbies</H2>
        </SidebarMain>
      </SectionWithSidebar>
    </div>
    <div className="mx-auto flex flex-col justify-center gap-4">
      <H1 className="mx-auto">Contact Me</H1>
      <H3>Please reach out if you have things for me to build, wild ideas, to talk 40K, or just to chat</H3>
      <DownloadResumeButton />
    </div>
  </Column>
}

