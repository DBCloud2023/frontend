import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Users from './components/users/Users';
import Hello from './components/Hello';
import Navigation from './components/common/Navigation';
import Todos from './components/todos/Todos';

function App() {
  return (<Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/users" element={<Users perPage={5} />} />
      <Route path="/todos" element={<Todos perPage={10} />}/>
    </Routes>
  </Router>);
}

export default App;
