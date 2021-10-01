import React from 'react'
import './App.scss';

//COMPONENTS
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
//COMPONENTS


class App extends React.Component {

  render() {
    return (
      <div className="container" >
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
