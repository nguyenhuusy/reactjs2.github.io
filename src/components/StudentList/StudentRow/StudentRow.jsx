import React, { Component } from 'react';
import './StudenRow.scss';

class StudentRow extends Component {
  constructor() {
    super();

    this.state = {
      fillColor: false
    }
  }

  render() {
    const { name, gender, math, english, average } = this.props;
    const { fillColor } = this.state;

    return (
      <tr className={ fillColor ? 'colorful' : '' }>
        <td>{ name }</td>
        <td>{ gender }</td>
        <td>{ math }</td>
        <td>{ english }</td>
        {!!average && <td>{ average }</td>}
        <td>
          <button onClick={ () => this.setState({ fillColor: !fillColor }) }>{ fillColor ? 'Remove color' : 'Fill color' }</button>
        </td>
      </tr>
    )
  }
}

export default StudentRow;