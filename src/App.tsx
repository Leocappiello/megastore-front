import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './routes/dashboard';
import SignupLayout from "./routes/signup";

function App() {
  return (
   <>
      <div className="App" style={{width: '100%', height: '100%'}}>
        <Routes>
          <Route path="/" element={<div>/</div>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupLayout />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </>
 );
  
}

export default App
