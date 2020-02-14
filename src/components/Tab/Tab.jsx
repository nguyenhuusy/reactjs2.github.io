import React, { Component } from 'react';

class Tab extends Component {
  render () {
    const { title, active, onClick } = this.props;

    return (
      <div 
        className={ `tab ${ active ? 'active' : '' }` }
        onClick={ onClick }
      >{ title }</div>
    )
  }
}

export default Tab;