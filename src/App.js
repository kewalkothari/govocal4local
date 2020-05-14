import React from 'react';
import logo from './logo.svg';
import ComingSoon from './static-pages/coming-soon/ComingSoon';
import Loader from './components/Loader/Loader';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ComingSoon/>
    </div>
  );
}

export default App;
