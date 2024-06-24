import './App.css'
import { Home } from './views/Home'
import { Routes, Route } from 'react-router-dom'
import { Movies } from './views/Movies'
import { MovieDisplay } from './views/MovieDisplay'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        {/* This route is just until login and reg is set up */}
        <Route path='/home' element={ <Home /> } />
        <Route path='/movies' element={ <Movies /> } />
        <Route path='/movies/:id' element={ <MovieDisplay /> } />
      </Routes>
    </>
  )
}

export default App
