import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboad from './Dashboard/Dashboard';
import Login from './Login';
import Transactions from './Transactions/Transactions';
import SignIn from './SignIn';
import PrivateRoute from './Authentication/PrivateRoute';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/dashboard' 
          element={
          <PrivateRoute>
            <Dashboad/>
          </PrivateRoute>
        }></Route>
        <Route path='/transactions' 
          element={
          <PrivateRoute>
            <Transactions/>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
