import React, { Component } from 'react';
import PeepBoard from './components/peepboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <PeepBoard/>
      </div>
    );
  }
}

export default App;

// <ul>
// {this.state.data.map((item) =>
// <Peep key={item.id}
//           body={item.body} />
//
// )}
// </ul>
