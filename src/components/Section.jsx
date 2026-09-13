import React from 'react'

export function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
