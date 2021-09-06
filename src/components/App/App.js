import { Route } from 'react-router-dom';
import { Home } from '../Home page/home';
import { singleCharacterPage } from '../SingleCharacterPage/singleCharacterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>
      <Route path="/singleCharacterPage" component={singleCharacterPage} />
      {/* <Redirect from="/" to="/home"/> */}
     
    </div>
  );
}

export default App;
