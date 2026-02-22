import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, type LoaderFunctionArgs } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { courses } from './data'

// Маршруттарды жариялау
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Ортақ Layout
    children: [
      {
        index: true, // Басты бет (/)
        element: <Home />,
      },
      {
        path: "courses",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: ":id",
            element: <CourseDetail />,
            loader: async ({ params }: LoaderFunctionArgs) => {
              const idParam = params.id;
              const id = idParam ? Number(idParam) : NaN;
              const course = courses.find((c) => c.id === id);
              if (!course) {
                throw new Error('Course not found');
              }
              return course;
            },
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*", // Қалған барлық қате жолдар үшін
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)