import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://jp-go-url-shortener.herokuapp.com';

class NewLink extends React.Component {
  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = { url: '' };
  }

  onUpdate(evt) {
    this.setState(
      { url: evt.target.value },
    );
    console.log(this.state);
  }

  onClick(evt) {
    evt.preventDefault();
    console.log('OnClick chamada');
    const url = `${BASE_URL}/links`;
    console.log(url);
    axios.post(url, { url: this.state.url })
      .then((response) => {
        console.log(response.data);
        this.props.onCreateLink(response.data);
      });
  }

  render() {
    return (
      <form>
        <label> Crie seu link</label>
        <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.onUpdate}
        />
        <p>{this.state.url}</p>
        <button onClick={this.onClick}>Criar Link</button>
      </form>
    );
  }
}

export default NewLink;
