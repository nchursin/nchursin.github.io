import * as React from 'react';
import './App.css';
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'
import * as ReactGA from 'react-ga';

class App extends React.Component {
  public render() {
    ReactGA.initialize('UA-126238638-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
