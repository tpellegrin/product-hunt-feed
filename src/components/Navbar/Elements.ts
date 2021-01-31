import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { Colors } from '../../styles/Themes';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const Nav = styled.nav`
  display: flex;
  background: ${Colors.White};
  height: 20vw;
  justify-content: center;
  // padding: 0.5rem calc((100vh - 1000px) / 2);

  @media screen and (min-width: 1000px) {
    height: 5vw;
  }
`

export const NavLink = styled(Link)`
  color: ${Colors.Gray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  padding-bottom: 1rem;
  align-self: flex-end;

  &.active {
      color: ${Colors.Orange};
  }
`

export const Effect = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;
  left: 25%;
  transition: 0.2s ease-in-out;
  transform: translateX(-50%);
  width: 50%;
  height: 5px;
  background: ${Colors.Orange};
`

export const NavMenu = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;

  & ${NavLink}:nth-child(1).active ~ ${Effect} {
      left: 25%;
  }

  & ${NavLink}:nth-child(2).active ~ ${Effect} {
      left: 75%;
  }
`

export const NavBtn = styled(FaSearch)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      tranform: translate(-100%, 75%);
      font-size: 1.0rem;
      cursor: pointer;
  }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
