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

library.add(
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
