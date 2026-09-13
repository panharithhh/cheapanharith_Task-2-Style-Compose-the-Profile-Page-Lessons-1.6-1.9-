import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/ProjectCard'
import { Container } from '@/components/Container'
import { InfoTag } from '@/components/InfoTag'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <header className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 md:flex-row md:items-center md:justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">Chea Panharith</h1>
              <Badge variant="default">Available</Badge>
            </div>
            <p className="mt-1 text-sm text-gray-700">Frontend Engineer</p>
            <p className="text-xs text-gray-500">Phnom Penh, Cambodia</p>
          </div>
          <Button variant="default">
            Follow
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <aside className="space-y-6 md:col-span-1">
            <Container title="About">
              <p className="text-sm text-gray-700 leading-relaxed">
                Building web applications with React, Tailwind CSS, and modern UI systems.
              </p>
            </Container>

            <Container title="Details">
              <InfoTag label="Experience" value="3 Years" />
              <InfoTag label="Focus" value="React & UI" />
              <InfoTag label="Availability" value="Full-time" />
            </Container>
          </aside>

          <main className="space-y-6 md:col-span-2">
            <Container title="Projects">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ProjectCard
                  title="Todo App"
                  status="Shipped"
                  description="A fast task manager with dark mode and local persistence."
                />

                <ProjectCard
                  title="Tokenizer Tool"
                  status="In Progress"
                  description="A custom BPE tokenizer built in Python for language modeling."
                />
              </div>
            </Container>
          </main>

        </div>

      </div>
    </div>
  )
}
