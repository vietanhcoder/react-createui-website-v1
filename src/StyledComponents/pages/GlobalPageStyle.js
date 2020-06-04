import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/fontawesome-free-solid';
import { WidthPageContext } from '../../useContext/UseContext';
import {
  ContainerFluid,
  BannerWrapper,
  BannerSubTitle,
  BannerTextWrapper,
  BannerTitle,
  Headline,
  Button,
  Container,
  // Navbar
  LogoLink,
  NavLinkLv2,
  DropdownLinkLv2,
  NavLinkLv1,
  MenuDropdown,
  NavBarWrapper,
  NavBarLinkWrapper,
  NavBarComponent,
  ShowContentMobile,
  NavLinkMobileWrapperlv1,
  NavLinkMobileWrapperlv2,
  NavLinkMobileContent,
  ButtonWrapper,
  NavLinkMobileWrapperRelative,
  Overlay,
} from '../molecules/GlobalMoleculeStyle';

// Banner container Fruid
export const BannerFruid = ({
  headline,
  BannerTitleText,
  BannerSubTitleText,
  url,
  href,
  nameBtn,
  sectionCTA,
  overlay,
  big,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);
  return (
    <ContainerFluid>
      <BannerWrapper overlay={overlay} big={big} img={url} isSmallScreen={isSmallScreen}>
        <BannerTextWrapper sectionCTA={sectionCTA} isSmallScreen={isSmallScreen}>
          {headline ? <Headline>{headline}</Headline> : null}
          <BannerTitle sectionCTA={sectionCTA}>{BannerTitleText}</BannerTitle>
          <BannerSubTitle>{BannerSubTitleText}</BannerSubTitle>
          {href ? <Button href={href}>{nameBtn}</Button> : null}
        </BannerTextWrapper>
      </BannerWrapper>
    </ContainerFluid>
  );
};

// Section about post pay

export const SectionAboutPostPay = ({ url, titleSection, subTitleSection, descriptionSection }) => {
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);
  return (
    <Container isSmallScreen={isSmallScreen}>
      <SectionBodyWrapper alignCenter isSmallScreen={isSmallScreen}>
        <SectionTwoElementsImgWrapper>
          <img src={url} alt="handup" />
        </SectionTwoElementsImgWrapper>
        <SectionTwoElementsTextWrapper>
          <TitleSection isSmallScreen={isSmallScreen}>{titleSection}</TitleSection>
          <SectionSubtitle isSmallScreen={isSmallScreen}>{subTitleSection}</SectionSubtitle>
          <SectionDescription isSmallScreen={isSmallScreen}>
            {descriptionSection}
          </SectionDescription>
        </SectionTwoElementsTextWrapper>
      </SectionBodyWrapper>
    </Container>
  );
};

// Section how it works

export const SectionComponent = ({ titleSection, children, alignCenter }) => {
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);
  return (
    <SectionWrapper>
      <Container isSmallScreen={isSmallScreen}>
        <TitleSection center="center" padding_bottom="padding_bottom" isSmallScreen={isSmallScreen}>
          {titleSection}
        </TitleSection>
        <SectionBodyWrapper isSmallScreen={isSmallScreen} alignCenter={alignCenter}>
          {children}
        </SectionBodyWrapper>
      </Container>
    </SectionWrapper>
  );
};

export const SectionTwoColumn = ({ children, alignCenter }) => {
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);
  return (
    <Container isSmallScreen={isSmallScreen}>
      <SectionBodyWrapper isSmallScreen={isSmallScreen} alignCenter={alignCenter}>
        {children}
      </SectionBodyWrapper>
    </Container>
  );
};

// ItemContent
export const ItemContent = ({
  url,
  alt,
  titleItem,
  desTitleItem,
  newAttr,
  centerImg,
  bigImgMb,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);
  return (
    <ItemColumnWrapper isSmallScreen={isSmallScreen}>
      <ImageItem bigImg={newAttr} centerImg={centerImg}>
        <img src={url} alt={alt} />
      </ImageItem>
      <TitleItem isSmallScreen={isSmallScreen} bigImgMb={bigImgMb}>
        {titleItem}
      </TitleItem>
      <DesTitleItem center="center" padding_bottom="padding_bottom">
        {desTitleItem}
      </DesTitleItem>
    </ItemColumnWrapper>
  );
};
// =================================================================
//  section Nav
// =================================================================
export const NavBarHeader = ({ scrollPos }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [showLv2, setShowLv2] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const _handleDropdownLv2 = () => {
    setShowLv2(!showLv2);
  };

  return (
    <div>
      <NavBarComponent scrollPos={scrollPos} isSmallScreen={isSmallScreen}>
        <Container isSmallScreen={isSmallScreen}>
          <NavBarWrapper isSmallScreen={isSmallScreen}>
            <ShowContentMobile isSmallScreen={isSmallScreen} onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </ShowContentMobile>
            <LogoLink exact to="/">
              postpay
            </LogoLink>
            <NavBarLinkWrapper isSmallScreen={isSmallScreen}>
              <NavLinkLv1 to="/">how it works</NavLinkLv1>
              <MenuDropdown dropDown>
                postpay for business
                <FontAwesomeIcon icon={faChevronDown} />
                <DropdownLinkLv2>
                  <NavLinkLv2 to="/">Benefits</NavLinkLv2>
                  <NavLinkLv2 to="/">add postpay for your business</NavLinkLv2>
                  <NavLinkLv2 to="/">for developers</NavLinkLv2>
                </DropdownLinkLv2>
              </MenuDropdown>
              <Button headerBtn to="/login">
                login
              </Button>
            </NavBarLinkWrapper>
          </NavBarWrapper>
        </Container>
      </NavBarComponent>
      <NavLinkMobileWrapperlv1 isNavVisible={isNavVisible}>
        <NavLinkMobileWrapperRelative>
          <NavLinkMobileWrapperlv2>
            <NavLinkMobileContent>
              <NavLinkLv1 to="/" onMobile>
                how it works
              </NavLinkLv1>
              <MenuDropdown onMobile onClick={_handleDropdownLv2} showLv2={showLv2}>
                postpay for business
                <FontAwesomeIcon icon={faChevronDown} />
                <DropdownLinkLv2>
                  <NavLinkLv2 to="/">Benefits</NavLinkLv2>
                  <NavLinkLv2 to="/">add postpay for your business</NavLinkLv2>
                  <NavLinkLv2 to="/">for developers</NavLinkLv2>
                </DropdownLinkLv2>
              </MenuDropdown>
            </NavLinkMobileContent>
            <ButtonWrapper>
              <Button headerBtn to="/login">
                login
              </Button>
            </ButtonWrapper>
          </NavLinkMobileWrapperlv2>
        </NavLinkMobileWrapperRelative>
      </NavLinkMobileWrapperlv1>
    </div>
  );
};

// Section
export const SectionWrapper = styled.div`
  width: 100%;
  padding: 80px 0;
`;

export const TitleSection = styled.h2`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
      padding-bottom: 60px;
    `}
  ${(props) =>
    props.isSmallScreen &&
    css`
      font-size: 3rem;
      padding-bottom: 10px;
    `}
`;

export const ImageItem = styled.div`
  width: 141.5px;
  object-fit: contain;
  display: block;
  margin: auto;
  margin-bottom: 50px;
  height: auto;

  ${(props) =>
    props.bigImg &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 30px;
      img {
        width: 100%;
        max-width: 300px;
      }
    `}
  ${(props) =>
    props.centerImg &&
    css`
      img {
        margin: 0 auto;
      }
    `}
`;

export const TitleItem = styled.h4`
  text-align: center;
  margin-bottom: 30px;
  min-height: 34px;
  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 30px;
    `}
  ${(props) =>
    props.bigImgMb &&
    css`
      margin-bottom: 15px;
      max-width: 220px;
    `}
`;
export const DesTitleItem = styled.p`
  text-align: left;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const ItemColumnWrapper = styled.li`
  padding: 0 20px;
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

export const SectionBodyWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  ${(props) =>
    props.isSmallScreen &&
    css`
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      ${ItemColumnWrapper} {
        width: 100%;
        margin-top: 20px;

        ${ImageItem} {
          width: 100%;
          max-width: 300px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
      }
      ${SectionTwoElementsImgWrapper} {
        img {
          width: 300px;
        }
      }
      ${SectionTwoElementsTextWrapper} {
        width: 100%;
      }
      ${TitleSection} {
        padding-bottom: 0;
        margin-top: 20px;
      }
      ${DesTitleItem} {
        color: rgb(136, 136, 136);
      }
    `}
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
`;

// =================================================================
//  section About post pay
// =================================================================

export const SectionTwoElementsImgWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 300px;
    height: auto;
    object-fit: contain;
  }
`;

export const SectionTwoElementsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66%;
`;

export const SectionSubtitle = styled.h3`
  margin-bottom: 20px;
`;

export const SectionDescription = styled.div``;
