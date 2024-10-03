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


const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`

export async function retrieveContributionData(userName: string): Promise<ApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`
  const body = {
    query,
    variables
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify(body)
  })
  return res.json()
}
