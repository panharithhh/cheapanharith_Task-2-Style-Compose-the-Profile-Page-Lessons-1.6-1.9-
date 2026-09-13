import React from 'react'

export function SkillBadge({ skill, category }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
      <span className="text-sm font-medium text-gray-900">{skill}</span>
      <span className="text-xs text-gray-500">{category}</span>
    </div>
  )
}
