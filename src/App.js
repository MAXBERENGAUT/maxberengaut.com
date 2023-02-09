import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Music from './pages/Music'
import Photos from './pages/Photos'
import Stories from './pages/Stories'
import Story from './pages/Story'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/movies' element={<Movies />} />
      <Route exact path='/music' element={<Music />} />
      <Route exact path='/photos' element={<Photos />} />
      <Route exact path='/stories' element={<Stories />} />
      <Route exact path='/stories/the_electricians' element={<Story />} />
      {/* <Route path='/stories/:story' element={<Story />} /> */}
    </Routes>
  )
}

export default App;
