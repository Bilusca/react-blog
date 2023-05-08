import { ReactNode } from 'react'
import { Header } from '../Header'

export function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <main className="bg-app-base-background w-full min-h-screen">
      <Header />
      {children}
    </main>
  )
}
