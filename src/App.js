import Layout from './Pages/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import SocialPage from './Pages/Social/SocialPage';
import ProjectsPage from './Pages/Projects/ProjectsPage';
import ResumePage from './Pages/Resume/ResumePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#181e27',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1b1c1b',
      paper: '#2f2f2f',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      // secondary: 'rgba(239,236,236,0.54)',
      // disabled: 'rgba(82,66,66,0.38)',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/social",
    element: <SocialPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
]);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
