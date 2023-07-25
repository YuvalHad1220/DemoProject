import './App.css';
import CustomDoughnut from './Components/Doughnut';
import CustomGraph from './Components/Graph';
import Navbar from './Components/Navbar';
import AddRakamPage from './Components/AddRakamPage';
import {SiteContextProvider} from './Store/context';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    direction: 'rtl',
  });
  return (
    <ThemeProvider theme={theme}>
    <SiteContextProvider>
      <Navbar />  
      {/* <CustomDoughnut items={[{
        color: "#46B1C9",
        value: 100,
        label: "תקול זמנית"
      },
      {
        value: 20,
        color: "#E2A1E9",
        label: "עובדים"
      }]} />

      <CustomGraph items={[
      {
        value: 23,
        label: "99999999"
      },
      {
        value: 100,
        label: "88888888"
      },
      {
        value: 75,
        label: "7777777"
      },
      {
        value: 10,
        label: "1000000"
      },
      
      ]}/> */}

    {/* <RakamQueryResult /> */}
    <AddRakamPage />
    </SiteContextProvider>
    </ThemeProvider>

  );
}

export default App;
