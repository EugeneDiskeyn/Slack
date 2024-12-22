import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './modules/SignIn/SignIn.jsx'
import SignUp from './modules/SignUp/SignUp.jsx';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<SignUp />} />
        <Route path = 'signIn' element = {<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
