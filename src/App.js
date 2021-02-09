import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import Group from './components/Groups'
import Home from './components/Home'
class App extends Component{
  


render(){
  return (
    <div className="App">
    <Router>
      <Route  path="/" component={Home}></Route>
      <Route  path="/groups" component={Group}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      
      </Router>
    </div>
  );
}
}


export default App;
