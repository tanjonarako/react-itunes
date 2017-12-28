import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const searchAction = (searchTerm) => ({
  type: "updateList",
  payload: {
    request: {
      url: 'https://itunes.apple.com/search?term=' + searchTerm
    }
  }
});

const mapDispatchToProps = (dispatch) => ({
  doSearch: (searchTerm) => dispatch(searchAction(searchTerm)),
});

export class SearchBar extends Component {
  state = {
    value: ''
  }

  static propTypes = {
    doSearch: PropTypes.func
  }

  handleSubmit = (e) => { 
    e && e.preventDefault();

    const inputValue = this.state.value;

    this.props.doSearch(inputValue);
    this.setState({value: ''});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <header className="justify-content-center align-items-center search-bar">
        <div className="navbar bg-nav row-flex">
          <p className="navbar-brand m-0 py-0 pr-2" href="#">
            <img src="https://www.apple.com/ac/globalnav/3/fr_FR/images/globalnav/apple/image_large.svg" width="40" height="40" className="d-inline-block align-center" alt="itunes" />
            iTunes
          </p>
          <form className="search-form my-2 my-lg-0 col-flex" onSubmit={this.handleSubmit} >
            <input className="search-form__input bg-dark" type="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
            <a className="search-form__button m-0 p-0" href="#" role="button" type="submit" onClick={this.handleSubmit} ><img src="https://icongr.am/clarity/search.svg?color=FFFFFF" width="20" alt="search icon"/></a>
          </form>
        </div>
      </header>
    );
  }
}

export default connect(
  state => ({}),
  mapDispatchToProps
)(SearchBar)
