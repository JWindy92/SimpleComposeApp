
import axios from 'axios';
import { Component } from 'react';
import './App.css';

class MessageDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    this.getMessage();
  }

  getMessage = () => {
    axios.get('http://localhost:3001/').then((res) => {
      this.setState({ message: res.data.message})
    }).catch((err) => {
      console.error(err)
      this.setState({ message: "Something is wrong with the API connection"})
    })
    this.setState({ message: "Message"})
  }

  render() {
    return <h1>{this.state.message}</h1>
  }
}

function App() {
  return (
    <MessageDisplay message="Shit"/>
  );
}

export default App;
