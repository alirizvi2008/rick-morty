import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../reducers/themeReducer';
import { ThemeTypes } from '../constants/ThemeTypes';
import { NavbarWrapper } from './Navbar.styled';
import { Notch, ToggleWrapper } from './Toggle.style';
import { themeSelector } from '../selectors/themeSelector';

const Navbar: React.FC<{}> = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  return (
    <NavbarWrapper>
      <span>
        <Link to='/'>
          <img
            src={`${process.env.PUBLIC_URL}/Rick_and_Morty_logo.png`}
            height='40px'
            alt=''
          />
        </Link>
      </span>
      <ToggleWrapper onClick={() => dispatch(toggle())}>
        <Notch isLight={theme === ThemeTypes.Light} />
      </ToggleWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
