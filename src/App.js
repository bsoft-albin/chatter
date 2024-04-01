
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { ToastContainer } from 'react-toastify';

import Login from './Login';
import Forget from './Forget';
import Register from './Register';
import Dashboard from './Dashboard';
import ReduxDemo from './ReduxDemo';
import Crud from './Crud';
import GridData from './GridData';
import HtmlControls from './HtmlControls';
import StoreData from './StoreData';

function App() {

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-in' element={<Register />} />
          <Route path='/forget-password' element={<Forget />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/redux-demo' element={<ReduxDemo /> } />
          <Route path='/crud-sample' element={<Crud /> } />
          <Route path='/data-grid' element={<GridData /> } />
          <Route path='/html-elements' element={<HtmlControls /> } />
          <Route path='/redux-store' element={<StoreData /> } />
        </Routes>
      </Router>
    </div>
  );

}

export default App;