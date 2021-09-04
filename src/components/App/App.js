import { Redirect, Route } from 'react-router-dom';
import { Home } from '../Home page/home';
import './App.css';
import { Card } from './Card/card';

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>

      <Redirect from="/" to="/home"/>
     
    </div>
  );
}

export default App;
