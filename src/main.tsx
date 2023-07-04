import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

library.add(
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
