import React from 'react';

export default function List(props) {
  return (
    <ul className="list-container">
      {props.list.map((item) => <li className="list-item" key={item.id} onClick={props.getInformation(item)}>{item.name}</li>)}
    </ul>
  )
};