import React from 'react'

export function InfoItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3 text-sm">
      {Icon && (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-500">{label}</span>
        <span className="font-medium text-gray-900">{value}</span>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg p-2 transition-colors hover:bg-gray-50"
      >
        {content}
      </a>
    )
  }

  return <div className="p-2">{content}</div>
}
