import React from 'react';
import { AppShelf } from './components/AppShelf';
import { TopNav } from './components/TopNav';

function App() {
  return (
    <div className="container"> 
        <AppShelf/>
        <TopNav/>
    </div>
  );
}

export default App;
