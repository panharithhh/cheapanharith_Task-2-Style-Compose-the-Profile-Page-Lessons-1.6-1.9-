import React from 'react'

export function SectionCard({ title, icon: Icon, action, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-indigo-600" />}
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
