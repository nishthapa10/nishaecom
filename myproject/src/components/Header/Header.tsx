import React, { FunctionComponent } from 'react';
import logo from '../../assets/logo_r.png';
import { HeaderWrapper, Wrapper } from './Header.styled';
const Header: FunctionComponent<any> = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div className="logoContainer">
          <img className="logo" src={logo} />
        </div>
        <div>
          <ul className="menuContainer">
            <li className="list">
              <div className="listItem">shop</div>
              <div className="dropdownIcon">^</div>
            </li>
            <li className="list listItem">about </li>
            <li className="list">
              <div className="listItem">more</div>
              <div className="dropdownIcon">^</div>
            </li>
          </ul>
        </div>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
