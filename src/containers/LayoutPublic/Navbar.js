import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container, PrimaryButton } from '../../StyledComponents/molecules/GlobalMoleculeStyle';

/**
 * NavBarComponent
 *  container
 *    Navbarwrapper
 *   - logo
 *   - wrapper
 *   - Lv1NavLink: how it works
 *   - Lv1NavLink: postpay for business (dropdown)
 *       dropdown-wrapper
 *         Lv2NavLink: benefits
 *         Lv2NavLink: benefits
 *   - Login button
 *
 */

const Navbar = () => {
  const LogoLink = styled(NavLink)`
    color: #8abbd5;
  `;

  const NavLinkLv2 = styled(NavLink)`
    padding: 5px;
  `;

  const DropdownLinkLv2 = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    display: none;
  `;
  const NavLinkLv1 = styled(NavLink)``;

  const MenuDropdown = styled.div`
    position: relative;
    ${(props) =>
      props.dropDown &&
      css`
        &:after {
          position: absolute;
          top: 50%;
        }
        &:hover {
          ${DropdownLinkLv2} {
            opacity: 1;
            visibility: visible;
            display: block;
            z-index: 1;
          }
        }
      `}
  `;

  const NavBarWrapper = styled.div``;
  const NavBarLinkWrapper = styled.div`
    color: white;
  `;
  const NavBarComponent = styled.div`
    height: 80px;
    background: gray;
    border-bottom: 1px solid #ccc;
    box-shadow: 5px 10px #888888;
  `;

  const NavBarHeader = () => (
    <NavBarComponent>
      <Container>
        <NavBarWrapper>
          <LogoLink exact to="/home">
            Postpay
          </LogoLink>
          <NavBarLinkWrapper>
            <NavLinkLv1 to="/home">How it works</NavLinkLv1>
            <MenuDropdown>
              postpay for business
              <DropdownLinkLv2>
                <NavLinkLv2 to="/home">Benefits</NavLinkLv2>
                <NavLinkLv2 to="/home">add postpay for your business</NavLinkLv2>
                <NavLinkLv2 to="/home">for developers</NavLinkLv2>
              </DropdownLinkLv2>
            </MenuDropdown>
            <PrimaryButton to="/home">login</PrimaryButton>
          </NavBarLinkWrapper>
        </NavBarWrapper>
      </Container>
    </NavBarComponent>
  );

  return (
    <div>
      <NavBarHeader />
    </div>
  );
};

export default Navbar;
