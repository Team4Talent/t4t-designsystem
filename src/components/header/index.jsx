import React from 'react';
import PropTypes from 'prop-types';
import Code from '../../assets/code-brackets.svg';

import { Button } from '../button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className='wrapper'>
      <div>
        <img src={Code} alt='code' />
        <h1>Team4Talent</h1>
      </div>
      <div>
        {user ? (
          <Button size='small' onClick={onLogout} label='Log out' />
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
