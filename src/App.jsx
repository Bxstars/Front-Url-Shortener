import React from 'react';
import axios from 'axios';
import './App.css';
import NewLink from './NewLink'; // Importação
import ListLinks from './ListLinks';

const BASE_URL = 'https://jp-go-url-shortener.herokuapp.com';

class App extends React.Component {
  constructor() {
    super();
    this.onCreateLink = this.onCreateLink.bind(this);
    this.state = { links: [] };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/links?limit=10&skip=0`)
      .then((response) => {
        console.log(response);
        this.setState({ links: response.data });
      });
  }

  onCreateLink(link) {
    const { links } = this.state;
    links.push(link);
    this.setState({ links });
  }

  render() {
    const { links } = this.state;
    return (
      <div className="App">
        <NewLink onCreateLink={this.onCreateLink} />
        <ListLinks links={links} />
      </div>
    );
  }
}

export default App;

/* */
