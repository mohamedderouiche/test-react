

import './App.css'


import { Route, Routes } from 'react-router-dom'
import Competitions from './Competitions'
import AddEvent from './AddCompetition'
import NotFound from './NotFound'

function App() {
 

  return (
   <Routes>
    <Route path="/competition" element={<Competitions />} />
    <Route path="/add" element={<AddEvent />} />
    <Route path="*" element={<NotFound />} />
    
   </Routes>
  )
}

export default App
