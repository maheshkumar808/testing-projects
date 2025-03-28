import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import Todo from '../src/todo';
import TempratureConverter from './tempratureConverter';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/todo" element={<Todo />} />
        <Route
          path="/project/temperature-converter"
          element={<TempratureConverter />}
        />
      </Routes>
    </Router>
  );
}

export default App;
