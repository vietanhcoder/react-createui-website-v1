import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
// Container fluid

export const ContainerFluid = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
`;

// Container
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      padding: 0 2rem;
    `}
`;

// Hero banner
export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  position: relative;
  width: 100%;
  height: 55rem;
  ${(props) =>
    props.big &&
    css`
      height: 600px;
    `}
  ${(props) =>
    props.overlay &&
    css`
      position: relative;
      &:before {
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
      }
    `}
`;

export const BannerTitle = styled.div`
  font-family: 'GreycliffCF-Bold', 'Helvetica Neue', helvetica, Arial, sans-serif;
  font-size: 5.5rem;
  text-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
  color: white;
  margin-bottom: 5px;
  ${(props) =>
    props.sectionCTA &&
    css`
      font-size: 4rem;
    `}
`;

export const BannerSubTitle = styled.div`
  margin-bottom: 25px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: 3rem;
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) =>
    props.isSmallScreen &&
    css`
      left: 20px;
      ${BannerTitle} {
        font-size: 50px;
        line-height: 45px;
        margin-bottom: 20px;
      }
      ${BannerSubTitle} {
        margin-bottom: 25px;
        line-height: 20px;
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.sectionCTA &&
    css`
      max-width: 800px;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #252524;
      ${BannerTitle} {
        color: #252524;
      }
      ${BannerSubTitle} {
        margin-bottom: 25px;
        line-height: 20px;
        color: #252524;
        font-size: 2rem;
      }
    `}
    ${(props) =>
      props.sectionCTA &&
      props.isSmallScreen &&
      css`
      width: 100%;
      max-width: 299px;
        ${Headline} {
          font-size: 2rem;
          margin-bottom: 0;
        }
        ${BannerTitle} {
          font-size: 2.5rem;
          line-height: 25px;
        }
        ${BannerSubTitle} {
          margin-bottom: 25px;
          line-height: 20px;
          color: #252524;
          font-size: 1.5rem;
        }
        ${Button} {
          padding: 10px 15px;
          width: 200px;
        }
      }
      `}
`;

export const Headline = styled.div`
  font-size: 2.7rem;
  color: #252524;
  margin-bottom: 5px;
`;

// export const Button = styled.a`

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-family: GreycliffCF-Bold;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  background-color: transparent;
  color: rgb(87, 87, 86);
  padding: 10px 15px;
  border-color: rgb(87, 87, 86);

  &:hover {
    color: rgb(37, 37, 36);
    border-color: rgb(37, 37, 36);
  }
  ${(props) =>
    props.subscribeBtn &&
    css`
      padding: 0px 33px;
      height: 46px;
      margin-top: 6px;
    `}

  ${(props) =>
    props.headerBtn &&
    css`
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
      border-color: rgb(138, 187, 213);
      width: 120px;
      background-color: rgb(138, 187, 213);
      color: white;
      &:hover {
        background-color: rgb(100, 137, 157);
        border-color: rgb(100, 137, 157);
      }
    `}
`;

// =================================
// navbar
// =================================
export const LogoLink = styled(NavLink)`
  font-size: 4.5rem;
  font-family: 'GreycliffCF-Bold';
`;

export const NavLinkLv2 = styled(NavLink)`
  padding: 20px;
  border-bottom: 1px solid gray;
  &:last-child {
    border: none;
  }
`;

export const DropdownLinkLv2 = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  display: none;
  flex-direction: column;
  z-index: 1;
  background: white;
  top: 0;
  width: max-content;
  font-family: 'GreycliffCF-Light';
  margin-top: 20px;
`;
export const NavLinkLv1 = styled(NavLink)`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

  ${(props) =>
    props.onMobile &&
    css`
      padding: 15px 20px;
      color: #4d4d4d;
      text-shadow: none;
      font-family: 'GreycliffCF-Bold';
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:hover {
        cursor: default;
      }
    `}
`;
export const NavLinkMobileWrapperRelative = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const MenuDropdown = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 0;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  ${(props) =>
    props.onMobile &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: #4d4d4d;
      text-shadow: none;
      font-family: 'GreycliffCF-Bold';
      justify-content: space-between;
      padding: 15px 20px;
      &:hover {
        cursor: default;
      }
    `}
    ${(props) =>
      props.showLv2 &&
      css`
        svg {
          transform: scale(-1);
          padding-top: 0px;
        }
        ${DropdownLinkLv2} {
          opacity: 1;
          visibility: visible;
          display: flex;
          flex-direction: column;
          z-index: 1;
          background: white;
          top: 35px;
          padding: 0;
          width: max-content;
          font-family: 'GreycliffCF-Light';
          background-color: #f8f8f8;
          width: 100%;
          /* width: 100%; */
          margin-left: -20px;
          a {
            padding: 20px 20px;
            /* width: 100%; */
          }
        }
      `}


    
  ${(props) =>
    props.dropDown &&
    css`
      a {
        text-shadow: none;
      }
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
          position: absolute;
          opacity: 1;
          visibility: visible;
          display: flex;
          flex-direction: column;
          z-index: 1;
          background: white;
          top: 54px;
          width: max-content;
          font-family: 'GreycliffCF-Light';
        }
      }
    `}
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.isSmallScreen &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

export const ShowContentMobile = styled.div`
  display: none;
  ${(props) =>
    props.isSmallScreen &&
    css`
      display: flex;
      color: #8abbd5;
      position: absolute;
      left: 30px;
      font-size: 30px;
      &:hover {
        cursor: pointer;
      }
    `}
`;
export const NavBarLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isSmallScreen &&
    css`
      display: none;
    `}
`;
export const NavBarComponent = styled.div`
    /* padding: 10px 0; */
    align-items: center;
    position:fixed;
    z-index:2;
    width:100%;
    color: white;
    font-family: 'GreycliffCF-Bold';
    a {
      color: white;
    }
    ${NavLinkLv1},${MenuDropdown} {
      padding: 30px 24px;
      font-weight: bold;
      font-family: 'GreycliffCF-Bold';
    }
    ${(props) =>
      props.isSmallScreen &&
      css`
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        background: white;
        color: #575756;
        a {
          color: #8abbd5;
        }
      `}
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
        animation: fadedown 1s;
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

export const NavLinkMobileWrapperlv1 = styled.div`
  @keyframes fadeLeftToRight {
    from {
      left: -75%;
    }
    to {
      left: 0;
    }
  }

  @keyframes RightToLeft {
    from {
      left: 0;
    }
    to {
      left: -75%;
    }
  }

  display: none;
  position: fixed;
  width: 75%;
  height: 100%;
  background-color: white;
  z-index: 1;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  flex-direction: column;
  justify-content: space-between;
  animation: RightToLeft 2s;
  ${(props) =>
    props.isNavVisible &&
    css`
      display: flex;
      animation: fadeLeftToRight 2s;
    `}
  ${Button} {
    width: 100%;
    /* padding: 0 20px; */
    &:hover {
      border-color: rgb(138, 187, 213);
      width: 120px;
      background-color: rgb(138, 187, 213);
      width: 100%;
      color: white;
      cursor: default;
    }
  }
`;
export const ButtonWrapper = styled.div`
  padding: 0 20px;
`;

export const NavLinkMobileWrapperlv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 75px 0 20px 0;
`;

export const NavLinkMobileContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLinkMobileItem = styled(Link)``;
