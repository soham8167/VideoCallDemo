import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import CreateMeeting from './Pages/createMeeting';
import VideoCallPage from './Pages/VideoCallPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/room/:roomID" element={< VideoCallPage/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
