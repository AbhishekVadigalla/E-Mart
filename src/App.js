import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Stores/Pages/LandingPage';
import Kitchen from './Stores/Components/Kitchen';
import Mobiles from './Stores/Components/Mobiles';
import MobilePage from './Stores/Pages/MobilePage';
import ComputerPage from './Stores/Pages/ComputerPage';
import WatchesPage from './Stores/Pages/WatchesPage';
import MensPage from './Stores/Pages/MensPage';
import WomanPage from './Stores/Pages/WomanPage';
import FurniturePage from './Stores/Pages/FurniturePage';
import FridgePage from './Stores/Pages/FridgePage';
import ACPage from './Stores/Pages/ACPage';
import KitchenPage from './Stores/Pages/KitchenPage';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/MobilePage' element={<MobilePage/>}/>
            <Route path='/ComputerPage' element={<ComputerPage/>}/>
            <Route path='/WatchesPage' element={<WatchesPage/>}/>
            <Route path='/MensPage' element={<MensPage/>}/>
            <Route path='/WomanPage' element={<WomanPage/>}/>
            <Route path='/FurniturePage' element={<FurniturePage/>}/>
            <Route path='/KitchenPage' element={<KitchenPage/>}/>
            <Route path='/FridgePage' element={<FridgePage/>}/>
            <Route path='/ACPage' element={<ACPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
