import React from 'react'
import './App.scss';

//COMPONENTS
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import ApiService from '../../services/ApiService';
//COMPONENTS

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      reviewed: []
    }
  }

  render() {
    return (
      <div className="container" >
        <Nav />
        <Header />
        <Main restaurants={this.state.restaurants} />
        <Footer />
      </div>
    );
  }
}

export default App;
