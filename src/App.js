import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import imgdata from "./imgdata.json";
import Img from "./components/Img";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Score from "./components/Scorecard";

class App extends Component {
  //Establish initial state
  state = {
    paintings: imgdata,
    clicked: [],
    score: 0
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  handleClick(id) {
    console.log(id)
    let shuffled = this.shuffle(this.state.paintings)

    //if an image hasn't been clicked
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({
        //shuffle the image array
        paintings: shuffled,
        //merge the previously empty clicked array with the newly populated clicked array
        clicked: [...this.state.clicked, id],
        //change the score
        score: this.state.score + 1
      })

      //if an image has been clicked
    } else {
      this.setState({
        paintings: shuffled,
        clicked: [],
        score: 0
      })

    }
    //console.log("Clicked");
  }
  componentDidMount() {

  }
  //In render() you'll loop through the json data and set up props for the Img component
  render() {
    return (
      <div>
        <Nav />
        <Score>
          <h1>{this.state.score}</h1>
        </Score>
        <Wrapper>
          <div id="img-container" className="col-lg-3 col-md-3">
            {this.state.paintings.map(image => (
              <Img
                key={image.id}
                image={image.image}
                handleClick={this.handleClick}
                id={image.id}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    )
  }

}

export default App;