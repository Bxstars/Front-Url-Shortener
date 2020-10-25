import React from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'https://jp-go-url-shortener.herokuapp.com';

function ListLinks(props) {
  const { links } = props;
  return (
    <ul>
      {links.map((link) => {
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

ListLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListLinks;
