import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const teamMembers = [
  {
    name: 'Naziba Radia',
    role: 'PM',
    blurb: 'Manages the project and coordinates the team',
  },
  {
    name: 'Hoang Vo',
    role: 'Developer',
    blurb: 'Builds and implements the application features',
  },
  {
    name: 'Mirna Isso',
    role: 'Developer',
    blurb: 'Tests the application and application features',
  },
  {
    name: 'Jerome Mangalindan',
    role: 'UX Designer',
    blurb: 'Designs the user interface and experience',
  },
]

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-md border border-zinc-600 bg-white text-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-600 px-6 py-4">
        <h1 className="text-xl font-bold text-zinc-900">Digital Marketing Team - Team A</h1>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-zinc-600" />
          <span className="font-medium text-zinc-900">User</span>
        </div>
      </div>

      <div className="px-6 py-6">
        <h2 className="mb-6 text-center text-xl font-bold text-zinc-900">Meet the Team</h2>

        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex min-h-[360px] flex-col items-center rounded-md border border-zinc-600 px-3 py-5 text-center"
            >
              <div className="mb-4 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full border border-zinc-600" />
                <div className="mt-2 h-16 w-14 rounded-t-full border border-zinc-600" />
              </div>

              <p className="text-sm font-medium text-zinc-900">{member.name}</p>
              <p className="mt-1 text-sm text-zinc-900">{member.role}</p>
              <p className="mt-5 max-w-[150px] text-sm leading-snug text-zinc-900">
                {member.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}