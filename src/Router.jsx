import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Example1 from './pages/Example1.jsx'
import Error from './pages/Error.jsx'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Example1 />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}
