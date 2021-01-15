import React ,{Component} from 'react';
import Landing from './component/Landing' ;
import Home from './component/Home' ;

export default class App extends Component {
constructor(props){
 super(props)
 this.state = {
  component : <Landing />
 }
}
componentDidMount(){
     this.timeoutHandle = setTimeout(()=>{
          this.setState({ component: <Home /> })
     }, 1000);
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