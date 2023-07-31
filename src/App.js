import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { routerPath } from './constants/route';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routerPath.home} element={<Home/>} />
        <Route path={routerPath.categories} element={<CategoryMovies/>} />
        <Route path={routerPath.invalid} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
