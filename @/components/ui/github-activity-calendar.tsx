import ActivityCalendar, {Activity} from 'react-activity-calendar';

import ContributionsData from "../../../data/github-contributions.json";

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

export const GithubActivityCalendar = () => 
  <ActivityCalendar
    colorScheme="light"
    theme={{ light: ["#ccffcc", "#80ff80", "#4dff4d", "#1aff1a", "#00cc00"] }}
    data={activityData}
    style={{ fill: "#e6ffe6" }}
    blockMargin={8}
    blockSize={16}
    blockRadius={99}
  />

