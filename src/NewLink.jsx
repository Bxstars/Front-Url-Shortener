import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
    const endpoint = `${BASE_URL}/links`;
    console.log(endpoint);
    const { url } = this.state;
    axios.post(endpoint, { url })
      .then((response) => {
        const { onCreateLink } = this.props;
        console.log(response.data);
        onCreateLink(response.data);
      });
  }

  render() {
    const { url } = this.state;
    return (
      <form>
        <label htmlFor="url">
          <h1>Crie seu link ;)</h1>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={this.onUpdate}
          />
        </label>
        <p>{url}</p>
        <button onClick={this.onClick} type="button"><strong>Create</strong></button>
      </form>
    );
  }
}

NewLink.propTypes = {
  onCreateLink: PropTypes.func.isRequired,
};

export default NewLink;
