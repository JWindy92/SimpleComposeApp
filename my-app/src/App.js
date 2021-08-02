
import axios from 'axios';
import { Component } from 'react';
import './App.css';

let API_HOST = 'localhost';
let API_PORT = '3001';

if (process.env.API_HOST) {
  API_HOST = process.env.API_HOST;
}
if (process.env.API_PORT) {
  API_PORT = process.env.API_PORT;
}

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
    axios.get(`http://${API_HOST}:${API_PORT}/`).then((res) => {
      this.setState({ message: res.data.message})
    }).catch((err) => {
      console.error(err)
      this.setState({ message: "Something is wrong with the API connection"})
    })
    this.setState({ message: "Message"})
  }

  render() {
    return (
      <h1>Message: {this.state.message}</h1>
      )
  }
}

function App() {
  return (
    <MessageDisplay/>
  );
}

export default App;
