import logo from './logo.svg';
 import Home from './Home/Home';
import Employee from './Employee/Employee'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
 
        <Routes>
        <Route path='/' exact element={<Home/>} /> 
        <Route path='/Employee/Employee' element={<Employee />} /> 

    </Routes>
 
  );
}

export default App;
