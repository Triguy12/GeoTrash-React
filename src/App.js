import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap.js';
import IndexMap from './components/IndexMap.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: props.state
        };
    }

  render() {
      let vm = this;
      function changeState() {
        vm.setState({state: 'map',})
        alert("You have gained 5 GeoCoins for submitting a trash find!")
      }
      
        let state = this.state.state;
      
      let content;
      
      if(state === 'map') {
          content = <SimpleMap />;
      }
      else {
          content = <IndexMap />;
      }
      
    return (
      <div className="App">
        <header>
            <img src="/images/logo.PNG" alt="hi" />
            <p>Welcome to GeoTrash</p>
        </header>
        <p id="dedicated">By joining our community of dedicated users, you can help make a difference in the world by cleaning up trash found in different areas of your city.</p>
        
        <h2>Current Trash Situation In Brampton</h2>
        
        <p> At GeoTrash we strive to work hard for our community. Peel is planning to spend up to $140 million over the next 10 years to revamp its outdated waste management infrastructure. “The Region looked forward, and we saw that our current system would not sustain our waste management needs over the long term,” said Norman Lee, Peel’s director of waste management. Council’s approval sets in motion a plan to build on existing infrastructure to handle trash. Currently, Peel handles around 565,000 cubic metres of blue box and green bin material every year.</p>
        
        <br/>
        <form>
            <label>
                Location:
                <input placeholder="- - - - - Enter Location - - - - -" type="text" name="name" />
            </label>
        </form>
        <br/>
        <button onClick={changeState}>Submit</button>
        <br/>
        <br/>
        {content}
        <footer id="contact">
            <h2>Contact Us</h2>
            <p>Email Address: <a href="mailto:geotrash101@gmail.com" target="_blank" rel="noopener noreferrer">geotrash101@gmail.com</a></p>
            <p>Instagram: <a href="https://www.instagram.com/geo_trash/" target="_blank" rel="noopener noreferrer">@geo_trash</a></p>
        <br/>
        </footer>
      </div>
    );
  }
}

export default App;
