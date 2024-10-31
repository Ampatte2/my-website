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

type OrientationU = "left" | "right";

const SectionWithSidebar = (props: PropsWithChildren<{orientation: OrientationU, classes?: ClassValue}>) => <div className={cn("sidebar-section", props.orientation, props.classes)}>{props.children}</div>

type SectionWithProps = { title: string };

const SectionWith = (props: PropsWithChildren<SectionWithProps & {orientation:  OrientationU}>) => 
  <div className="flex flex-col">
    <H2 className="mx-auto mb-16">{props.title}</H2>
    <div className={cn("section-with", props.orientation)}>
      {props.children}
    </div>
  </div>

type SectionWithImageProps = SectionWithProps & { image: StaticImageData}

const SectionWithImageLeft = (props: PropsWithChildren<SectionWithImageProps>) => 
  <SectionWith title={props.title} orientation="left">
    <Tile image={props.image} classes="mr-auto order-first max:order-none" />
    <div className="flex flex-col gap-4 order-last max:order-none">
      {props.children}
    </div>
  </SectionWith>

const SectionWithImageRight = (props: PropsWithChildren<SectionWithImageProps>) => 
  <SectionWith title={props.title} orientation="right">
    <div className="flex flex-col gap-4 order-last max:order-none">
      {props.children}
    </div>
    <Tile image={props.image} classes="ml-auto order-first max:order-none"/>
  </SectionWith>

const data = [
  { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Securities and Crypto trading application' },
  { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'Cheapr Eats', content: 'Cross platform application for restaurants ordering and back office software.' },
  { startDate: new Date('2021 05 '), endDate: new Date(), title: 'Bondlink', content: 'Public facing site disseminate information about Bond Sales and their communities and a user portal to manange the content' },
];

export default function AboutMe() {
  return <Column classes="flex flex-col gap-20">
    <section className="flex flex-col px-4 lg:px-10 pt-20" aria-label="Andrew Patterson Intro Title">
      <div className="flex flex-col text-center gap-8 my-auto mx-auto relative items-center">
        <Image
          src="/images/archery.png"
          alt="archery"
          width={150}
          height={150}
          style={imgStyles}
          className="gold-img-border lg:absolute -top-8 -left-40"
        />
        <div>
          <H1>Andrew M. Patterson</H1>
          <H2>Software Engineer, UAS Pilot, Tinkerer</H2>
        </div>
      </div>
      <H3 className="mx-auto text-center my-8 md:my-20">There is no such thing as a problem, only a challenge waiting to be solved.</H3>
    </section>
    <section aria-label="Professional History and Work Summary">
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<DesktopComp />} />
        <H1 className="mb-8 mx-auto">Professional History</H1>
        <SidebarMain> 
          <div className="flex flex-col">
            <div className="gap-4 flex flex-col xl:grid xl:grid-cols-2">
              <Timeline data={data} />
              <div className="flex flex-col">
                <H3 className="my-8">Summary</H3>
                <div className="flex flex-col gap-4">
                  <P>
                    In school I was studying to be a medical doctor specializing in psychology. I have always had a passion for fixing and building and thought that was the perfect fit. However, after getting straight A's in Pre-Med prerequisites I had a change of heart.
                  </P>
                  <P>I had no clue what to do after not pursuing that path, until I met an old friend driving a new Camaro working in web development.</P>
                  <P>
                     If he could do it I could. So, I taught myself how to code and the basic principles of web development. Then I found my foot in the door with a junior position at a startup that was developing a trading application. I quickly I rose to be one of the best performing juniors.
                  </P>
                  <P>
                    My next opportunity was a Food Service startup. Again having to prove myself I was assigned the task of converting the entire code-base from Javascript to Typescript. By the end of my employment I had arisen to be teacher/mentor role.
                  </P>
                  <P>
                    The latest opportunity was a Municipal Bond startup. Within a year they saw my value and I was offered a promotion with extra responsibilities. Then when the company hired I was promoted a leadership role.
                  </P>
                  <P>
                    As Team Lead I was put in charge of managing the Core Epic which comprised of maintenance, bug fixes, and feature requests.
                  </P>
                </div>
              </div>
            </div>
          </div>
        </SidebarMain>
      </SectionWithSidebar>
      <SectionWithSidebar orientation="left">
        <SidebarBottom icon={<Github />} />
        <H1 className="mx-auto mb-8">My Work</H1>
        <SidebarMain classes="overflow-scroll">
          <OL gap={8}>
            <li>The company had implemented a hand rolled SSR server. This meant that in addition to launching our Scala webserver we also had to  the SSR server in order for the application to run. I worked with my manager to design a custom Tmux config which I implemented in bash script which would launch everything into an Apple Iterm window using Applescript long opts to either instantly run or load up the window.</li>
            <li>There is a saying "If you can't explain it simply, you don't understand it well enough". I think this is why I've always jumped on mentorship opportunities. My most notable mentorship was a new hire with a bit of python knowledge and zero web skills. It turns out I could explain it simply enough to get him up to speed in no time, and after many lessons, questions, and PR comments he became an individual contributor in his own right.</li>
            <li>
              <div>
                My least favorite impressive accomplishment was an integration with a third party no code headless CMS solution: Plasmic. The idea was that having a no code solution for our corporate site would lessen the need for engineering hours to update copy and add simple things. The issue arose from Plasmic's lack of opinion about how everything was supposed to work. 
              </div>
              <div className="mt-4">The solution we ended up with was re-using our current components by importing them into the CMS then modifying via the no code solution (so marketing could update it later) then re-exporting back into code and then modifying them there. This broke many things in weird ways which with my expert knowledge of React I was able to bypass using clever solutions like cloning elements and creating wrapper contexts that were more stable in this bespoke environment.
              </div>
            </li>
          </OL>
          <GithubActivityCalendar />
          <div className="flex flex-col gap-8">
            <P>I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of my organization. With over eight years of experience in software engineering, I bring a deep-seated expertise in crafting simple solutions to complex problems that are maintainable and efficient. 
            </P>
            <P>My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
            </P>
          </div>
        </SidebarMain>
      </SectionWithSidebar>
    </section>
    <section className="flex flex-col gap-12" aria-label="Tech Skills">
      <H1 className="mx-auto">Tech Skills</H1>
      <Skills />
    </section>
    <section aria-label="Leadership UAS Pilot and Freestyle Drone">
      <SectionWithSidebar orientation="right">
        <H1 className="mx-auto mb-8">Leadership</H1>
        <SidebarMain collapse="xl">
          <SectionWithImageRight
            title="Team Lead"
            image={headshotImg}
          >
            <P>
              Whether collaborating with cross-functional teams or leading projects independently my career has been defined by a relentless pursuit of knowledge and a passion for innovation.
            </P>
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
        <SidebarMain collapse="xl">
          <SectionWithImageRight
            title="UAS Pilot Part 107 Licensed"
            image={openDroneImg}
          >
            <P>Custom built from my own designs which I solder together, assemble the frame, and flash/configure the firmware.</P>
            <P>The moments that you get to fly are amazing, but the real meat and potatoes comes from crashing and building them. The <strong>best</strong> problems come from working on embedded systems. Having the physical component cost of "just trying it out" forces you to become creative and try different solutions</P>
            <P>The drones are programmed with Betaflight for it's freestyle performance, the gear is: ImmersionRC with HDO2.1 goggles and ELRS Radiomaster Boxer</P>
          </SectionWithImageRight>
          <SectionWithImageLeft
            title="FPV Drone Freestyle"
            image={fiveInchDroneImg}
          >
            <P>The freedom of 360 degree movement, feeling like you are right there in the action, and the harmony of multiple pieces of technology working in concert are just a few reasons I love drones.</P>
            <P>I have 3 different drones, the one in the photo is a 5 inch quad with 60 amp ESCs and massive 2406 stator / 2450 KV motors running 6s. It's a monster that is a lord of the sky.</P>
            <P> To round out the fleet I have a nimble 4 inch quad 4-6s and a little tiny 65mm racing quad that I toot around inside with.</P>
          </SectionWithImageLeft>
        </SidebarMain>
        <SidebarBottom icon={<Drone />} />
      </SectionWithSidebar>
    </section>
    <section>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<Toolbox />}  bottomOffset={0}/>
        <SidebarMain>
          <SectionWithImageRight
            title="Tinkering with my Tools"
            image={battleStationImg}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <Image src="/svgs/Vimlogo.svg" alt="VimLogo" width={100} height={100} />
                <H2>My Editor: </H2>
              </div>
              <div className="flex flex-col gap-4">
                <P>As a junior paired with a developer on my team who used Emacs, and the level of control they had over their editor astounded me. Navigating between files, moving around inside files, text manipulation, and infinite customization. It was clear to me that they were able to iterate significantly faster than I was using vanilla VS Code.</P>
                <P>It wasn't Emacs or Vim that made them efficient, it was their level experience with their editor and their equipment.</P>
                <P>So, since Vim is the lowest common denominator of editors I took the next 6 months learning Vim (Neovim flavor) and a QMK programmable keyboard.</P> 
                <span className="flex flex-col md:flex-row text-xl">
                  <H4>Check out my Neovim </H4>
                  <Anchor href="https://github.com/Ampatte2/dot_files/tree/main/linux-config/nvim" title="Dot Files" className="text-1xl md:text-2xl md:ml-2 tracking-tight" />
                </span>
              </div>
            </div>
          </SectionWithImageRight>
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Image src="/svgs/arch-linux.svg" alt="Operating System" width={100} height={100}/>
                <H2>Operating System: Arch</H2>
              </div>
              <P>I've endured the pain of endless configuration files to make <i>my</i> operating system. Even a few mistakes along the way, like realizing that I needed to update the location of vmlinuz in the config. Even though my UEFI system recognizes the install location of <b>EFI/boot/bootx86.efi</b>, the OS is looking in <b>/BOOT.</b> </P>
              <P>Then add in a little unassuming <b>sudo pacman -Syu</b>, restart, and get stuck at the GRUB bootloader... time to break out the ISO and start seeing where I went wrong.</P>
              <P>Definitely was a skill issue though.</P>
              <P>Both OS and side project Arch Linux has taught me that at the end of the day regardless of what you're working on in software it is always: <strong>Data Structures, Directories, and Algorithms</strong></P>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Image src="/images/moonlander_logo.webp" alt="Moonlander" width={100} height={100} />
                <H2>Keyboard: Moonlander</H2>
              </div>
              <P>Another team member showed me the customizations that the keyboard firmware QMK could provide, and the beauty that is <strong>Layers</strong>.</P>
              <P>Then it got creative, I started experimenting with different seats, different desks, sitting on the ground, sitting on a ball chair, and all gave me issues when trying to code for long stretches (10+ hours).</P>
              <P>After a couple iterations I thought to myself "What is the most comfortable chair?" A zero gravity recliner of course! Then it all came together with my lounge chair, split keyboard, and a PVC frame for the monitor to keep it at a good distance above my head.</P>
              <P>Next iteration will remove the PVC with a more permanent, and a better way to get in and out. Right now I kind of slink out to the side.</P>
              <span className="flex flex-col md:flex-row text-xl">
                <H4>Check out my Keyboard Layout</H4>
                <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38" className="text-1xl md:text-2xl md:ml-2 tracking-tight"/>
              </span>
            </div>
          </div>
        </SidebarMain>
      </SectionWithSidebar >
      <SectionWithSidebar orientation="left" >
        <SidebarBottom icon={<Printer />} bottomOffset={0} />
        <SidebarMain collapse="xl">
          <SectionWithImageLeft
            title="3D Printing"
            image={printerImg}
          >
            <P>Started with an Ender 5 Pro and now using Resin SLA 3D Printer to replace bespoke pieces of plastic and make compliant mechanisms.</P>
            <P>I love building and designing parts from scratch using programs like Fusion 360 or Blender. These programs have taught me about the different ways that you can go about creating 3D objects and manipulating them.</P>
            <P>I prefer Blender's approach that you perform mathematical operations like unions to achieve the final result, whereas Fusion thinks of objects that can be connected and sculpted.</P>
          </SectionWithImageLeft>
          <SectionWithImageRight
            title="Dante Dog"
            image={danteImg}
          >
            <P>This is my boy we hang out and do just about everything together.</P>
            <P>He's a four year old Border Collie Corgi mixed breed, he loves running and eating all the food he can find or coerce out of me with those puppy dog eyes.</P>
          </SectionWithImageRight>
          <SectionWithImageLeft
            title="Gardening"
            image={plantsImg}
          >
            <P>After working on a computer all day with it's infinite problems, it's nice to sit back and just do one thing at a time. Plants are fairly simple in that way, they take a while to change and you should not change them too quickly or often.</P>
          </SectionWithImageLeft>
          <SectionWithImageRight
            title="Outdoors"
            image={campfireMeImg}
          >
            <P>The outdoors is where it is at, I am an avid backpacker, camper, hiker.</P>
            <P>Usually you can find me off exploring some unmarked trail or figuring out how to get to the top of the next mountain.</P>
          </SectionWithImageRight>
        </SidebarMain>
      </SectionWithSidebar>
    </section>
    <section>
      <div className="flex flex-col justify-center gap-12 my-20 text-slate-700">
        <div className="flex mx-auto">
          <H1>Contact Me</H1>
        </div>
        <div className="flex flex-col md:flex-row mx-auto">
          <Image
            src="/images/snow_me.png"
            alt="Me in Snow"
            width={300}
            height={300}
            className="mx-auto md:mr-8 mb-auto gold-img-border"
            style={imgStyles}
          />
          <div className="flex flex-col gap-4 px-4 md:px-0 mt-8 md:my-auto">
            <H3>When you:</H3>
            <OL className="text-2xl" gap={4}>
              <li>Have a project that needs to be built.</li>
              <li>A wild idea that needs a duck.</li>
              <li>Want to fly a drone.</li>
              <li>Discuss the best editor and why it is Vim.</li>
              <li>Gripe about Typescript tooling.</li>
            </OL>
            <div className="flex justify-between">
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 mx-auto">
          <MailToAnchor 
            title="Email Me"
            subject="Inquiring About: "
            body={["Howdy Andrew,"]} 
            size="lg"
            variant="default"
            className="text-3xl rounded-full font-semibold tracking-tight p-12 mx-auto"
            icon={<Mail className="h-10 w-10 mr-2" />}
          />
          <TelAnchor
            className="text-3xl rounded-full font-semibold tracking-tight p-12 mx-auto"
            title="Call or Text Me"
            variant="default"
            icon={<Phone className="h-10 w-10 mr-2" />}
          />
        </div>
      </div>
    </section>
  </Column>
}

