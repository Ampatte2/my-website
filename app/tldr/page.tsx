import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { parse, differenceInCalendarYears, differenceInCalendarMonths } from 'date-fns';
import { fr } from 'date-fns/locale';
import ActivityCalendar, { Activity } from "react-activity-calendar";
import { Button } from "@/components/ui/button";
import { Column } from "@/components/ui/flex";
import React, { PropsWithChildren } from 'react';
import { ApiResponse, retrieveContributionData } from "../../util/api/github-contributions";
import { count } from "console";
import { DownloadResumeButton } from "@/components/ui/downloadResume";
import { H1, H2, H3, H4, OL, P } from "@/components/ui/elements";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/tooltip"

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

const Timeline = (props: TimelineProps) => {
  return (
    <div className={cn("flex flex-col", props.className)}>
      {props.data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content">
            <H2>{item.title}</H2>
            <H4 className="mt-2">{formatDate.format(item.startDate)} to {formatDate.format(item.endDate)}</H4>
            <H4>{formatEmployedLength(item.startDate, item.endDate)}</H4>
            <P className="mt-2">{item.content}</P>
          </div>
        </div>
      ))}
    </div>
  );
};

const Tile = (props: PropsWithChildren<object>) => <div className="mosaic-tile"><p className="m-auto">{props.children}</p></div>;

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

  return <Column classes="gap-1">
    <H1>Andrew M. Patterson</H1>
    <H2>Software Engineer, UAS Pilot, Tinkerer</H2>
    <P>There is no such thing as a problem, only a challenge waiting to be solved.</P>
    <H3>Accomplishments</H3>
    <div className="mosaic">
      <Tile>Self Taught Developer</Tile>
      <Tile>Engineering Team Lead</Tile>
      <Tile>Eagle Scout</Tile>
      <Tile>Part 107 Licensed</Tile>
    </div>
    <div className="md:grid md:grid-cols-5 flex flex-col">
      <Timeline data={data} className="col-span-3" />
      <div className="col-span-2 flex flex-col gap-4">
        <H3>Professional History</H3>
        <P>
          After getting straight A's and pre-med requirements to become a Psychiatrist I realized that wasn't for me.
          I took a few years and taught myself how to program, and fell in love with the challenges.
          In order to get my foot in the door I took a junior position at a trading company startup.
        </P>
        <P>
          Quickly I rose to be one of the best performing juniors, but the company did not secure additional funding.
          My next opportunity arose at a Food Service startup within a year I was offered a promotion and a raise, and when the company began to expand I was promoted to Team Lead.
          I was in charge of managing the "Core" Epic, which encompased a variety of projects and routine maintenance on the site.
          Before long I was spear-heading month long features managing a team of five.
        </P>
      </div>
    </div>
    <ActivityCalendar colorScheme="light" theme={{ light: ['#39d353', '#0e4429'] }} data={activityData} />
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
    <DownloadResumeButton />
    <Button>Full Site</Button>
  </Column>
}