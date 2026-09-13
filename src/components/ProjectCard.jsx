import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// shadcn piece composed of Card + Badge + Button
export function ProjectCard({ title, status, description }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-gray-900">{title}</CardTitle>
          <Badge variant="default">{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">
          View project
        </Button>
      </CardFooter>
    </Card>
  )
}
