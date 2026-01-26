import { ReactNode } from 'react'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function EmptyState({ 
  icon, 
  title, 
  description, 
  className = '' 
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="flex justify-center mb-4 text-neutral-300">
        <div className="w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-heading text-lg font-medium text-neutral-600 mb-2">
        {title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  )
}