import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import Todo from '../src/todo';
import TempratureConverter from './tempratureConverter';
import WeatherApp from '/src/weatherApp';
import Authentication from '../src/authentication/index';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';

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
        <Route path="/project/weatherApp" element={<WeatherApp />} />
        <Route path="/project/authentication" element={<Authentication />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
