import React, {Component} from 'react';
class App extends Component {
  render(){
    return(
      <div>
        <div className="App-title">Spotyfind</div>
        <div>
          <input placeholder="search an artist"/>
          <button>button</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    )
  }
}
export default App;
