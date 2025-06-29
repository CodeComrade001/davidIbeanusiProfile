"use client"

import * as React from "react"
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const skillsData = [
  { skill: "HTML5", rating: 75, reason: "Learn semantic markup & ARIA" },
  { skill: "CSS3", rating: 70, reason: "Master css animations" },
  { skill: "JavaScript", rating: 65, reason: "Deepen closure & async patterns" },
  { skill: "TypeScript", rating: 80, reason: "Practice advanced generics" },
  { skill: "React", rating: 65, reason: "Optimize hooks & context usage" },
  { skill: "Next.js", rating: 75, reason: "Explore ISR & advanced routing" },
  { skill: "Node.js", rating: 70, reason: "Improve streams & clustering" },
  { skill: "Express.js", rating: 70, reason: "Harden middleware & error handling" },
  { skill: "PostgreSQL", rating: 60, reason: "Write complex queries & indexing" },
  { skill: "Tailwind CSS", rating: 65, reason: "Build custom plugins & theming" },
  { skill: "Axios", rating: 75, reason: "Handle interceptors & error flows" },
  { skill: "jQuery", rating: 50, reason: "Prefer modern DOM & fetch APIs" },
  { skill: "Vite", rating: 60, reason: "Tune build & plugin ecosystem" },
  { skill: "Vercel", rating: 70, reason: "Master deployments & edge functions" },
  { skill: "Render", rating: 70, reason: "Optimize CI/CD pipelines" },
  { skill: "Python", rating: 10, reason: "Just started" },
  { skill: "Django", rating: 10, reason: "Just started" },
  { skill: "Flask", rating: 10, reason: "Just started" },
]

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const { rating, reason } = payload[0].payload
  return (
    <div className="bg-white p-2 rounded shadow">
      <strong>{rating}%</strong>
      <div className="text-xs text-gray-600">{reason}</div>
    </div>
  )
}

export default function SkillsChart() {
  return (
    <section className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
        Professional Skills
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={skillsData}
          barCategoryGap="20%"
          margin={{ top: 10, right: 20, left: 0, bottom: 50 }}
        >
          <defs>
            <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="skill"
            axisLine={false}
            tickLine={false}
            angle={-30}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar
            dataKey="rating"
            fill="url(#skillGradient)"
            barSize={12}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
