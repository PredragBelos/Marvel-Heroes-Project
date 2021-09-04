import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { caracterURL } from './data/publicData';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { getHeroData } from './services/createHeroesList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

getHeroData(caracterURL).then(result => {
  console.log(result);
})