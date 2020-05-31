import styled, { css } from 'styled-components';
import React from 'react';

// breack ponter: 500,

// Home page
export const ContainerFluid = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
`;

// ${(props) =>
//   props.newAttr &&
//   css`
//     color: red;
//   `}
// const url = ${(props) => props.url && css`

//   `}
export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  position: relative;
  width: 100%;
  height: 550px;
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
  font-size: 39px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  color: white;
  margin-bottom: 5px;
`;

export const BannerSubTitle = styled.div`
  font-size: 15px;
  margin-bottom: 25px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 140px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  ${(props) =>
    props.sectionCTA &&
    css`
      max-width: 800px;
      left: 25%;
      text-align: center;
      color: #252524;
      ${BannerTitle} {
        color: #252524;
      }
      ${BannerSubTitle} {
        margin-bottom: 25px;
        line-height: 20px;
        color: #252524;
        font-size: 20px;
      }
    `}
`;

export const Headline = styled.div`
  font-size: 27px;
  color: #252524;
  margin-bottom: 5px;
`;

export const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-family: GreycliffCF-Bold;
  width: 200px;
  color: rgb(87, 87, 86);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 10px 15px;
  border-color: rgb(87, 87, 86);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

// export Hero Banner of Home Page

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

// =================================================================
// section how it works
// =================================================================
export const SectionWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 60px 80px;
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

export const SectionBodyWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const ItemColumnWrapper = styled.li`
  padding: 0 20px;
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
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
