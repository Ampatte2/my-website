import { Anchor, AnchorIcon, MailToAnchor, TelAnchor } from "@/components/ui/anchors";
import { H1, H2, H3, H4, OL, P } from "@/components/ui/elements";
import { Column } from "@/components/ui/flex";
import { GithubActivityCalendar } from "@/components/ui/github-activity-calendar";
import { Tile } from "@/components/ui/mosaic";
import { SidebarBottom, SidebarMain, SidebarTop } from "@/components/ui/sidebar";
import { Skills } from "@/components/ui/skills";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { differenceInCalendarMonths } from 'date-fns';
import { Mail, Phone } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import battleStationImg from "../public/images/battle_station.png";
import eagleScoutImg from "../public/images/eagle_scout_camping.webp";
import headshotImg from "../public/images/headshot.jpg";
import openDroneImg from "../public/images/open_drone.png";
import DesktopComp from "../public/svgs/desktop-computer.svg";
import Document from "../public/svgs/document.svg";
import Drone from "../public/svgs/drone.svg";
import EagleScout from "../public/svgs/eagle-scout.svg";
import Github from "../public/svgs/github.svg";
import Linkedin from "../public/svgs/linkedin.svg";
import Toolbox from "../public/svgs/toolbox.svg";

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
    { startDate: new Date('2021 05 01'), endDate: new Date('2024 10 01'), title: 'Bondlink', content: 'Public facing site to provide increased lender transparency for investors and municipalities to market Bond Sales. A user portal to manange the content, a banker portal, and investor portal.' },
    { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'CheaprEats', content: 'Cross platform application for restaurants ordering and back office software with real-time group ordering' },
    { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Securities and Crypto trading application to track, update, and discover trading strategies.' },
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
                    <H2>Frontend Software Engineer</H2>
                </div>
            </div>
            <H3 className="mx-auto text-center my-8 md:mt-20 ">I don't believe in problems, only good challenges.</H3>
            <P className="mx-auto px-10 my-8 md:my-20">Frontend Developer with a proven track record of designing and implementing high-performance web solutions that directly contribute to revenue growth and operational efficiency. Adept at leveraging cutting-edge technologies to optimize user experiences, streamline processes, and enhance conversion rates. Instrumental in the development of scalable SaaS platforms and dynamic web applications. Skilled in collaborating with cross-functional teams to deliver innovative digital strategies that align with business objectives, ensuring measurable ROI. Passionate about solving complex technical challenges while driving measurable financial impact for the organization.</P>
        </section>
        <section aria-label="Professional History and Work Summary">
            <SectionWithSidebar orientation="left">
                <SidebarTop icon={<DesktopComp />} />
                <H1 className="mb-8 mx-auto">Professional History</H1>
                <SidebarMain> 
                    <div className="flex flex-col">
                        <div className="gap-8 flex flex-col xl:grid xl:grid-cols-2">
                            <Timeline data={data} />
                            <div className="flex flex-col">
                                <H3 className="my-8">Summary</H3>
                                <div className="flex flex-col gap-4">
                                    <P>In my career I have a consistently delivered high-quality products on time. I excel at accurately estimating project timelines and proactively identifying potential challenges based on current system capabilities. By leveraging strong communication skills and effective collaboration with my team, I adapt seamlessly to the evolving needs of any product.</P>
                                    <P>I am passionate about saving engineering hours through innovative and efficient solutions. For example, I once delivered a new feature two weeks ahead of schedule by identifying that most of the required elements and layouts were already in place. Instead of duplicating effort, I strategically streamlined the process by extracting and optimizing existing components.</P>
                                    <P>But don’t just take my word for it—here’s what the Director of Frontend Engineering at my last position had to say:</P>
                                    <P>
                                        <i>“Andrew is an ambitious software engineer. He's always looking for ways to improve not only his craft but the codebase and team around him. He is a sharp engineer and has had the opportunity to take the lead of my team on numerous occasions whenever I'm away from the office. Each time he's handled it with confidence and competence. I believe Andrew would be an immediate asset to any engineering team and I would hire him again given the opportunity.” - Justin Lieder</i>
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
                        <li>The company used a custom SSR server alongside our Scala web server, which required launching both for the application to function. I worked with my manager to create a custom Tmux configuration, implemented in a Bash script, that would launch both servers in an Apple Terminal window. Using AppleScript long options, I automated the process to either run everything instantly or load the window on demand.</li>
                        <li>I strongly believe in the power of mentorship, guided by the principle, “If you can’t explain it simply, you don’t understand it well enough.” One of my most rewarding experiences was mentoring a new hire with basic Python knowledge but no web development experience. Through clear explanations, lessons, and PR feedback, he quickly became a capable individual contributor.</li>
                        <li>One of my more challenging projects was integrating a third-party, no-code headless CMS (Plasmic) into our workflow. The idea was to reduce engineering hours for content updates, but the lack of structure in Plasmic created difficulties. The final solution involved importing our existing components into the CMS, allowing marketing to modify them, then exporting the changes back into code. This process caused numerous issues, but leveraging my React expertise, I found workarounds—such as cloning elements and creating wrapper contexts—to stabilize the integration.</li>
                    </OL>
                    <GithubActivityCalendar />
                    <div className="flex flex-col gap-8">
                        <P>With over eight years of experience in software engineering, I specialize in designing and implementing scalable systems that adapt to the evolving needs of organizations. I focus on crafting simple, efficient, and maintainable solutions to complex problems.
                        </P>
                        <P>My experience in web technologies and computer science has given me a versatile skill set, enabling me to address diverse challenges and deliver impactful results.</P>
                    </div>
                </SidebarMain>
            </SectionWithSidebar>
        </section>
        <section className="flex flex-col gap-12" aria-label="Tech Skills">
            <H1 className="mx-auto">Tech Skills</H1>
            <Skills />
        </section>
        <section aria-label="Leadership UAS Pilot and Freestyle Drone">
            <SectionWithSidebar orientation="left">
                <SidebarTop icon={<Toolbox />}  bottomOffset={0}/>
                <SidebarMain collapse="xl">
                    <SectionWithImageRight
                        title="My Tools"
                        image={battleStationImg}

                    >
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <Image src="/svgs/Vimlogo.svg" alt="VimLogo" width={100} height={100} />
                                <H1 className="mx-auto">My Editor</H1>
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
                    <SidebarBottom icon={<Toolbox />}  bottomOffset={0}/>
                </SidebarMain>
            </SectionWithSidebar >
        </section>
        <section>
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
                </SidebarMain>
                <SidebarBottom icon={<Drone />} />
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
                    <div className="flex flex-col gap-4 px-4 md:px-0 mt-8 md:my-none">
                        <H3>When you:</H3>
                        <OL className="text-xl" gap={4}>
                            <li>Have a project that needs to be built.</li>
                            <li>A wild idea that needs a duck.</li>
                            <li>Discuss the best editor and why it is Vim.</li>
                            <li>Gripe about Typescript tooling.</li>
                        </OL>
                        <div className="flex flex-row gap-4 justify-between">
                            <Tooltip title="Email">
                                <MailToAnchor 
                                    subject="Inquiring About: "
                                    body={["Howdy Andrew,"]} 
                                    icon={<Mail />}
                                />
                            </Tooltip>
                            <Tooltip title="Telephone">
                                <TelAnchor
                                    icon={<Phone />}
                                />
                            </Tooltip>
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
            </div>
        </section>
    </Column>
}

