import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Book from './components/Book/Book'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'

function App() {

  return (
    <>
      <div className="">
        <div className="bg-head bg-[#B52B1D]">
          <div className="banner-bg">
            <Navbar></Navbar>
            <Banner></Banner>
          </div>
        </div>
        <About></About>
        <Popular></Popular>
        <Book></Book>
      </div>
    </>
  )
}

export default App
