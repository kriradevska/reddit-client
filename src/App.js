import React from 'react';

import { Header } from './components/header/header';
import { Posts } from './components/posts/posts';
import { Subredits } from './components/subredits/subredits';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Posts />
        <Subredits />
      </div>
    </div>
  );
}

export default App;
