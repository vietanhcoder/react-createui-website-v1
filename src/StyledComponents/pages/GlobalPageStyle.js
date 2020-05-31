import styled, { css } from 'styled-components';
import React from 'react';

import {
  ContainerFluid,
  BannerWrapper,
  BannerSubTitle,
  BannerTextWrapper,
  BannerTitle,
  Headline,
  Button,
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
          <BannerTitle>{BannerTitleText}</BannerTitle>
          <BannerSubTitle>{BannerSubTitleText}</BannerSubTitle>
          {href ? <Button href={href}>{nameBtn}</Button> : null}
        </BannerTextWrapper>
      </BannerWrapper>
    </ContainerFluid>
  );
};

// Section about post pay

export const SectionAboutPostPay = ({} = ({
  url,
  titleSection,
  subTitleSection,
  descriptionSection,
}) => (
  <Container>
    <SectionTwoElementsWrapper>
      <SectionTwoElementsImgWrapper>
        <img src={url} alt="handup" />
      </SectionTwoElementsImgWrapper>
      <SectionTwoElementsTextWrapper>
        <TitleSection>{titleSection}</TitleSection>
        <SectionSubtitle>{subTitleSection}</SectionSubtitle>
        <SectionDescription>{descriptionSection}</SectionDescription>
      </SectionTwoElementsTextWrapper>
    </SectionTwoElementsWrapper>
  </Container>
));

// Section how it works

export const SectionHowItWorks = ({ titleSection, children }) => (
  <SectionWrapper>
    <Container>
      <TitleSection center="center" padding_bottom="padding_bottom">
        {titleSection}
      </TitleSection>
      <SectionBodyWrapper>{children}</SectionBodyWrapper>
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
// Container
export const Container = styled.div`
  padding: 60px 80px;
`;

// Section
export const SectionWrapper = styled.div`
  width: 100%;
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
`;

// =================================================================
//  section About post pay
// =================================================================

export const SectionTwoElements = styled.section``;

export const SectionTwoElementsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

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
