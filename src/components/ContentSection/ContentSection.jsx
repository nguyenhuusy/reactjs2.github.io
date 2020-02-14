import React, { Component } from 'react';
import tabData from './data/tabData';
import Tab from '../Tab';
import TabContent from '../TabContent';
import './ContentSection.scss';

class ContentSection extends Component {
  constructor() {
    super();

    this.state = {
      tabIdx: 0
    }
  }

  render() {
    const { tabIdx } = this.state;
    
    return (
      <div className="content-section content-section--tabs">
        <div className="tabs">
          {tabData.map((tab, idx) => 
              <Tab 
                key={ idx }
                title={ tab.title }
                active={ tabIdx === idx }
                onClick={ () => this.setState({ tabIdx: idx }) } 
              />
          )}
        </div>
        {tabData.map((tab, idx) =>
          <TabContent 
            key={ idx } 
            active={ tabIdx === idx }
            content={ tab.content } 
          />
        )}
      </div>
    )
  }
}

export default ContentSection;