import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import HomePage from './pages/HomePage'
import AllBabysittersPage from './pages/AllBabysittersPage'
import BabysitterDetailsPage from './pages/BabysitterDetailsPage'
import AddBabysitterPage from './pages/AddBabysitterPage'
import UpdatePage from './pages/UpdatePage'
import AboutUsPage from './pages/AboutUsPage'
import AdminPage from './pages/AdminPage'

function App() {

  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/babysitters' element={<AllBabysittersPage />}></Route>
      <Route path='/babysitters/:babysitterId' element={<BabysitterDetailsPage />}></Route>
      <Route path='/babysitters/new' element={<AddBabysitterPage />}></Route>
      <Route path='/adminPassword/:babysitterId' element={<AdminPage />}></Route>
      <Route path='/babysitters/:babysitterId/update' element={<UpdatePage />}></Route>
      <Route path='/aboutus' element={<AboutUsPage />}></Route>
      
      <Route path='*' element={<h1>404 Page</h1>}></Route>
    </Routes>
    <Footer />
      

    </div>
  );
}

export default App
