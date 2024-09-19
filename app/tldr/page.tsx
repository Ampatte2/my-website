import { DownloadResumeButton } from "@/components/ui/downloadResume";
import { H1, H2, H3, H4, P } from "@/components/ui/elements";
import { Column } from "@/components/ui/flex";
import { cn } from "@/lib/utils";
import { differenceInCalendarMonths } from 'date-fns';
import Image, { StaticImageData } from "next/image";
import ActivityCalendar, { Activity } from "react-activity-calendar";
import battleStationImg from "../../public/images/battle_station.png";
import computerTeamImg from "../../public/images/computer_team.jpg";
import eagleScoutImg from "../../public/images/eagle_scout_camping.webp";
import openDroneImg from "../../public/images/open_drone.png";
import { retrieveContributionData } from "../../util/api/github-contributions";
import { ReactElement } from "react";

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

const TileContainer = (props: { left: ReactElement, right: ReactElement }) => <div className="mosaic">
  {props.left}
  {props.right}
</div>

const Tile = (props: { image: StaticImageData, frontTitle: string, backTitle: string }) => <div className="flex flex-col text-center w-full">
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
  const res = await retrieveContributionData("Ampatte2");

  const highestActivity = res.data.user.contributionsCollection.contributionCalendar.weeks.reduce((prevCount, curr) => {
    const currCount = curr.contributionDays.reduce((count, currDay) => currDay.contributionCount > count ? currDay.contributionCount : count, 0)
    return currCount > prevCount ? currCount : prevCount;
  }, 0)

  const activityData = res.data.user.contributionsCollection.contributionCalendar.weeks.reduce<Array<Activity>>((prev, curr) =>
    prev.concat(
      curr.contributionDays.map(_ => ({ date: _.date, count: _.contributionCount, level: _.contributionCount / highestActivity * 4 }))
    ), [])
  // There is no such thing as a problem, only a challenge waiting to be solved.</P>
  return <Column classes="gap-16">
    <div className="flex gap-4 mx-auto">
      <Image
        src="/images/archery.PNG"
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
            In order to get my foot in the door I took a junior position at a trading company startup.
            Quickly I rose to be one of the best performing juniors.
          </P>
          <P>
            My next opportunity was a Food Service startup where I started by porting over old javascript code to typescript. I picked up on the company's patterns and with my newly strengthened typescript skills I found myself in a teacher/mentor role, which I loved.
          </P>
          <P>
            I took a position working for a bond marketing platform within a year I was offered a promotion, and when the company began to expand I was promoted to Team Lead.
            I was in charge of managing the "Core" Epic, which encompased a variety of projects and routine maintenance on the site.
            Before long I was spear-heading month long features managing a team of five.
          </P>
        </div>
      </div>
    </div>
    <TileContainer
      left={<Tile image={computerTeamImg} frontTitle="Team Lead" backTitle="As a junior level developer I quickly learned and built upon the patterns that existed in the codebase. Within a year I was knowledgable enough to teach other juniors and was promoted to team lead." />}
      right={<Tile image={battleStationImg} frontTitle="Self Taught Developer" backTitle="I love to learn and the fast paced creative nature of software development has become a passion. I've even augmented" />}
    />
    <div className="flex flex-col gap-4">
      <H2 className="mb-4 mx-auto">Accomplishments</H2>
      <div className="flex flex-col gap-2">
        <P>
          With over eight years of experience in the software engineering landscape, I bring a deep-seated expertise in crafting sophisticated solutions that drive innovation and efficiency. My journey through the world of web technologies and computer science has equipped me with a broad and versatile skill set, allowing me to tackle a diverse range of challenges and deliver impactful results.
        </P>
        <P>
          Having navigated various facets of the software development lifecycle, I’ve honed my ability to design and implement scalable systems that meet the ever-evolving demands of today's digital environment. My proficiency spans a spectrum of web technologies, and I am adept at leveraging these tools to build robust, high-performance applications that stand out in their functionality and user experience.
        </P>
        <P>
          My approach combines a rigorous understanding of core computer science principles with a hands-on, problem-solving mindset. This blend of theoretical knowledge and practical application empowers me to not only address complex technical issues but also to anticipate and adapt to emerging trends and technologies.
        </P>
        <P>
          Whether collaborating with cross-functional teams or leading projects independently, I am committed to pushing the boundaries of what's possible and delivering solutions that drive success. My career has been defined by a relentless pursuit of excellence and a passion for innovation, and I am eager to bring this dedication to new and exciting opportunities.
        </P>
      </div>
      <TileContainer
        left={<Tile image={eagleScoutImg} frontTitle="Eagle Scout" backTitle="Always assuming the leadership role when required, and following through on anything I set my sights on." />}
        right={<Tile image={openDroneImg} frontTitle="UAS Pilot Part 107 Licensed" backTitle="I am commercially licensed to fly drones. They are custom built from my own designs and I solder the electronics, assemble the frames, and flash/configure the firmware." />}
      />
      <div className="mosaic">
      </div>
    </div>
    <div className="flex flex-col">
      <H2 className="mb-4 mx-auto">Github Stats</H2>
      <div className="mx-auto my-4">
        <ActivityCalendar
          colorScheme="light"
          theme={{ light: ["#ccffcc", "#80ff80", "#4dff4d", "#1aff1a", "#00cc00"] }}
          data={activityData}
          style={{ fill: "#e6ffe6" }}
          blockMargin={8}
          blockSize={16}
          blockRadius={99}
        />
      </div>
    </div>
    <DownloadResumeButton />
  </Column>
}