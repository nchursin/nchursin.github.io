import * as React from 'react';
import './App.css';
import Menu from './components/menu'
import Main from './components/main'

class App extends React.Component {
  public render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Menu/>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
