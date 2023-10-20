import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import ErrorPage from './components/ErrorPage/ErrorPage'
import JobDetails from './components/JobDetails/JobDetails'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/applied',
        element: <AppliedJobs/>
      },
      {
        path: '/job/:id',
        loader: () => fetch('/jobs.json'),
        element: <JobDetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
