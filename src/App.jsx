import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Book from './components/Book/Book'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-head bg-[#B52B1D]">
          <div className="banner-bg">
            <Navbar></Navbar>
            <Banner></Banner>
          </div>
        </div>
        <About></About>
        <Popular></Popular>
        <Book></Book>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
