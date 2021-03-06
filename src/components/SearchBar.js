
import React from 'react';
import Spinner from 'react-spinkit';

import DefaultButton from './DefaultButton';

import styles from './SearchBar.module.css';

// This class is heavily inspired by react-search-field
// from https://github.com/nutboltu/react-search-field

function _null_function(item){}


function SearchResults(props){
  let results = props.results;

  if (!results){
    return null;
  }

  let items = []

  results.forEach((item, index)=>{
    items.push(<li key={index}>{item}</li>);
  });

  return (<ul>{items}</ul>);
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "",
                  suggestions: null,
                  searching: null,
                  results: null};
  }

  componentDidUpdate(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        value: nextProps.searchText,
      });
    }
  }

  setResults(results){
    this.setState({searching:null,
                   suggestions:null,
                   results:results});
  }

  setSuggestions(suggestions){
    this.setState({searching:null,
                   suggestions:suggestions,
                   results:null});
  }

  startSuggestion(text){
    let social = this.props.social;
    if (!social){
      return;
    }

    let items = null;

    try{
      items = social.find(text);
    }
    catch(error){
      items = null;
    }

    let emitSelected = this.props.emitSelected;

    if (!emitSelected){
      emitSelected = _null_function;
    }

    let emitToggleFilter = this.props.emitToggleFilter;

    if (!emitToggleFilter){
      emitToggleFilter = _null_function;
    }

    if (items){
      let results = items.map((item)=>{
        let name = item.getName();
        return <DefaultButton onClick={()=>{emitSelected(item)}}
                              style={{width:"100%"}}>
                {name}
               </DefaultButton>
      });

      this.setSuggestions(results);
    }
    else{
      this.setSuggestions(null);
    }
  }

  startSearch(text){
    let social = this.props.social;

    if (!social){
      this.setResults([<div>No results!</div>]);
      return;
    }

    let items = null;

    try{
      items = social.find(text);
    }
    catch(error){
      items = null;
    }

    let emitSelected = this.props.emitSelected;

    if (!emitSelected){
      emitSelected = _null_function;
    }

    if (items){
      let results = items.map((item)=>{
        let name = item.getName();
        return <DefaultButton onClick={()=>{emitSelected(item)}}
                              style={{width:"100%"}}>
                {name}
               </DefaultButton>
      });

      this.setResults(results);
    }
    else{
      this.setResults([<div>Really no results!</div>]);
    }
  }

  searchFor(text){
    if (text && text.length > 0){
      this.setState({searching:text,
                     suggestions:null,
                     results:null});

      setTimeout(()=>{this.startSearch(text)}, 10);
    }
    else{
      this.setState({suggestions:null,
        searching:null,
        results:null});
    }
  }

  autocomplete(text){
    if (text && text.length > 0){
      this.startSuggestion(text);
    }
    else{
      this.setState({suggestions:null,
                     searching:null,
                     results:null});
    }
  }

  isSearching(){
    return this.state.searching !== null;
  }

  isSuggesting(){
    return this.state.suggestions !== null;
  }

  hasResults(){
    return this.state.results !== null;
  }

  stopSearch(){
    this.setState({searching:null,
                   suggestions:null,
                   results:null});
  }

  onChange(event){
    if (this.isSearching()){
      return;
    }

    this.setState({value: event.target.value});
    this.autocomplete(event.target.value);
  }

  onEnter(event){
    if (this.isSearching() || this.isEmpty()){
      return;
    }

    const enterKey = 13;
    const isEnterPressed = event.which === enterKey || event.keyCode === enterKey;

    if (isEnterPressed){
      this.searchFor(event.target.value);
    }
  }

  onSearch(){
    if (this.isSearching() || this.isEmpty()){
      return;
    }

    this.searchFor(this.state.value);
  }

  isEmpty(){
    return !(this.state.value && this.state.value.length > 0);
  }

  render(){
    let button_style = styles.searchButton;

    if (this.isSearching() || this.isEmpty()){
      button_style = styles.disabledButton;
    }

    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <button className={styles.hamburgerButton}
                  onClick={this.props.emitHamburgerClicked}>
            ☰
          </button>
          <input
            className={styles.searchBox}
            onChange={(event)=>{this.onChange(event)}}
            onKeyPress={(event)=>{this.onEnter(event)}}
            placeholder={this.props.placeholder}
            type="text"
            value={this.state.value}
          />
          <div className={button_style}
              onClick={()=>{this.onSearch()}}>
            <div className={styles.magnifier}>⚲</div>
          </div>
        </div>
        {this.isSearching() ? (
          <div className={styles.searchContainer}>
            <div className={styles.resultContainer}>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.stopSearch()}}>X</div>
              <div className={styles.searchPending}>
                <div>Searching for '{this.state.searching}'...</div>
                <div style={{display:"inline-block"}}>
                  <Spinner
                    name="ball-grid-pulse"
                    color="green"
                    fadeIn="none"
                  />
                </div>
              </div>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.stopSearch()}}>X</div>
            </div>
          </div>
        ) : null}
        {this.isSuggesting() ? (
          <div className={styles.searchContainer}>
            <div className={styles.resultContainer}>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.setState({suggestions:null})}}>X</div>
              <div className={styles.searchResult}>
                <SearchResults results={this.state.suggestions} />
              </div>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.setState({suggestions:null})}}>X</div>
            </div>
          </div>
        ) : null}
        {this.hasResults() ? (
          <div className={styles.searchContainer}>
            <div className={styles.resultContainer}>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.setState({results:null})}}>X</div>
              <div className={styles.searchResult}>
                <SearchResults results={this.state.results} />
              </div>
              <div className={styles.closeResultButton}
                   onClick={()=>{this.setState({results:null})}}>X</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SearchBar;
