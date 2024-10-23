"use client"
import ActivityCalendar, {Activity} from 'react-activity-calendar';

import ContributionsData from "../../../data/github-contributions.json";
import { useEffect, useState } from 'react';

export type ContributionDay = {
  contributionCount: number
  date: string
}

export type ApiResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number
          weeks: {
            contributionDays: ContributionDay[]
          }[]
        }
      }
    }
  }
}

const GitHubData: ApiResponse = ContributionsData;

const highestActivity = GitHubData.data.user.contributionsCollection.contributionCalendar.weeks.reduce((prevCount, curr) => {
  const currCount = curr.contributionDays.reduce((count, currDay) => currDay.contributionCount > count ? currDay.contributionCount : count, 0)
  return currCount > prevCount ? currCount : prevCount;
}, 0)

const activityData = ContributionsData.data.user.contributionsCollection.contributionCalendar.weeks.reduce<Array<Activity>>((prev, curr) =>
  prev.concat(
    curr.contributionDays.map(_ => ({ date: _.date, count: _.contributionCount, level: _.contributionCount / highestActivity * 4 }))
  ), [])

const sidebarPadding = 320;
const weeksInYear = 52;
// 2 is accomidating for lack of margin on exterior
const blockMarginCount = weeksInYear - 2;
const sideLegendSize = 150;

const calculateBlockSize = (paddingX: number, blockMargin: number) => {
  const windowMinusSidebarPadding = globalThis.window?.outerWidth - paddingX;
  const windowNoPaddingMinusBlockMargin = windowMinusSidebarPadding - (blockMargin * blockMarginCount) - sideLegendSize;
  return    windowNoPaddingMinusBlockMargin / weeksInYear;

}

export const GithubActivityCalendar = () => {
  const [innerWidth, setInnerWidth] = useState(globalThis.window?.innerWidth);
  const [blockSize, setBlockSize] = useState(16);
  const [blockMargin, setBlockMargin] = useState(16);
  const [fontSize, setFontSize] = useState(24);
  const [showWeekDayLabels, setShowWeekDayLabels] = useState(true);

  useEffect(() => {
    const updateInnerWidth = () => setInnerWidth(globalThis.window?.innerWidth);
    globalThis.addEventListener("resize", updateInnerWidth);
    return () => globalThis.removeEventListener("resize", updateInnerWidth);
  },[]);

  useEffect(() => {
    if (innerWidth) {
      if (innerWidth > 1600) {
        const blockMarginLg = 16;
        setBlockSize(calculateBlockSize(sidebarPadding, blockMarginLg));
        setBlockMargin(blockMarginLg);
        setShowWeekDayLabels(true);
        setFontSize(24);
      } else if (innerWidth > 768) {
        const blockMarginMd = 8;
        setBlockSize(calculateBlockSize(sidebarPadding, blockMarginMd))
        setBlockMargin(blockMarginMd);
        setShowWeekDayLabels(true);
        setFontSize(16);
      } else {
        const blockMarginSm = 4;
        setBlockSize(calculateBlockSize(0, blockMarginSm))
        setBlockMargin(blockMarginSm);
        setShowWeekDayLabels(false);
        setFontSize(8);
      }
    }
  },[innerWidth]);

  return <ActivityCalendar
    colorScheme="light"
    theme={{ light: ["#FFFFFF", "#80ff80", "#4dff4d", "#1aff1a", "#00cc00"] }}
    data={activityData}
    style={{ fill: "#e6ffe6" }}
    blockMargin={blockMargin}
    blockSize={blockSize}
    blockRadius={10}
    fontSize={fontSize}
    showWeekdayLabels={showWeekDayLabels}
    labels={{
      totalCount: " ", 
      legend: {
        more: `${highestActivity} Contributions`,
        less: "0 Contributions"
      }
    }}
  />
}

