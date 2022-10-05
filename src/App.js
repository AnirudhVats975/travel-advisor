import './App.css';
import Header from '../src/components/Header/Header';
import List from '../src/components/List/List';
import Map from '../src/components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { CssBaseline, Grid} from '@mui/material';

function App() {
  return (
    <>
       <CssBaseline/>
     <Header/>
     <Grid container spacing={2} style={{width :"100%"}}>
      <Grid item >
      <List/>
      </Grid>
      <Grid item >
      <Map/>
      </Grid>
    
     </Grid>
     <PlaceDetails/>
    </>
  );
}

export default App;
