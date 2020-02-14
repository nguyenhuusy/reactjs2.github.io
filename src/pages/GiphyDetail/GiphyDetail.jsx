import React, { Component } from 'react';
import { connect } from 'react-redux';

class GiphyDetail extends Component {
  handleData = () => {
    const { match, data } = this.props;
    return data.filter(item => item.id === match.params.id)[0];
  }

  render() {
    const { title, images } = this.handleData();

    return (
      <div>
        <h2>{ title }</h2>
        <div className="main-info">
          <img src={ images.original.url } alt="#" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.giphy.trending.data
})

export default connect(mapStateToProps)(GiphyDetail);