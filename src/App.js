import React from 'react';
import { Route} from 'react-router-dom';
import HomeParentComponent from './components/home/parent/HomeParentComponent';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomeParentComponent} />
    </div>
  );
}

export default App;
