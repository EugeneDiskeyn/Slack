import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./modules/SignIn/SignIn.jsx"
import SignUp from "./modules/SignUp/SignUp.jsx";
import Main from "./modules/Main/Main.jsx";
import Page404 from "./modules/Page404/Page404.jsx";
import "./App.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<SignUp />} />
        <Route path = "signIn" element = {<SignIn />} />
        <Route path = "main" element = {<Main />} />
        <Route path = "*" element = {<Page404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
