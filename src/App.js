import React from 'react';
import { BooksQuestionaire } from './components';
import EntertainmentQues from './components/EntertainmentQues';
import RoomScreen from './components/RoomScreen';
import { Route, Routes} from 'react-router-dom';
import ScienceQuestionaire from './components/ScienceQuestionaire';
import SportsQuestionaire from './components/SportsQuestionaire';


const App = () => {
   return (
    <>
        <div>
          <Routes>
            <Route exact path='/' element={<RoomScreen/>} />
            <Route path='/books-quiz' element={<BooksQuestionaire/>} />
            <Route path='/entertainment-quiz' element={<EntertainmentQues/>} />
            <Route path='/science-quiz' element={ <ScienceQuestionaire/>} />
            <Route path='/sports-quiz' element={<SportsQuestionaire/>} />
          </Routes>
        </div>
     
    </>
  )
}

export default App
