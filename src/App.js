import React, { Component } from "react";
import Header from "./components/Header";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    score: 0,
    highestScore: 0,
    ids: []
  };

  checkScore = id => {
    const value = id;

    for (let i = this.state.pictures.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = this.state.pictures[i];
          this.state.pictures[i] = this.state.pictures[j];
          this.state.pictures[j] = temp;
    }

    if(this.state.ids.indexOf(value) === -1) {
      this.setState({ score: this.state.score + 1 });
      this.state.ids.push(value);
    }
    else {
      if(this.state.score > this.state.highestScore) {
        this.setState({ highestScore: this.state.score});
      }
      this.setState({
        score: 0,
        ids: []
      });
    }
    if(this.state.ids.length === 12) {
      this.setState({ 
        score: 0,
        ids: []
      })
    };
  }

  render() {
    return (
      <Wrapper>
      <div className="content">
        <Header score={this.state.score} highScore={this.state.highestScore}/>
        <div className="pictures">
          {this.state.pictures.map(picture =>(
            <PictureCard
            key={picture.id.toString()}
            id={picture.id}
            name={picture.name}
            image={picture.image}
            checkScore={this.checkScore}
            />
          ))}
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default App;
