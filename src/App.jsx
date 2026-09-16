import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/ProjectCard'
import { Container } from '@/components/Container'
import { InfoTag } from '@/components/InfoTag'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">

        <header className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-gray-900">Chea Panharith</h1>
              <Badge variant="default">Available</Badge>
            </div>
            <p className="text-sm text-gray-700">Student</p>
            <p className="text-xs text-gray-500">Phnom Penh, Cambodia</p>
          </div>
          <Button variant="default">Follow</Button>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <aside className="md:col-span-1">
            <Container title="Details">
              <InfoTag label="Role" value="Student" />
              <InfoTag label="Focus" value="React & UI" />
              <InfoTag label="Availability" value="Full-time" />
            </Container>
          </aside>

          <main className="md:col-span-2">
            <Container title="Projects">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ProjectCard
                  title="Todo App"
                  status="Shipped"
                  description="A fast task manager with dark mode."
                />
                <ProjectCard
                  title="Portfolio Site"
                  status="In Progress"
                  description="Personal profile built with React & Tailwind."
                />
              </div>
            </Container>
          </main>
        </div>

      </div>
    </div>
  )
}
