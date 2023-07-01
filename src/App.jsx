import { Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Main from "./Routes/Main"
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ThemeProvider from './Contexts/ThemeContext'


function App() {

  return (
    <>
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/home" element={ <Main /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/dentist/:id" element={ <Detail /> } />
        <Route path="/favs" element={ <Favs /> } />
        <Route path='/' element={ <Navigate to="/home" /> }/>
      </Routes>
      <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
