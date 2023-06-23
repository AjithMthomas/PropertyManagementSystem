import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Accounts/login';
import HomeaPage from './pages/Userside/HomeaPage';
import Properties from './pages/Userside/PropertiesList';
import SingleProperties from './pages/Userside/singleProperty'


function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          {/* account */}
            <Route path='login' element ={<LoginPage/>}/> 

          {/* userside */}
          <Route path='/' element ={<HomeaPage/>}/> 
          <Route path='properties' element ={<Properties/>}/> 
          <Route path='singleProperties' element ={<SingleProperties/>}/> 

        </Routes>
    </Router>
    </div>
  );
}

export default App;
