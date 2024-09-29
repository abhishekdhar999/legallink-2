import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

import LoginUser from './Components/LoginUser';
import SignupUser from './Components/SignupUser';

import Teachers from './Pages/Teachers';
import ChatPage from './Pages/ChatPage';
import UserProfile from './Pages/UserProfile';
import Videos from './Pages/Videos';
function App() {
  return (
    <>
    

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginuser" element={<LoginUser/>}> </Route>
        <Route path="/signupuser" element={ <SignupUser/>}> </Route>
        
        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/chats' element={<ChatPage/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>}></Route>
        <Route path='/videos' element={<Videos/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
