import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/fontawesome-free-solid';
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
  return (
    <ContainerFluid>
      <BannerWrapper overlay={overlay} big={big} img={url}>
        <BannerTextWrapper sectionCTA={sectionCTA}>
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

export const SectionAboutPostPay = ({ url, titleSection, subTitleSection, descriptionSection }) => (
  <Container>
    <SectionBodyWrapper alignCenter>
      <SectionTwoElementsImgWrapper>
        <img src={url} alt="handup" />
      </SectionTwoElementsImgWrapper>
      <SectionTwoElementsTextWrapper>
        <TitleSection>{titleSection}</TitleSection>
        <SectionSubtitle>{subTitleSection}</SectionSubtitle>
        <SectionDescription>{descriptionSection}</SectionDescription>
      </SectionTwoElementsTextWrapper>
    </SectionBodyWrapper>
  </Container>
);

// Section how it works

export const SectionComponent = ({ titleSection, children, alignCenter }) => (
  <SectionWrapper>
    <Container>
      <TitleSection center="center" padding_bottom="padding_bottom">
        {titleSection}
      </TitleSection>
      <SectionBodyWrapper alignCenter={alignCenter}>{children}</SectionBodyWrapper>
    </Container>
  </SectionWrapper>
);

export const SectionTwoColumn = ({ children, alignCenter }) => (
  <SectionWrapper>
    <Container>
      <SectionBodyWrapper alignCenter={alignCenter}>{children}</SectionBodyWrapper>
    </Container>
  </SectionWrapper>
);

// ItemContent
export const ItemContent = ({
  url,
  alt,
  titleItem,
  desTitleItem,
  newAttr,
  centerImg,
  bigImgMb,
}) => (
  <ItemColumnWrapper>
    <ImageItem bigImg={newAttr} centerImg={centerImg}>
      <img src={url} alt={alt} />
    </ImageItem>
    <TitleItem bigImgMb={bigImgMb}>{titleItem}</TitleItem>
    <DesTitleItem center="center" padding_bottom="padding_bottom">
      {desTitleItem}
    </DesTitleItem>
  </ItemColumnWrapper>
);
// =================================================================
//  section Nav
// =================================================================
export const NavBarHeader = ({ scrollPos }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
    console.log(isNavVisible);
  };

  return (
    <NavBarComponent scrollPos={scrollPos}>
      <Container>
        <NavBarWrapper>
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
    `}
  ${(props) =>
    props.padding_bottom &&
    css`
      padding-bottom: 60px;
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
    props.bigImgMb &&
    css`
      margin-bottom: 30px;
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
    width: 300px;
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
