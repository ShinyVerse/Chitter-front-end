import React, { Component } from 'react';
import Peep from './components/peep'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [],
    dataHere: false };
  }

	loadData() {
		fetch("https://chitter-backend-api.herokuapp.com/peeps")
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}

  componentDidMount() {
		this.loadData()
    this.setState({dataHere: true})
	}

  render() {

    return (
      <div className="App">
        <ul>
        {this.state.data.map((item) =>
        <Peep key={item.id}
                  body={item.body} />

      )}
        </ul>
      </div>
    );
  }
}

export default App;

// {this.state.dataHere ? (
//   <Peep/>
// ) : (
//   <h1>Loading</h1>
// )}
