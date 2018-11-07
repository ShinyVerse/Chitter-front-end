import React from 'react';

const peep = (props) => {
  return (
    <li id={props.id}>
      <h5>Message:</h5>
      <p> {props.body} </p>
    </li>
  )
}

export default peep;
