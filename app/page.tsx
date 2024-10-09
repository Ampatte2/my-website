import { Anchor, AnchorIcon, MailToAnchor, TelAnchor } from "@/components/ui/anchors";
import { DownloadResumeButton } from "@/components/ui/downloadResume";
import { H1, H2, H3, H4,  OL, P } from "@/components/ui/elements";
import { Column } from "@/components/ui/flex";
import { Tile } from "@/components/ui/mosaic";
import { SidebarBottom, SidebarMain, SidebarTop } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { differenceInCalendarMonths } from 'date-fns';
import Image, {StaticImageData} from "next/image";
import { PropsWithChildren } from "react";
import battleStationImg from "../../public/images/battle_station.png";
import fiveInchDroneImg from "../../public/images/five_inch_drone.png";
import headshotImg from "../../public/images/headshot.jpg";
import danteImg from "../../public/images/dante_dog.png";
import eagleScoutImg from "../../public/images/eagle_scout_camping.webp";
import openDroneImg from "../../public/images/open_drone.png";
import plantsImg from "../../public/images/plants.png";
import printerImg from "../../public/images/printer_img.png";
import campfireMeImg from "../../public/images/campfire_me.png";
import Printer from "../../public/svgs/3d-printer.svg";
import DesktopComp from "../../public/svgs/desktop-computer.svg";
import Drone from "../../public/svgs/drone.svg";
import EagleScout from "../../public/svgs/eagle-scout.svg";
import Github from "../../public/svgs/github.svg";
import Toolbox from "../../public/svgs/toolbox.svg";
import Linkedin from "../../public/svgs/linkedin.svg";
import Document from "../../public/svgs/document.svg";
import { Skills } from "@/components/ui/skills";
import { GithubActivityCalendar } from "@/components/ui/github-activity-calendar";
import { ClassValue } from "clsx";
import { Mail, Phone  } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

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
    <H3 className="my-8">Timeline</H3>
    {props.data.map((item, index) => (
      <div key={index} className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <H2 className="leading-7">{item.title}</H2>
          <div className="flex gap-2 mt-4">
            <H4>{formatEmployedLength(item.startDate, item.endDate)}</H4>
            <P className="mx-2 font-semibold">-</P>
            <P>{formatDate.format(item.startDate)} to {formatDate.format(item.endDate)}</P>
          </div>
          <P className="mt-2">{item.content}</P>
        </div>
      </div>
    ))}
  </div>
);

const SectionWithSidebar = (props: PropsWithChildren<{orientation: "left" | "right", classes?: ClassValue}>) => <div className={cn("sidebar-section", props.orientation, props.classes)}>{props.children}</div>

const SectionWithImageLeft = (props: PropsWithChildren<{title: string, image: StaticImageData}>) => 
  <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
    <Tile image={props.image} classes="my-auto" />
    <div className="flex flex-col gap-4 mt-8">
      <H3 className="mx-auto mb-4">{props.title}</H3>
      {props.children}
    </div>
  </div>

const SectionWithImageRight = (props: PropsWithChildren<{title: string, image: StaticImageData}>) => 
  <div className="flex flex-col-reverse gap-8 lg:flex-row gap-20">
    <div className="flex flex-col gap-4 mt-8">
      <H3 className="mx-auto mb-4">{props.title}</H3>
      {props.children}
    </div>
    <Tile image={props.image} classes="my-auto" />
  </div>


const data = [
  { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Trading application that was focused on individual investors' },
  { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'Cheaper Eats', content: 'Cross platform application to service restaurants ordering and back office software' },
  { startDate: new Date('2021 05 '), endDate: new Date(), title: 'Bondlink', content: 'Front end and back end for municipalities to manage and disseminate information about Bond Sales and their communities' },
];

export default function TLDR() {

  return <Column classes="flex flex-col gap-20">
    <div className="flex gap-4 mx-auto px-4 lg:px-10">
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
    <H2 className="mx-auto px-20 text-center">There is no such thing as a problem, only a challenge waiting to be solved.</H2>
    <SectionWithSidebar orientation="left">
      <SidebarTop icon={<DesktopComp />} />
      <SidebarMain classes="gap-4">
        <div className="flex flex-col">
          <H2 className="mb-4 mx-auto">Professional History</H2>
          <div className="gap-4 flex flex-col xl:grid xl:grid-cols-5">
            <Timeline data={data} className="col-span-3" />
            <div className="col-span-2 flex flex-col">
              <H3 className="my-8">Summary</H3>
              <div className="flex flex-col gap-4">
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
                  The latest opportunity was a Municipal Bond startup, and within a year I was offered a promotion to keep my talent on the team. When the company began to expand I was promoted to a Team Lead.
                </P>
                <P>
                  I was in charge of managing the "Core" Epic, which encompased a variety of projects and routine maintenance on the site.
                </P>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <P>
            Whether collaborating with cross-functional teams or leading projects independently, I am committed to pushing the boundaries of what's possible and delivering solutions that drive success. My career has been defined by a relentless pursuit of excellence and a passion for innovation.
          </P>
          <P>
            My approach combines a rigorous understanding of core computer science principles with a hands-on, problem-solving mindset. 
          </P>
        </div>
      </SidebarMain>
    </SectionWithSidebar>
    <SectionWithSidebar orientation="left">
      <SidebarBottom icon={<Github />} />
      <SidebarMain>
        <div className="flex flex-col">
          <H2 className="mb-4 mx-auto">My Work</H2>
          <div className="flex mx-auto my-4 github-calendar">
            <GithubActivityCalendar />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <P>
            Having navigated various facets of the software development lifecycle, I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of today's digital environment. 
          </P>
          <P>
            With over eight years of experience in the software engineering landscape, I bring a deep-seated expertise in crafting simple solutions that are maintainable and efficient. 
          </P>
          <P>My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
          </P>
        </div>
      </SidebarMain>
    </SectionWithSidebar>
    <H2 className="mx-auto">Tech Skills</H2>
    <Skills />
    <SectionWithSidebar orientation="right">
      <SidebarMain>
        <H2 className="mb-4 mx-auto">Leadership</H2>
        <SectionWithImageRight
          title="Team Lead"
          image={headshotImg}
        >
          <P>As a junior level developer I quickly learned and built upon the patterns that existed in the codebase. Within a year I was knowledgable enough to teach other juniors and was promoted to team lead.</P>
        </SectionWithImageRight>
        <SectionWithImageLeft
          title="Eagle Scout"
          image={eagleScoutImg}
        >
          <P>Proud recipient of the highest honor in Scouts the Eagle Scout rank, which is indicative of completing Scouts and leading the troop in a project to benefit the community</P>
          <P>My project was to rebuild a historic building at Pioneer Living History Museum in Northern Phoenix. Which required me to organize all the volunteers, get donations for the materials, and work with the Museum to assure historical accuracy</P>
          <P>Always assuming the leadership role when required, and following through on anything I set my sights on.</P>
        </SectionWithImageLeft>
      </SidebarMain>
      <SidebarTop icon={<EagleScout />} />
    </SectionWithSidebar>
    <SectionWithSidebar orientation="right">
      <SidebarMain>
        <SectionWithImageRight
          title="UAS Pilot Part 107 Licensed"
          image={openDroneImg}
        >
          <P>I am commercially licensed to fly drones. They are custom built from my own designs and I solder the electronics, assemble the frames, and flash/configure the firmware.</P>
          <P>I got into FPV drones because they are one of the coolest feelings of freedom out there, unlimited movement at a moments notice with you in the drivers seat</P>
          <P>The moments that you get to fly are amazing, but the real meat and potatoes comes from crashing and building them. The <strong>best</strong> problems come from working on embedded systems. Having the physical component cost of "just trying it out" forces you to become creative and try different solutions</P>
          <P>Drones programmed with Betaflight with freestyle performance, I'm running ImmersionRC with HDO2.1 goggles, ELRS Radiomaster Boxer</P>
        </SectionWithImageRight>
      </SidebarMain>
      <SidebarBottom icon={<Drone />} />
    </SectionWithSidebar>
    <SectionWithSidebar orientation="left">
      <SidebarTop icon={<Toolbox />}  bottomOffset={0}/>
      <SidebarMain>
        <div className="flex pb-10">
          <div className="flex flex-col gap-12">
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
                <H4>Check out my Nvim </H4>
                {/*TODO alignment is off here*/}
                <Anchor href="https://github.com/Ampatte2/dot_files/tree/main/linux-config/nvim" title="Dot Files" className="ml-2" />
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <H3>Operating System</H3>
              <div className="flex flex-col gap-4">
                <div className="inline">
                  <P>I've endured the pain of not realizing that I needed to update the location of vmlinuz in the config, because if you don't your very specific install location of BOOT/boot/bootx86.efi is not going to be respected. Hit that "sudo pacman -Syu", restart, and get stuck at the GRUB bootloader... then dejectedly breaking out the ER tools (Arch Linux ISO) and start seeing where I went wrong.</P>
                  <P>Definitely was a skill issue though, that continues through this day</P>
                </div>
                <P>There is way too much bloatware in modern OS's that I just don't need and it's noise. Arch linux is only what I want to install, and for that privelage I've spent hours configuring the system</P>
                <P>It's been one of my favorite projects, it taught me that at the end of the day regardless of what you're working on in software it is always:</P>
                <P><strong>Data Structures, Directories, and Algorithms</strong></P>
              </div>
            </div>
            <SectionWithImageRight
              title="Why stop at an Editor?"
              image={battleStationImg}
            >
              <P>Another coworker showed me the customizations that QMK firmware could provide, and the beauty that is <strong>Layers</strong>. Since I was already shaking up my developer experience I figured why not take the time to fully customize my keyboard?</P>
              <P>Then it kind of spiraled from there, I started expirementing with different seats, different desks, sitting on the ground, sitting on a ball chair, and all gave me issues when trying to code for long stretches (10+ hours).</P>
              <P>After a couple iterations I thought to myself: What is the most comfortable chair? A zero gravity recliner of course! Then I just kind of put it all together my lounge chair, split keyboard, and a PVC frame for the monitor to keep it at a good distance above my head.</P>
              <P>Next iteration will remove the PVC with a better material, and a better way to get in and out. Right now I kind of slink out to the side.</P>
              <span className="flex text-xl">
                <H4>Check out my Keyboard Layout</H4>
                <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38" className="ml-2" />
              </span>
            </SectionWithImageRight>
          </div>
        </div>
      </SidebarMain>
    </SectionWithSidebar >
    <SectionWithSidebar orientation="left" >
      <SidebarBottom icon={<Printer />} bottomOffset={0} />
      <SidebarMain>
        <H2 className="mx-auto">Hobbies</H2>
        <SectionWithImageLeft
          title="FPV Drone Freestyle"
          image={fiveInchDroneImg}
        >
          <P>This has been one of my favorite hobbies as it combines the freedom of 360 degree movement, being right there in the action, and a myriad of different tech working in concert.</P>
          <P>I have 3 different drones, the one in the associated photo is a 5 inch quad with 60 amp ESCs and massive 2406 stator / 2450 KV motors running 6s. It's a monster that is a lord of the sky. Then I have a nimble 4 inch quad 4-6s and a little tiny 65mm racing quad that I toot around inside with.</P>
        </SectionWithImageLeft>
        <SectionWithImageRight
          title="Dante Dog"
          image={danteImg}
        >
          <P>This is my boy we hang out and do just about everything together. He's a four year old Border Collie Corgi mixed breed, he loves running and eating all the food he can find or coerce out of me with those puppy dog eyes</P>
        </SectionWithImageRight>
        <SectionWithImageLeft
          title="Gardening"
          image={plantsImg}
        >
          <P>I have a small indoor garden and have been expirementing with all sorts of plants.</P>
          <P>Sitting in front of a computer with infinite challenges that can all be solved right this second, it's nice to sit back and just do one thing at a time. Plants are fairly simple in that they take a while to change, and you should not change too much.</P>
        </SectionWithImageLeft>

        <SectionWithImageRight
          title="3D Printing"
          image={printerImg}
        >
          <P>Fun hobby that I occassionally use to replace bespoke pieces of plastic that are non-functional.</P>
          <P>I can build and design parts from scratch using programs like Fusion 360 or Blender. These programs have taught me about the different ways that you can go about creating 3D objects and manipulating them.</P>
        </SectionWithImageRight>
        <SectionWithImageLeft
          title="Outdoors"
          image={campfireMeImg}
        >
          <P>The outdoors is where it is at, it's where we are all from. I am an avid backpacker and hiker.</P>
          <P>It's been a while since I hiked all the major mountain ranges in Phoenix Flagstaff, but I know I'll get that kick to go exploring again.</P>
          <P>Definitely more the one that likes to blaze a trail rather than follow the known path.</P>
        </SectionWithImageLeft>
      </SidebarMain>
    </SectionWithSidebar>
    <div className="mx-auto flex flex-col justify-center gap-12 my-20">
      <div className="flex mx-auto">
        <H1>Contact Me</H1>
      </div>
      <div className="flex mx-auto">
        <Image
          src="/images/snow_me.png"
          alt="archery"
          width={200}
          height={200}
          className="mr-8 mb-auto"
          style={{ borderRadius: "24px", border: "1px solid black", filter: "drop-shadow(1px 2px 1px #D3D3D3)", objectFit: "cover" }}
        />
        <div className="flex flex-col">
          <H3>When you:</H3>
          <OL className="text-2xl ml">
            <li>Have a project that needs to be built</li>
            <li>A wild idea that needs a duck</li>
            <li>Want to fly a drone</li>
            <li>Discuss the best editor and why it is Vim</li>
            <li>Need to gripe about Typescript tooling</li>
          </OL>
        </div>
      </div>
      <div className="flex justify-around">
        <Tooltip title="Github">
          <AnchorIcon
            href="https://github.com/Ampatte2"
            target="_blank"
            icon={<Github />}
          />
        </Tooltip>
        <Tooltip title="Linkedin">
          <AnchorIcon
            href="https://www.linkedin.com/in/andrewmpatterson/"
            target="_blank"
            icon={<Linkedin />}
          />
        </Tooltip>
        <Tooltip title="Resume">
          <AnchorIcon
            href="/Andrew_Patterson_Resume.pdf"
            target="_blank"
            icon={<Document />}
          />
        </Tooltip>
      </div>
      <div className="flex gap-4">
        <MailToAnchor 
          title="Send me an Email"
          subject="Inquiring About: "
          body={["Howdy Andrew,"]} 
          size="lg"
          variant="default"
          className="text-3xl rounded-full font-semibold tracking-tight p-12 mx-auto"
          icon={<Mail className="h-10 w-10 mr-2" />}
        />
        <TelAnchor
          className="text-3xl rounded-full font-semibold tracking-tight p-12 mx-auto"
          title="Send me a Call/Text"
          icon={<Phone className="h-10 w-10 mr-2" />}
        />
      </div>
    </div>
  </Column>
}

