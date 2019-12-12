import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeNode from './components/TreeNode';
import CheckContent from './components/CheckContent';
import mockData from './mockData';
import './components/tree-view.css';

class App extends Component {
  render() {

    let tree1 = mockData.mock1.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitter Dissaster Classifier</h1>
        </header>
        <div className='container'>
          <h2>Id:1111111111</h2>
            <div className='tree-view'>
                {tree1}
            </div>
        </div>
        <footer>
          <div className="Buttons">
            <div className="ButtonLeft"><a href="">Back</a></div>
            <div className="ButtonRight"><a href="">Next</a></div>
          </div>
        </footer>  
          
      </div>
    );
  }
}

export default App;
