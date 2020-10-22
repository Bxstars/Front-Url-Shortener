import React from 'react';

const BASE_URL = 'https://jp-go-url-shortener.herokuapp.com';

class NewLink extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.link.map((link) => {
          const url = `${BASE_URL}/${link.slug}`;
          return (
            <li key={link.slug}>
              <a href={url}>{url}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NewLink;
