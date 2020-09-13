import React, { Component } from 'react';
import data, {uniqueCategories, categoriesWithCounts} from './data';
import './App.css';

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {text: "All"};
    }
    
    onButtonPress(category) {
      this.setState({
        text: category
      });
    }

    render() {

    return (
      <div className="App">
        <header className="App-header">
        <div className="button-row">
            <h2>Categories</h2>
            <p>{this.state.text}</p>
              {uniqueCategories.map((category) => <button onClick={(e) => {
                this.onButtonPress(category)
              }}>{category}<text>  {categoriesWithCounts[category]}</text></button>)}
            </div>
          <div className="row">
            <div className="grid">
              {data.filter((item) => {    
                if (this.state.text === "All") {
                  return item
                } else {
                  return item.category === this.state.text || this.state.text === null         
                }
                
              }).map((object)=> {
                return (<div style={{marginBottom: '90px'}}>
                <h2>{object.name}</h2>
                <p>{object.description}</p>
                <p><strong>{object.price}</strong></p>
                <small>{object.category}</small>
                </div>);
              })}
          
            </div>
            <div>
            </div>
          </div>
        </header>
      </div>
    );
          }
}

export default App;