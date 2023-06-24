import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BASE_URL } from './components/config';
import LoginPage from './components/Accounts/login';
import HomeaPage from './pages/Userside/HomeaPage';
import Properties from './pages/Userside/PropertiesList';
import SingleProperties from './pages/Userside/singleProperty'
import Register from './components/Accounts/Register'
import axios from 'axios';
import AdminHome from './pages/Admin/AdminHome'


function App() {
  axios.defaults.baseURL = BASE_URL;
  return (
    <div className="App">
    <Router>
        <Routes>
          {/* account */}
            <Route path='login/' element ={<LoginPage/>}/> 
            <Route path='register/' element ={<Register/>}/> 

          {/* userside */}
          <Route path='/' element ={<HomeaPage/>}/> 
          <Route path='properties/' element ={<Properties/>}/> 
          <Route path='/singleProperties/:id' element ={<SingleProperties/>}/> 

          {/* Admin dashboard */}
          <Route path='/AdminDashboard' element ={<AdminHome/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
