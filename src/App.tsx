import * as React from 'react';
import './App.css';
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'

class App extends React.Component {
  public render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Menu/>
        </header>
        <div className="App-body">
          <Main/>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
