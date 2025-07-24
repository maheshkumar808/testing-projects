import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import Todo from '../src/todo';
import TempratureConverter from './tempratureConverter';
import WeatherApp from '/src/weatherApp';
import Authentication from '../src/authentication/index';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import Counter from '../src/counter/index';
import Jsonplaceholder from '/src/jsonplaceholder/index';
import Posts from '/src/jsonplaceholder/Posts';
import Comments from './jsonplaceholder/Comments';

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
        <Route path="/counter" element={<Counter />} />
        <Route path="/jsonplaceholder/api" element={<Jsonplaceholder />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
