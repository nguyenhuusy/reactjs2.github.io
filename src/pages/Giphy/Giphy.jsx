import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingGifs, getMoreTrendingGifs,searchGifs } from '../../redux/actions/giphyActions';
import GiphyItem from '../../components/GiphyItem';
import './giphy.scss';

class Giphy extends Component {
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  componentDidMount() {
    this.props.getTrendingGifs();
  }
  onSearch=()=>{
    const { trendingGifs, offset, loading, getMoreTrendingGifs,q } = this.props;
    const {search}=this.state; 
    this.props.searchGifs(search);
    
     
  }
  render() {
    const { trendingGifs, offset, loading, getMoreTrendingGifs } = this.props;

    return (
      <div className="giphy">
        <div className="search">
          <input name="search" onChange={ e => this.setState({ search: e.target.value }) }/>
          <button onClick={ this.onSearch }>Seach gifs</button>
        </div>
        <h1>Gif images</h1>
        {!!trendingGifs && <div className="giphy-list">
          {trendingGifs.map((item, idx) => 
            <GiphyItem 
              key={ idx }
              id={ item.id }
              img={ item.images.original.url } 
              title={ item.title } 
              />
          )}
        </div>}
        <div className="buttons">
          {!loading && <button className="button" onClick={ () => getMoreTrendingGifs(offset + 20) }>Load more</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trendingGifs: state.giphy.trending.data,
  offset: state.giphy.trending.offset || 0,
  loading: state.giphy.loading,
  q:state.giphy.trending.q || 0
})

export default connect(mapStateToProps, { getTrendingGifs, getMoreTrendingGifs, searchGifs })(Giphy);