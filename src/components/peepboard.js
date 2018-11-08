import React, { Component } from 'react';
import Peep from './peep'

class PeepBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  render() {
    return(
      <div>
        <ul>
        {this.state.data.map((item) =>
        <Peep key={item.id}
                  body={item.body} />

      )}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
    .then(response => response.json())
    .then(data => {
      this.setState({data: data })
  })
    .catch(err => console.error(this.props.url, err.toString()))
  }
}

export default PeepBoard;
