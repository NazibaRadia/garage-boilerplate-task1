import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Team',
}

const teamMembers = [
  {
    name: 'Naziba Radia',
    role: 'PM',
    blurb: 'Manages the project and coordinates the team',
    image: '/team/PM.png',
  },
  {
    name: 'Hoang Vo',
    role: 'Developer',
    blurb: 'Builds and implements the application features',
    image: '/team/Dev1.png',
  },
  {
    name: 'Mirna Isso',
    role: 'Developer',
    blurb: 'Tests the application and application features',
    image: '/team/Dev2.png',
  },
  {
    name: 'Jerome Mangalindan',
    role: 'UX Designer',
    blurb: 'Designs the user interface and experience',
    image: '/team/UX.png',
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
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} profile photo`}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full border border-zinc-600 object-cover"
                />
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