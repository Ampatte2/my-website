import { Anchor } from "@/components/ui/anchors";
import { DownloadResumeButton } from "@/components/ui/downloadResume";
import { H1, H2, H3, H4, P } from "@/components/ui/elements";
import { SidebarBase, SidebarTop, SidebarMain, SidebarBottom } from "@/components/ui/sidebar";
import { Column } from "@/components/ui/flex";
import { cn } from "@/lib/utils";
import { differenceInCalendarMonths } from 'date-fns';
import Image, { StaticImageData } from "next/image";
import { JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode, useRef, useState } from "react";
import ActivityCalendar, { Activity, Props } from "react-activity-calendar";
import battleStationImg from "../../public/images/battle_station.png";
import computerTeamImg from "../../public/images/computer_team.jpg";
import eagleScoutImg from "../../public/images/eagle_scout_camping.webp";
import openDroneImg from "../../public/images/open_drone.png";
import Drone from "../../public/svgs/drone.svg";
import Printer from "../../public/svgs/3d-printer.svg";
import Toolbox from "../../public/svgs/toolbox.svg";
import Github from "../../public/svgs/github.svg";
import EagleScout from "../../public/svgs/eagle-scout.svg";
import DesktopComp from "../../public/svgs/desktop-computer.svg";
import Plasmic from "../../public/svgs/plasmic.svg";
import BetaFlight from "../../public/svgs/betaflight.svg";
import Shadcn from "../../public/images/shadcn.png";
import Fpts from "../../public/images/fp-ts-logo.png";
import Koa from "../../public/svgs/koa.svg";
import Lua from "../../public/svgs/lua.svg";
import Mac from "../../public/svgs/mac.svg";
import Bash from "../../public/svgs/bash.svg";
import Gulp from "../../public/svgs/gulp.svg";
import Sass from "../../public/svgs/sass.svg";
import Scala from "../../public/svgs/scala.svg";
import Tmux from "../../public/svgs/tmux.svg";
import ReactSvg from "../../public/svgs/react.svg";
import Css from "../../public/svgs/css-3.svg";
import Sql from "../../public/svgs/sql-file-format-symbol.svg";
import Typescript from "../../public/svgs/typescript-official.svg";
import Nodejs from "../../public/svgs/nodejs-icon.svg";
import Javascript from "../../public/svgs/javascript.svg";
import Angular from "../../public/svgs/angularjs.svg";
import Tailwind from "../../public/svgs/tailwind.svg";
import Nginx from "../../public/svgs/nginx.svg";
import Webpack from "../../public/svgs/webpack.svg";
import Mongodb from "../../public/svgs/mongodb.svg";
import Express from "../../public/svgs/express.svg";
import Html from "../../public/svgs/html-5.svg";
import Neovim from "../../public/svgs/neovim.svg";
import Nextjs from "../../public/svgs/nextjs.svg";
import { retrieveContributionData } from "../../util/api/github-contributions";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

type WithTooltipProps = {content?: ReactNode, title: string }

const WithTooltip = (props: PropsWithChildren<WithTooltipProps>) => <TooltipProvider>
  <Tooltip >
    <TooltipTrigger>
      {props.children}
    </TooltipTrigger>
    <TooltipContent>
      <div className="flex flex-col text-center w-80">
        <H4>{props.title}</H4>
        {props.content}
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>;

const SvgWithTooltip = (props: {svg: JSXElementConstructor<object>} & WithTooltipProps) => 
  <WithTooltip
    title={props.title}
    content={props.content}
  >
    <props.svg />
  </WithTooltip>


const ImgWithTooltip = (props: {src: StaticImageData} & WithTooltipProps) => 
  <WithTooltip
    title={props.title}
    content={props.content}
  >
    <Image src={props.src} alt={props.title} />
  </WithTooltip>
const formatDate = Intl.DateTimeFormat([], { dateStyle: "medium" });

interface TimelineData {
  startDate: Date;
  endDate: Date;
  content: string;
  title: string;
}

interface TimelineProps {
  data: TimelineData[];
  className?: string;
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

const SectionWithSidebar = (props: PropsWithChildren<{orientation: "left" | "right"}>) => <div className={cn("sidebar-section", props.orientation)}>{props.children}</div>

const Tile = (props: { image: StaticImageData, frontTitle: string, backTitle: string }) => <div className="flex flex-col text-center">
  <H3 className="mb-4">{props.frontTitle}</H3>
  <div className="mosaic-tile-container">
    <p className="back-face text-xl font-bold text-white text-shadow-sm shadow-black">{props.backTitle}</p>
    <div className="mosaic-tile" style={{ backgroundImage: `url(${props.image.src})` }} />
  </div>
</div>;

const data = [
  { startDate: new Date('2018 01 01'), endDate: new Date('2019 06 01'), title: 'Procleos Labs', content: 'Trading application that was focused on individual investors' },
  { startDate: new Date('2019 09 01'), endDate: new Date('2021 05 01'), title: 'Cheaper Eats', content: 'Cross platform application to service restaurants ordering and back office software' },
  { startDate: new Date('2021 05 '), endDate: new Date(), title: 'Bondlink', content: 'Front end and back end for municipalities to manage and disseminate information about Bond Sales and their communities' },
];

export default async function TLDR() {
  // const res = await retrieveContributionData("Ampatte2");
  
  // const highestActivity = res.data.user.contributionsCollection.contributionCalendar.weeks.reduce((prevCount, curr) => {
  //  const currCount = curr.contributionDays.reduce((count, currDay) => currDay.contributionCount > count ? currDay.contributionCount : count, 0)
  //  return currCount > prevCount ? currCount : prevCount;
  // }, 0)

  //const activityData = res.data.user.contributionsCollection.contributionCalendar.weeks.reduce<Array<Activity>>((prev, curr) =>
  //  prev.concat(
  //    curr.contributionDays.map(_ => ({ date: _.date, count: _.contributionCount, level: _.contributionCount / highestActivity * 4 }))
  //  ), [])

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
            <div className="md:grid md:grid-cols-5 flex flex-col">
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
            <div className="mx-auto my-4">
            {/*
              <ActivityCalendar
                colorScheme="light"
                theme={{ light: ["#ccffcc", "#80ff80", "#4dff4d", "#1aff1a", "#00cc00"] }}
                data={activityData}
                style={{ fill: "#e6ffe6" }}
                blockMargin={8}
                blockSize={16}
                blockRadius={99}
              />
              */}                          
            </div>
          </div>
          <P>
            Having navigated various facets of the software development lifecycle, I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of today's digital environment. My proficiency spans a spectrum of web technologies, and I am adept at leveraging these tools to build robust, high-performance applications that stand out in their functionality and user experience.
          </P>
          <P>
            With over eight years of experience in the software engineering landscape, I bring a deep-seated expertise in crafting sophisticated solutions that drive innovation and efficiency. My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
          </P>
        </SidebarMain>
      </SectionWithSidebar>
    </div>
    <div>
      <SectionWithSidebar orientation="right">
        <SidebarMain>
          <Tile image={eagleScoutImg} frontTitle="Eagle Scout" backTitle="Always assuming the leadership role when required, and following through on anything I set my sights on." />
          <Tile image={computerTeamImg} frontTitle="Team Lead" backTitle="As a junior level developer I quickly learned and built upon the patterns that existed in the codebase. Within a year I was knowledgable enough to teach other juniors and was promoted to team lead." />
        </SidebarMain>
        <SidebarTop icon={<EagleScout />} />
      </SectionWithSidebar>
      <SectionWithSidebar orientation="right">
        <SidebarMain>
          <Tile image={openDroneImg} frontTitle="UAS Pilot Part 107 Licensed" backTitle="I am commercially licensed to fly drones. They are custom built from my own designs and I solder the electronics, assemble the frames, and flash/configure the firmware." />
        </SidebarMain>
        <SidebarBottom icon={<Drone />} />
      </SectionWithSidebar>
    </div>
    <div>
      <SectionWithSidebar orientation="left">
        <SidebarTop icon={<Toolbox />}  />
        <SidebarMain>
          <div className="flex">
            <div className="flex flex-col gap-4 px-10">
              <H2>My Tools</H2>
              <div className="flex flex-col gap-4">
                <H3>Editor</H3>
                <div className="inline">
                  <Image src="/svgs/Vimlogo.svg" alt="VimLogo" width={100} height={100} className="float-left mr-4 mb-4" />
                  <P>As a junior I would pair with this one individual who used Emacs, and it astounded me the ease and level of control they had over their editor. Navigating files, moving around inside files, text manipulation, and infinite customization. I realized that they were able to iterate significantly faster than I was using vanilla VSCode.</P>
                  <P className="mt-4">I spent the next 6 months learning a new keyboard and Vim (Neovim flavor), and it was well worth every second. The choice of Vim has been great, my editor comes standard on every machine, and now I can be the one to impress the juniors.</P>
                </div>
                <span className="flex text-lg">
                  <H4>Check out my</H4>
                  <Anchor href="https://github.com/Ampatte2/dot_files/tree/main/linux-config/nvim" title="Nvim Dot Files" className="ml-2" />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <H3>Why stop at an Editor?</H3>
                <div className="inline">
                  <Image src="/images/moonlander_logo.webp" alt="Moonlander" width={100} height={100} className="float-left mr-4 mb-4" />
                  <P>Another coworker showed me the customizations that QMK firmware could provide, and the beauty that is "Layers". Since I was already shaking up my developer experience I figured why not make it exactly what I want.</P>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <H3>Operating System</H3>
                <Image src="/svgs/arch-linux.svg" alt="Operating System" width={100} height={100} />
                <P>I know the pain "-Syu" bricking my machine and having to break out the ISO to perform open heart surgery. Also, the pain of realizing it was entirely my fault.</P>
                <Anchor href="https://configure.zsa.io/moonlander/layouts/Rgmyl/5Dw66/0" title="You Only Need 38 - Keyboard Layout" />
              </div>
            </div>
            <Tile image={battleStationImg} frontTitle="Self Taught Developer" backTitle="I love to learn and the fast paced creative nature of software development has become a passion. I've even augmented" />
          </div>
        </SidebarMain>
      </SectionWithSidebar >
      <SectionWithSidebar orientation="left">
        <SidebarBottom icon={<Printer />} />
        <SidebarMain>
          <div>Printer Content</div>
        </SidebarMain>
      </SectionWithSidebar>
    </div>
    <div className="px-40">
      <H2>Technologies for Nerds</H2>
      <SvgWithTooltip title="Plasmic" content="Built a CMS for Marketing to manage online prescence without involving Engineering" svg={Plasmic} />
      <SvgWithTooltip title="BetaFlight" content="Configuration via command line args and lua" svg={BetaFlight} />
      <SvgWithTooltip title="NodeJs" svg={Nodejs} />
      <SvgWithTooltip title="Koa" content="Utilizes context of the overall program state with plugins" svg={Koa} />
      <SvgWithTooltip title="ExpressJs" content="Bread and butter, ole reliable" svg={Express} />
      <ImgWithTooltip title="Functional Programming TS" content="Typescript library that added Category Theory data types and methods" src={Fpts} />
      <ImgWithTooltip title="Shadcn/ui" content="Customizable component library" src={Shadcn} />
      <SvgWithTooltip title="Lua" content="Dead simple programming language" svg={Lua} />
      <SvgWithTooltip title="MacOS" svg={Mac} />
      <SvgWithTooltip title="Bash" content="Preferred cmdline flavor" svg={Bash} />
      <SvgWithTooltip title="Bash" content="Typescript" svg={Gulp} />
      <SvgWithTooltip title="Sass" svg={Sass} />
      <SvgWithTooltip title="Scala" content="Functional Programming in Java" svg={Scala} />
      <SvgWithTooltip title="Tmux" content="Terminal Multiplexer" svg={Tmux} />
      <SvgWithTooltip title="React" svg={ReactSvg} />
      <SvgWithTooltip title="CSS 3" svg={Css} />
      <SvgWithTooltip title="HTML 5" svg={Html} />
      <SvgWithTooltip title="MySql" svg={Sql} />
      <SvgWithTooltip title="Typescript" svg={Typescript} />
      <SvgWithTooltip title="Javascript" svg={Javascript} />
      <SvgWithTooltip title="Angular" svg={Angular} />
      <SvgWithTooltip title="Tailwind CSS" content="Utility-first CSS framework" svg={Tailwind} />
      <SvgWithTooltip title="NGINX" content="HTTP Web Server and Proxy" svg={Nginx} />
      <SvgWithTooltip title="Webpack" content="Javascript Typescript bundler" svg={Webpack} />
      <SvgWithTooltip title="Mongodb" content="NoSql Database" svg={Mongodb} />
      <SvgWithTooltip title="Mongodb" content="NoSql Database" svg={Mongodb} />
      <SvgWithTooltip title="Neovim" content="Successor to Vim with plugins written in Vimscript and Lua" svg={Neovim} />
      <SvgWithTooltip title="NextJs" svg={Nextjs} />
    </div>
    <DownloadResumeButton />
  </Column>
}

