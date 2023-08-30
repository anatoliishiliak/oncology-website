import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import HomeLayout from '../layouts/HomeLayout';
import HistoryLayout from '../layouts/HistoryLayout';
import TeachersLayout from '../layouts/TeachersLayout';
import CourseLayout from '../layouts/CourseLayout';
import ErrorPage from '../components/common/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <HomeLayout />,
  },
  {
    path: '/history',
    element: <HistoryLayout />,
  },
  {
    path: '/teachers',
    element: <TeachersLayout />,
  },
  {
    path: '/course',
    element: <CourseLayout />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
]);
