import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiSearch, FiHome, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import colors from '../../config/colors';
import { Wrapper, Navigator } from './styled';

export default function Nav() {
  const [activeLink, setLink] = useState(window.location.pathname);

  const updateActivedLink = (path) => {
    setLink(path);
  };

  return (
    <Wrapper>
      <Navigator>
        <IconContext.Provider value={{ color: colors.neutral3 }}>
          <Link
            to="/search"
            onClick={() => updateActivedLink('/search')}
            className={`container-nav-icon ${activeLink.indexOf('/search') !== -1 ? 'actived' : ''}`}
          >
            <FiSearch />
          </Link>
          <Link
            to="/"
            onClick={() => updateActivedLink('/')}
            className={`container-nav-icon ${activeLink === '/' ? 'actived' : ''}`}
          >
            <FiHome />
          </Link>
          <Link
            to="/categories"
            onClick={() => updateActivedLink('/categories')}
            className={`container-nav-icon ${activeLink.indexOf('/categories') !== -1 ? 'actived' : ''}`}
          >
            <FiGrid />
          </Link>
        </IconContext.Provider>
      </Navigator>
    </Wrapper>
  );
}
