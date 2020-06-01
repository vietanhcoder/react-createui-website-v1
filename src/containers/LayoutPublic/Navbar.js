import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container, PrimaryButton } from '../../StyledComponents/molecules/GlobalMoleculeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
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
  const [scrollPos, setScrollPos] = useState(false);
  const showNavBarPos = 500;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > showNavBarPos) {
      setScrollPos(true);
    } else {
      setScrollPos(false);
    }
  };

  const LogoLink = styled(NavLink)`
    font-size: 45px;
    font-family: 'GreycliffCF-Bold';
  `;

  const NavLinkLv2 = styled(NavLink)`
    padding: 20px;
    border-bottom: 1px solid gray;
    &:last-child {
      border: none;
    }
  `;

  const DropdownLinkLv2 = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    display: none;
    flex-direction: column;
    z-index: 1;
    background: white;
    top: 54px;
    width: max-content;
    font-family: 'GreycliffCF-Light';
  `;
  const NavLinkLv1 = styled(NavLink)``;

  const MenuDropdown = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    ${(props) =>
      props.dropDown &&
      css`
        &:after {
          position: absolute;
          top: 50%;
        }
        svg {
          margin-left: 10px;
          padding-top: 5px;
        }
        &:hover {
          svg {
            transform: scale(-1);
            padding-top: 0px;
          }
          ${DropdownLinkLv2} {
            opacity: 1;
            visibility: visible;
            display: flex;
            z-index: 1;
          }
        }
      `}
  `;

  const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const NavBarLinkWrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const NavBarComponent = styled.div`
    padding: 10px 0;
    align-items: center;
    position:fixed;
    z-index:100;
    width:100%;
    color: white;
    a {
      color: white;
    }
    ${NavLinkLv1},${MenuDropdown} {
      padding: 0 20px;
      font-size: 15px;
      font-weight: bold;
      font-family: 'GreycliffCF-Bold';
    }

    ${(props) =>
      props.scrollPos &&
      css`
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        background: white;
        color: #575756;
        a {
          color: #8abbd5;
        }
        ${NavLinkLv1}, ${MenuDropdown} {
          color: #575756;
          a {
            color: #575756;
          }
        }
        @keyframes fadedown {
          from {
            top: -50px;
          }
          to {
            top: 0;
          }
        }
        animation: fadedown 3s;
      `}
    &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      background: white;
      color: #575756;
      a {
        color: #8abbd5;
      }
      ${NavLinkLv1}, ${MenuDropdown}{
        color: #575756;
        a {
          color:  #575756;
        }
      }
    }

  `;

  // const _handleScrolll = () => {};
  const NavBarHeader = ({ scrollPos }) =>
    console.log(scrollPos) || (
      <NavBarComponent scrollPos={scrollPos}>
        <Container>
          <NavBarWrapper>
            <LogoLink exact to="/">
              Postpay
            </LogoLink>
            <NavBarLinkWrapper>
              <NavLinkLv1 to="/">How it works</NavLinkLv1>
              <MenuDropdown dropDown>
                postpay for business
                <FontAwesomeIcon icon={faChevronDown} />
                <DropdownLinkLv2>
                  <NavLinkLv2 to="/">Benefits</NavLinkLv2>
                  <NavLinkLv2 to="/">add postpay for your business</NavLinkLv2>
                  <NavLinkLv2 to="/">for developers</NavLinkLv2>
                </DropdownLinkLv2>
              </MenuDropdown>
              <PrimaryButton to="/login">login</PrimaryButton>
            </NavBarLinkWrapper>
          </NavBarWrapper>
        </Container>
      </NavBarComponent>
    );

  return (
    <div>
      <NavBarHeader scrollPos={scrollPos} />
    </div>
  );
};

export default Navbar;
