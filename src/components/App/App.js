import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboad from './Dashboard/Dashboard';
import Login from './Login';
import Transactions from './Transactions/Transactions';
import SignIn from './SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/dashboard' element={<Dashboad/>}></Route>
        <Route path='/transactions' element={<Transactions/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
