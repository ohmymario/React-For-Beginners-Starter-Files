import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from '../base'

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  // Triggers when user visits page
  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  
  // Occurs when page data updated
  componentDidUpdate() {
    console.log(this.state.order);
    console.log(this.props.match.params.storeId);
    
    // (key, value) for localStorage
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
    console.log('It updated !!!');
  }

  // Triggers when user leaves page
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }


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
  };

  // Update fish from Fish input forms
  updateFish = (key, updatedFish) => {
    // 1. Create a copy of the state 
    const fishes = { ...this.state.fishes };
    // 2. Update the copied state with form inputted changes
    fishes[key] = updatedFish;
    // 3. set copy to the live state
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    // 1. Take a copy of state 
    const fishes = {...this.state.fishes};
    // 2. update the copied state
    fishes[key] = null;
    // 3. Update live state
    this.setState({ fishes })
  } 


  // Populate 9 Fishes into State
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };

  // Add quantity of order
  addToOrder = (key) => {
    // 1. Create a copy of the state 
    const order = {...this.state.order}
    // 2. Add to the order or update the number in order
    // if that certain key isn't created then return 1 
    order[key] = order[key] + 1 || 1
    // 3. Call setState to update our state object
    this.setState({
      order
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
            <Fish 
            key={key}
            index={key} 
            details={this.state.fishes[key]} 
            addToOrder={this.addToOrder}
            />
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory 
          addFish={this.addFish} 
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App;