import React from 'react';

const SearchResultListItem = (props) => (
  <li className="search-result-list__song row-flex p-3">
    <img src={props.item.artworkUrl60} width="60" height="60" alt="song logo"/>
    <div className="search-result-list__song-details pl-3 col-flex">
      <h2 className="search-result-list__song-name m-0">{props.item.trackName}</h2>
      <span className="search-result-list__song-artist m-0">{props.item.artistName}</span>
    </div>
  </li>
);

export default SearchResultListItem;
