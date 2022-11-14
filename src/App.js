import Layout from './Pages/Layout';
import HomePage from './Pages/Home/HomePage'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

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


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
