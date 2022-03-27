import '../styles/App.css'
import Dashboard from './Dashboard';
import Header from './Header';
import { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { Routes, Route } from 'react-router-dom'
import SignUp from './authentication/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getProfileInformation, removeUser, setUser } from '../redux/actions/userActions';
import LogIn from './authentication/LogIn';
import ResetPassword from './authentication/ResetPassword';
import Profile from './authentication/Profile';
import UpdateProfile from './authentication/UpdateProfile';
import BeforeUpdateConfirm from './authentication/BeforeUpdateConfirm';

function App() {
  const [filterBarOpen, setFilterBarOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
      window.addEventListener('click', checkFilterClick)
      return () => window.removeEventListener('click', checkFilterClick)
  }, [])
  
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(setUser(user))
      console.log(user.uid)
      dispatch(getProfileInformation(user.uid))
    } else {
      dispatch(removeUser())
    }
  })

  function checkFilterClick(e) {
      if (e.target.closest('#filter-bar') == null) {
          setFilterBarOpen(false)
      }
  }
  
  return (
    <>
    <Routes>
      <Route path="/" element={<><Header filterBarOpen={filterBarOpen} setFilterBarOpen={setFilterBarOpen} /><Dashboard /></>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/confirm-account" element={<BeforeUpdateConfirm />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
    <div id="modal-display"></div>
    </>
  );
}

export default App;
