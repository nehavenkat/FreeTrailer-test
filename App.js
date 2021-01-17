import React, { Component } from 'react'
import Landing from './screens/Landing' 
import Home from "./screens/Home"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     component : <Landing />
    }
   }
   componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
             this.setState({ component: <Home /> })
        }, 4000);
   }
   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }
  render() {
    return (
      this.state.component
      
    );
  }
}
export default App;