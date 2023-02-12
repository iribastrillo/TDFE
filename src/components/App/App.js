import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import './App.css';
import Login from './Login';
import Transactions from './Transactions/Transactions';

function App() {
  const user = useSelector ((state) => state.session.value)
  return (
    <div className="App">
      {user === undefined ? <Login/> : <Transactions/>}
    </div>
  );
}

export default App;
