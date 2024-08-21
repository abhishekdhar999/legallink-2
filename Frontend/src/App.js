import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Dashboard from './Components/Dashboard';
import LoginAdvocate from './Components/LoginAdvocate';
import LoginUser from './Components/LoginUser';
import SignupAdvocate from './Components/SignupAdvocate';
import SignupUser from './Components/SignupUser';
function App() {
  return (
    <>
    

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/loginAdvocate' element={<LoginAdvocate/>}></Route>
        <Route path="/loginUser" element={<LoginUser/>}> </Route>
        <Route path="/signupUser" element={ <SignupUser/>}> </Route>
        <Route path='/signupAdvocate' element={<SignupAdvocate/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
