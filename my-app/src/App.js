
import axios from 'axios';
import { Component } from 'react';
import './App.css';

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || '3001';

console.log(process.env.API_HOST)

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
    let api_url = `http://${API_HOST}:${API_PORT}/`
    console.log(`Getting data from ${api_url}`);
    axios.get(api_url).then((res) => {
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
