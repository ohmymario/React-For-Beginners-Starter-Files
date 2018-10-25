import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  // Add fish to state
  addFish = (fish) => {
    // Here you never touch the current state
    // instead copy then insert new state changes into copy
    // then replace current state. 

    // 1. Create a copy of the state 
    const fishes = { ...this.state.fishes }
    // 2. Add our new fish to the 'fishes' variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    })
  }

  // Populate 9 Fishes into State
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;