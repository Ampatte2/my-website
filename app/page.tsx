import { Anchor, AnchorIcon, MailToAnchor, TelAnchor } from "@/components/ui/anchors";
import { H1, H2, H3, H4, OL, P } from "@/components/ui/elements";
import { Column } from "@/components/ui/flex";
import { Tile } from "@/components/ui/mosaic";
import { SidebarBottom, SidebarMain, SidebarTop } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { differenceInCalendarMonths } from 'date-fns';
import Image, {StaticImageData} from "next/image";
import { PropsWithChildren } from "react";
import battleStationImg from "../public/images/battle_station.png";
import fiveInchDroneImg from "../public/images/five_inch_drone.png";
import headshotImg from "../public/images/headshot.jpg";
import danteImg from "../public/images/dante_dog.png";
import eagleScoutImg from "../public/images/eagle_scout_camping.webp";
import openDroneImg from "../public/images/open_drone.png";
import plantsImg from "../public/images/plants.png";
import printerImg from "../public/images/printer_img.png";
import campfireMeImg from "../public/images/campfire_me.png";
import Printer from "../public/svgs/3d-printer.svg";
import DesktopComp from "../public/svgs/desktop-computer.svg";
import Drone from "../public/svgs/drone.svg";
import EagleScout from "../public/svgs/eagle-scout.svg";
import Github from "../public/svgs/github.svg";
import Toolbox from "../public/svgs/toolbox.svg";
import Linkedin from "../public/svgs/linkedin.svg";
import Document from "../public/svgs/document.svg";
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

const imgStyles = { borderRadius: "24px", filter: "drop-shadow(2px 3px 2px #D3D3D3)", objectFit: "cover" } as const;

const SectionWithSidebar = (props: PropsWithChildren<{orientation: "left" | "right", classes?: ClassValue}>) => <div className={cn("sidebar-section", props.orientation, props.classes)}>{props.children}</div>

const SectionWith = (props: PropsWithChildren<{ title: string }>) => 
  <div className="flex flex-col">
    <H3 className="mx-auto mb-4">{props.title}</H3>
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 mt-8">
      {props.children}
    </div>
  </div>

const SectionWithImageLeft = (props: PropsWithChildren<{title: string, image: StaticImageData}>) => 
  <SectionWith title={props.title}>
    <Tile image={props.image} />
    <div className="flex flex-col gap-4">
      {props.children}
    </div>
  </SectionWith>

const SectionWithImageRight = (props: PropsWithChildren<{title: string, image: StaticImageData}>) => 
  <SectionWith title={props.title}>
    <div className="flex flex-col gap-4">
      {props.children}
    </div>
    <Tile image={props.image} />
  </SectionWith>

const data = [
  { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Trading application that was focused on individual investors.' },
  { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'Cheaper Eats', content: 'Cross platform application to service restaurants ordering and back office software.' },
  { startDate: new Date('2021 05 '), endDate: new Date(), title: 'Bondlink', content: 'Front end and back end for municipalities to manage and disseminate information about Bond Sales and their communities.' },
];

export default function AboutMe() {

  return <Column classes="flex flex-col gap-20">
    <section className="px-4 lg:px-10 pt-20">
      <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center">
        <Image
          src="/images/archery.png"
          alt="archery"
          width={150}
          height={150}
          style={imgStyles}
          className="gold-img-border"
        />
        <div className="flex flex-col text-center my-auto">
          <H1 className="md:ml-2">Andrew M. Patterson</H1>
          <H2 className="col-start-2">Software Engineer, UAS Pilot, Tinkerer</H2>
        </div>
      </div>
      <H3 className="mx-auto text-center py-10">There is no such thing as a problem, only a challenge waiting to be solved.</H3>
    </section>
    <section>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<DesktopComp />} />
        <SidebarMain> 
          <div className="flex flex-col">
            <H1 className="mb-8 mx-auto">Professional History</H1>
            <div className="gap-4 flex flex-col xl:grid xl:grid-cols-5">
              <Timeline data={data} className="col-span-3" />
              <div className="col-span-2 flex flex-col">
                <H3 className="my-8">Summary</H3>
                <div className="flex flex-col gap-4">
                  <P>
                    I have always wanted to help people and I thought my passion was psychiatry. However, after getting straight A's in pre-med classes I realized that wasn't for me. People are challenging, but I determined that people themselves are the only ones who can fix themselves.
                  </P>
                  <P>After coming to that conclusion one of my close friends who I used to game with told me about his new job coding</P>
                  <P>
                    This was finally what I was seeking: a technical profession that would always have new and interesting challenges. So, I taught myself how to code and the basic principles of web development and started looking for my foot in the door. What I found was a junior position at a startup that was developing a trading application, and I quickly I rose to be one of the best performing juniors.
                  </P>
                  <P>
                    My next opportunity was a Food Service startup where one of my first tasks was to convert the entire code-base from Javascript to Typescript. By the end of my employment I had arisen to be teacher/mentor role.
                  </P>
                  <P>
                    The latest opportunity was a Municipal Bond startup, and again within a year I was offered a promotion and increased responsibilities. Then when the company began to grow I was promoted to a Team Lead.
                  </P>
                  <P>
                    I was put in charge of managing the Core Epic which serviced the maintenance, bug fixes, and small feature requests.
                  </P>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <P>
              Whether collaborating with cross-functional teams or leading projects independently my career has been defined by a relentless pursuit of knowledge and a passion for innovation.
            </P>
            <P>
              My approach combines a rigorous understanding of core computer science principles with a hands-on, problem-solving mindset. 
            </P>
          </div>
        </SidebarMain>
      </SectionWithSidebar>
      <SectionWithSidebar orientation="left">
        <SidebarBottom icon={<Github />} />
        <SidebarMain classes="overflow-scroll">
          <div className="flex flex-col gap-8">
            <H1 className="mb-4 mx-auto">My Work</H1>
            <div className="flex mx-auto my-4 github-calendar">
              <GithubActivityCalendar />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <P>
              With over eight years of experience in software engineering, I bring a deep-seated expertise in crafting simple solutions to complex problems that are maintainable and efficient. 
            </P>
            <P>My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
            </P>
            <P>
              I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of my organization. 
            </P>
          </div>
        </SidebarMain>
      </SectionWithSidebar>
    </section>
    <H1 className="mx-auto">Tech Skills</H1>
    <Skills />
    <section>
      <SectionWithSidebar orientation="right">
        <SidebarMain>
          <H1 className="mb-4 mx-auto">Leadership</H1>
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
            <P>Proud recipient of the highest honor in Scouts the Eagle Scout rank which was awarded for my organization and completion of a project that benefited the community</P>
            <P>I lead the restoration of a historic building at Pioneer Living History Museum in Northern Phoenix. From getting approvals, to organizing all the volunteers, get donations for the materials, I worked with the museum to restore a historic piece of Arizona</P>
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
            <P>I am commercially licensed to fly drones.</P> 
            <P>They are custom built from my own designs which I solder together, assemble the frame, and flash/configure the firmware.</P>
            <P>The moments that you get to fly are amazing, but the real meat and potatoes comes from crashing and building them. The <strong>best</strong> problems come from working on embedded systems. Having the physical component cost of "just trying it out" forces you to become creative and try different solutions</P>
            <P>The drones are programmed with Betaflight for it's freestyle performance, the gear is: ImmersionRC with HDO2.1 goggles and ELRS Radiomaster Boxer</P>
          </SectionWithImageRight>
        </SidebarMain>
        <SidebarBottom icon={<Drone />} />
      </SectionWithSidebar>
    </section>
    <H1 className="mx-auto">Tinkering with my Tools</H1>
    <div className="flex justify-around mx-auto gap-12">
      <Image src="/svgs/Vimlogo.svg" alt="VimLogo" width={150} height={150} />
      <Image src="/svgs/arch-linux.svg" alt="Operating System" width={150} height={150}/>
      <Image src="/images/moonlander_logo.webp" alt="Moonlander" width={150} height={150} />
    </div>
    <section>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<Toolbox />}  bottomOffset={0}/>
        <SidebarMain>
          <SectionWithImageRight
            title="Why stop at an Editor?"
            image={battleStationImg}
          >
            <H3>My Editor</H3>
            <div className="flex flex-col gap-4 mb-16">
              <P>As a junior paired with a developer on my team who used Emacs, and the level of control they had over their editor astounded me. Navigating between files, moving around inside files, text manipulation, and infinite customization. It was clear to me that they were able to iterate significantly faster than I was using vanilla VS Code.</P>
              <P>It wasn't Emacs or Vim that made them efficient, it was their level experience with their editor and their equipment.</P>
              <P>So, since Vim is the lowest common denominator of editors I took the next 6 months learning Vim (Neovim flavor) and a QMK programmable keyboard.</P> 
              <span className="flex flex-col md:flex-row text-xl">
                <H4>Check out my Neovim </H4>
                <Anchor href="https://github.com/Ampatte2/dot_files/tree/main/linux-config/nvim" title="Dot Files" className="text-1xl md:text-2xl md:ml-2 tracking-tight" />
              </span>
            </div>
            <H3>Operating System</H3>
            <div className="flex flex-col gap-4">
              <div className="inline">
                <P>I've endured the pain of endless configuration files to make "my" operating system. Even a few mistakes along the way, like realizing that I needed to update the location of vmlinuz in the config. Even though my UEFI system recognizes the install location of EFI/boot/bootx86.efi, the OS is looking in /BOOT. </P>
                <P>Then add in a little unassuming "sudo pacman -Syu", restart, and get stuck at the GRUB bootloader... time to break out the ISO and start seeing where I went wrong.</P>
                <P>Definitely was a skill issue though.</P>
              </div>
              <P>Both OS and side project Arch linux has taught me that at the end of the day regardless of what you're working on in software it is always:</P>
              <P><strong>Data Structures, Directories, and Algorithms</strong></P>
            </div>
            <P>Another team member showed me the customizations that the keyboard firmware QMK could provide, and the beauty that is <strong>Layers</strong>.</P>
            <P>Then it got creative, I started experimenting with different seats, different desks, sitting on the ground, sitting on a ball chair, and all gave me issues when trying to code for long stretches (10+ hours).</P>
            <P>After a couple iterations I thought to myself "What is the most comfortable chair?" A zero gravity recliner of course! Then it all came together with my lounge chair, split keyboard, and a PVC frame for the monitor to keep it at a good distance above my head.</P>
            <P>Next iteration will remove the PVC with a more permanent, and a better way to get in and out. Right now I kind of slink out to the side.</P>
            <span className="flex flex-col md:flex-row text-xl">
              <H4>Check out my Keyboard Layout</H4>
              <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38" className="text-1xl md:text-2xl md:ml-2 tracking-tight"/>
            </span>
          </SectionWithImageRight>
        </SidebarMain>
      </SectionWithSidebar >
      <SectionWithSidebar orientation="left" >
        <SidebarBottom icon={<Printer />} bottomOffset={0} />
        <SidebarMain>
          <H1 className="mx-auto">Hobbies</H1>
          <SectionWithImageLeft
            title="FPV Drone Freestyle"
            image={fiveInchDroneImg}
          >
            <P>The freedom of 360 degree movement, feeling like you are right there in the action, and the harmony of multiple pieces of technology working in concert are just a few reasons I love drones.</P>
            <P>I have 3 different drones, the one in the photo is a 5 inch quad with 60 amp ESCs and massive 2406 stator / 2450 KV motors running 6s. It's a monster that is a lord of the sky.</P>
            <P> To round out the fleet I have a nimble 4 inch quad 4-6s and a little tiny 65mm racing quad that I toot around inside with.</P>
          </SectionWithImageLeft>
          <SectionWithImageRight
            title="Dante Dog"
            image={danteImg}
          >
            <P>This is my boy we hang out and do just about everything together. He's a four year old Border Collie Corgi mixed breed, he loves running and eating all the food he can find or coerce out of me with those puppy dog eyes.</P>
          </SectionWithImageRight>
          <SectionWithImageLeft
            title="Gardening"
            image={plantsImg}
          >
            <P>After working on a computer all day with it's infinite problems, it's nice to sit back and just do one thing at a time. Plants are fairly simple in that way, they take a while to change and you should not change them too quickly or often.</P>
          </SectionWithImageLeft>
          <SectionWithImageRight
            title="3D Printing"
            image={printerImg}
          >
            <P>Fun hobby that I occasionally use to replace bespoke pieces of plastic that are non-functional.</P>
            <P>I can build and design parts from scratch using programs like Fusion 360 or Blender. These programs have taught me about the different ways that you can go about creating 3D objects and manipulating them.</P>
          </SectionWithImageRight>
          <SectionWithImageLeft
            title="Outdoors"
            image={campfireMeImg}
          >
            <P>The outdoors is where it is at, I am an avid backpacker, camper, hiker.</P>
            <P>Usually you can find me off exploring some unmarked trail or figuring out how to get to the top of the next mountain.</P>
          </SectionWithImageLeft>
        </SidebarMain>
      </SectionWithSidebar>
    </section>
    <section>
      <div className="mx-auto flex flex-col justify-center gap-12 my-20 text-slate-700">
        <div className="flex mx-auto">
          <H1>Contact Me</H1>
        </div>
        <div className="flex flex-col md:flex-row mx-auto">
          <Image
            src="/images/snow_me.png"
            alt="archery"
            width={200}
            height={200}
            className="mx-auto md:mr-8 mb-auto gold-img-border"
            style={imgStyles}
          />
          <div className="flex flex-col px-4 md:px-0">
            <H3>When you:</H3>
            <OL className="text-2xl ml">
              <li>Have a project that needs to be built.</li>
              <li>A wild idea that needs a duck.</li>
              <li>Want to fly a drone.</li>
              <li>Discuss the best editor and why it is Vim.</li>
              <li>Gripe about Typescript tooling.</li>
            </OL>
          </div>
        </div>
        <div className="flex gap-8 mx-auto">
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
        <div className="flex flex-col md:flex-row gap-4 mx-auto">
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
            variant="default"
            icon={<Phone className="h-10 w-10 mr-2" />}
          />
        </div>
      </div>
    </section>
  </Column>
}

