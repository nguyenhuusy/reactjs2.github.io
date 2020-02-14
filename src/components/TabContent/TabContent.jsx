import React, { Component } from 'react';

class TabContent extends Component {
  render() {
    const { content, active } = this.props;

    return (
      <div className={ `tab-content ${ active ? 'active' : '' }` }>
        { content }
      </div>
    )
  }
}

export default TabContent;