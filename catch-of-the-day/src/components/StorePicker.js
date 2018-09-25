import React from 'react';
import { getFunName } from "../helpers"


class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from an input
    console.log(this.myInput);
    // 3. Change the page to /store/THENAMEENTERTED
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
        type="text"
        ref={this.myInput}
        required
        placeholder="Store Name"
        defaultValue={ getFunName() }
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}


// Must Export as a default
export default StorePicker;