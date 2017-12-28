import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchResultListItem from './search_result_list_item';


export class SearchResultList extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  render() {
    const list = this.props.list;
    return (
      <div className="search-result-list">
        <ul className="list-unstyled">
          {list.map((item) => (
            <SearchResultListItem key={item.trackId} item={item}/>
          ))}
        </ul>
      </div>
    );
  }
}

SearchResultList.defaultProps = { list: []}

export default connect(
  state => ({
    list: state.list
  })
)(SearchResultList)
