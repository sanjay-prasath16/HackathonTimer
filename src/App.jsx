import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Timer from './Pages/Timer'
import BouncyText from './Components/BouncyText';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/bouncyText" element={<BouncyText />} />
        </Routes>
    </Router>
  );
}

export default App;