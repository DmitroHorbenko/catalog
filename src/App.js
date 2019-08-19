import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header'
import Content from './Component/Content'
import Sidebar from './Component/Sidebar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      albums: [],
      currentAlbum: 1,
      cart: []
    };

    this.getAllAlbums();
    this.getAllPhoto()
  }

  getAllAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => res.json())
        .then((res)=> this.setState({albums: res}))
  }

  getAllPhoto() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((res)=> this.setState({photos: res}))
  }

  setCurrentAlbum = (value) => {
    this.setState({ currentAlbum: +value })
  }

  addBuy = (id) => {
    let newElement = this.state.photos.find(element => element.id === id)
    this.setState({
      cart: [...this.state.cart, newElement]
    })
  }

  render() {
    return (
        <section>
          <div className={"header"}><Header cart={this.state.cart}/></div>
          <div className={"sidebar"}><Sidebar albums={this.state.albums} setCurrentAlbum={this.setCurrentAlbum}/></div>
          <div className={"content"}><Content photos={this.state.photos} currentAlbum={this.state.currentAlbum}  addBuy={this.addBuy}/></div>
        </section>
    )
  }
}

export default App;