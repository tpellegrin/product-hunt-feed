import React from 'react';

import { 
  Container,
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Effect 
} from './Elements';

function Navbar() {
  return (
    <>
      <Container>
        <Nav>
          <NavMenu>
            <NavLink to='/popular'>
              Popular
            </NavLink>
            <NavLink to='/newest'>
              Newest
            </NavLink>
            <Effect />
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/search' />
          </NavBtn>
        </Nav>
      </Container>
    </> 
  )
}

export default Navbar;
